/* ----------分页查询可用/不可用车辆/挂车简单信息 MD 【0x3B】CMD 【51】------------ */
export const getListType = {
    req: (d: any) => {
        return {
            a: d.type,
            b: d.status,
            c: d.carNum,
            x: d.pageNo,
            y: d.pageSize,
        };
    },
    res: (d: any) => {
        if (d.a && +d.a === 200 && d.d && d.d.length) {
            d.d = d.d.map((i: any) => {
                return {
                    carId: i.aa,
                    carNum: i.a,
                };
            });
        }
        return d;
    },
};