export const treeConvertArr = (tree: any[], arr: any[]) => {
    tree.map((item)=>{
        if(item.children){
            treeConvertArr(item.children,arr);
            delete item.children;
        }
        arr.push(item);
    })
}