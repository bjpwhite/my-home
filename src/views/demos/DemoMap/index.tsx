import React, {useEffect, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getEtcList} from "@/redux/actions/etc";
import AMap from "^/AMap";
import CourseForm from "@/views/demos/DemoMap/courseForm";
import "./demoMap.less";

const DemoMap = () => {
    const [searchParams, setSearchParams] = useState({ pageNo: 1, pageSize: 10 });
    const [searchCondition, setSearchCondition] = useState({});
    const [mapSize] = useState({width: '100%', height: 'calc(100vh - 100px)'});
    const [path] = useState([[115.858783,31.525575],[116.933348,31.684055],[119.787929,30.767369]]);
    const [lineArr] = useState([[116.478935,39.997761],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]]);
    useEffect(() => {
        // getTableData();
    }, [searchParams, searchCondition]);
    const dispatch = useDispatch();
    const [cardId, setCardId] = useState(null);
    const [waypoints, setWaypoints] = useState([]);
    const isSubmitting = useSelector((state: RootStateOrAny) => state.CRUDReducer.isSubmitting);
    const getTableData = () => {
        const data = {
            ...searchCondition,
            ...searchParams,
            type: 1,
        };
        dispatch(getEtcList(data, state));
    }
    const onSubmit = () => {
        console.log(waypoints);
    };
    const onPlaybackStart = (marker : any) => {
        if (marker) {
            console.log(lineArr);
            marker.moveAlong(lineArr, 200, (e: any) => {
                console.log(e);
                return e;
            });
        }
    };
    const state = {
        setCardId,
        dispatch,
        getTableData,
    }
    return (
        <div className="demo-map-container">
            {/*<AMap plugins={["AMap.Geocoder", "AMap.DragRoute"]} policy={0} size={mapSize} path={path} onDragRoute={(waypoints : []) => {setWaypoints(waypoints)}} />*/}
            {/*<CourseForm onSubmit={onSubmit} />*/}
            <AMap plugins={[]} size={mapSize} onPlaybackStart={(marker: any) => onPlaybackStart(marker)} />
        </div>
    )
}

export default DemoMap
