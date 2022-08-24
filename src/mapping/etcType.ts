/* ----------新增车辆绑定ETC/加油卡信息------------ */
export const addType = {
  req: (d: any) => {
    return {
      a: d.cardNum,
      b: d.account,
      c: d.owner,
      d: d.carId,
      e: d.carNum,
      f: d.remark,
      g: d.type,
    };
  },
  res: (d: any) => {
    return d;
  },
};

/* ----------删除车辆绑定ETC/加油卡信息------------ */
export const removeType = {
  req: (d: any) => {
    return {
      a: d.id,
      d: d.status,
    };
  },
  res: (d: any) => {
    return d;
  },
};

/* ----------修改车辆绑定ETC/加油卡信息------------ */
export const modifyType = {
  req: (d: any) => {
    return {
      aa: d.id,
      a: d.cardNum,
      b: d.account,
      c: d.owner,
      d: d.carId,
      e: d.carNum,
      f: d.remark,
      g: d.type,
    };
  },
  res: (d: any) => {
    return d;
  },
};

/* ----------查询车辆绑定ETC/加油卡信息详情------------ */
export const detailType = {
  req: (d: any) => {
    return {
      aa: d.id,
      a: d.cardNum,
      d: d.carId,
    };
  },
  res: (d: any) => {
    if (d.a && +d.a === 200 && d.d) {
      d.d = {
        id: d.d.a,
        cardNum: d.d.c,
        account: d.d.d,
        owner: d.d.e,
        carId: d.d.f,
        carNum: d.d.g,
        remark: d.d.i,
        type: d.d.h,
        companyId: d.d.b,
      };
    }
    return d;
  },
};

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
