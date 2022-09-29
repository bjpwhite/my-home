import React, {useEffect, useRef, useState} from "react";
import AMapLoader from '@amap/amap-jsapi-loader';
import './MapContainer.less';
import startMark from '@/images/AMapDemo/start-mark.svg'
import terminalMark from '@/images/AMapDemo/terminal-mark.svg'
import waypointMark from '@/images/AMapDemo/waypoint-mark.png'

const AMap = (props: any) => {
    const {
        size,
        plugins,
        policy,
        path,
        lineArr,
        onDragRoute,
        onPlaybackStart,
    } : PropsEntity = props;
    let mapStatus = useRef(0);
    const [AMap, setAMap] = useState(null as any);
    const [mapInstance, setMapInstance] = useState(null as any);
    const [route, setRoute] = useState(null as any);
    const [waypoints, setWaypoints] = useState([]);
    const [geocoder, setGeocoder] = useState(null as any);
    const [marker, setMarker] = useState(null as any);
    useEffect(() => {
        if (AMap && mapInstance) {
            const marker = new AMap.Marker({
                map: mapInstance,
                position: [116.478935,39.997761],
                icon: "https://webapi.amap.com/images/car.png",
                offset: new AMap.Pixel(-26, -13),
                autoRotation: true,
                angle:-90,
            });
            // 绘制轨迹
            const polyline = new AMap.Polyline({
                map: mapInstance,
                path: lineArr,
                showDir:true,
                strokeColor: "#28F",  //线颜色
                // strokeOpacity: 1,     //线透明度
                strokeWeight: 6,      //线宽
                // strokeStyle: "solid"  //线样式
            });
            const passedPolyline = new AMap.Polyline({
                map: mapInstance,
                // path: lineArr,
                strokeColor: "#AF5",  //线颜色
                // strokeOpacity: 1,     //线透明度
                strokeWeight: 6,      //线宽
                // strokeStyle: "solid"  //线样式
            });
            marker.on('moving', function (e: any) {
                passedPolyline.setPath(e.passedPath);
            });
            if (onPlaybackStart) {
                onPlaybackStart(marker);
            }

            mapInstance.setFitView();
        }
    }, [AMap, mapInstance]);
    useEffect(() => {
        if (!mapInstance) {
            initMap();
        }
        return () => {
            if (mapInstance) {
                mapInstance.destroy();
            }
        }
    }, []);
    useEffect(() => {
        if (route && path.length >= 2) {
            route.search(); // 查询导航路径并开启拖拽导航
            route.on('addway', (e : any) => {
                console.log(e);
            })
            route.on('complete', ({type, target, data} : any) => {
                mapStatus.current += 1;
                if (data.info === "OK") {
                    console.log(target);
                    console.log(data);
                    console.log(mapStatus.current);
                    if (mapStatus.current > 1) {
                        mapInstance.clearMap();
                        const startPath = [data.start.location.lng,data.start.location.lat];
                        const endPath = [data.end.location.lng,data.end.location.lat];
                        const waypointsPath: number[][] = [];
                        let path;
                        data.waypoints?.map((e: { location: { lng: number; lat: number; }; }) => {
                            const waypointPath = [e.location.lng, e.location.lat];
                            waypointsPath.push(waypointPath);
                        });
                        path = [startPath].concat(waypointsPath).concat([endPath]);
                        const route = loadRoute(path, policy); // 构造拖拽导航类
                        setRoute(route)
                        refreshWaypoints(route.getWays());
                        route.search(); // 查询导航路径并开启拖拽导航
                        mapStatus.current = 0;
                    } else if (mapStatus.current === 1) {
                        console.log(route.getWays());
                        refreshWaypoints(route.getWays());
                    }
                }
            })
        }
        return () => {
            if (route) {
                route.destroy();
            }
        }
    }, [path, route]);
    const refreshWaypoints = (waypoints: any[]) => {
        const mypoints : any = [];
        for (const [index, item] of waypoints.entries()) {
            geocoder.getAddress([item.lng, item.lat], (status: string, result: { regeocode: { formattedAddress: any; }; }) => {
                let address;
                if (status === 'complete' && result.regeocode) {
                    address = result.regeocode.formattedAddress;
                } else {
                    address = '未知道理';
                }
                // this.pointMap[`${item.lng},${item.lat}`] = address;
                mypoints.push({
                    name: address,
                    lngLat: `${item.lng},${item.lat}`,
                    sequence: index + 1,
                    type: 1,
                    remark: address,
                });
            });
        }
        setWaypoints(mypoints);
        if (onDragRoute) {
            onDragRoute(mypoints);
        }
    };
    const loadRoute = (path: number[][], policy: number, localAMap?: any, localMapInstance?: any) => {
        return new (localAMap || AMap).DragRoute((localMapInstance || mapInstance), path, policy, {
            polyOptions: {
                zIndex: '999',
                strokeWeight: 8,
                strokeOpacity: 1,
                strokeStyle: 'solid',
                outlineColor: '#16C375',
                strokeColor: '#16C375',
                lineJoin: 'round',
                lineCap: 'round',
                showDir: true,
            },
            startMarkerOptions: {
                icon: startMark, // 添加 Icon 图标 URL
            },
            midMarkerOptions: {
                icon: waypointMark, // 添加 Icon 图标 URL
            },
            endMarkerOptions: {
                icon: terminalMark, // 添加 Icon 图标 URL
            },
        });
    };
    const initMap = () => {
        AMapLoader.load({
            key: "d39b38adf95abbc28358c881a54274bd",                     // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "1.4.15",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: plugins,               // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            AMapUI: {
                // 是否加载 AMapUI，缺省不加载
                version: '1.1', // AMapUI 缺省 1.1
                plugins: [], // 需要加载的 AMapUI ui插件
            },
            Loca: {
                // 是否加载 Loca， 缺省不加载
                version: '1.3.2', // Loca 版本，缺省 1.3.2
            },
        }).then((AMap)=>{
            setAMap(AMap);
            const map = new AMap.Map("container",{ //设置地图容器id
                resizeEnable: true,
                viewMode: "3D",         //是否为3D地图模式
                zoom: 13,                //初始化地图级别
                center: [116.397428, 39.90923], //初始化地图中心点位置
            });
            setMapInstance(map);
            const hasGeocoder = plugins.includes("AMap.Geocoder");
            const hasDragRoute = plugins.includes("AMap.DragRoute");
            if (hasGeocoder) {
                setGeocoder(new AMap.Geocoder());
            }
            if (hasDragRoute) {
                const route = loadRoute(path, policy, AMap, map); // 构造拖拽导航类
                setRoute(route)
            }
        }).catch((e: any)=>{
            console.log(e);
        })
    }
    return (
        <div id="container" className="a-a-map" style={{ width: size.width, height: size.height }} />
    )
}

interface PropsEntity {
    size: { width: string, height: string },
    plugins: string[],
    policy: number,
    path: any[],
    lineArr: number[][],
    onDragRoute?: (mypoints: any) => void,
    onPlaybackStart?: (marker: any) => void,
}

export default AMap;