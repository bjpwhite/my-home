/* ----------查询车辆绑定ETC/加油卡信息列表------------ */
export const getListType = {
  req: (d: any) => {
    return {
      a: d.cardNum,
      b: d.carNum,
      c: d.type,
      d: d.status,
      x: d.pageNo,
      y: d.pageSize,
    };
  },
  res: (d: any) => {
    if (d.a && +d.a === 200 && d.d && d.d.length) {
      d.d = d.d.map((i: any) => {
        return {
          id: i.aa,
          cardNum: i.a,
          account: i.b,
          owner: i.c,
          carId: i.d,
          carNum: i.e,
          remark: i.f,
          createTime: i.h,
          creator: i.k,
          updateTime: i.i,
          updater: i.m,
        };
      });
    }
    return d;
  },
};
