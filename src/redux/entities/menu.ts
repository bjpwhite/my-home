interface EntityData {
    type: string,
    selectedKeys: Array<string>,
    openKeys: Array<string>,
    routerMap: Object,
}

interface Entity extends EntityData {
    toObject: () => EntityData
}

export const menuEntity = (apiResponseData: EntityData) => {
    const entityObject = {
        type: apiResponseData.type,
        selectedKeys: apiResponseData.selectedKeys,
        openKeys: apiResponseData.openKeys,
        routerMap: apiResponseData.routerMap,
    }
    return {
        ...entityObject,
        toObject: () => ({ ...entityObject, }) // imagine if method does some other operations to the data
    }
}