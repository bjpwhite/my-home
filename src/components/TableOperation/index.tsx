import React, {CSSProperties, useEffect} from "react";
import "./index.less"

const TableOperation = (props: any) => {
    const {
        children,
        placement = "top-left",
    } : PropsEntity = props;
    const returnPlacement : object = () => {
        const placementSplit = placement.split("-");
        let placementStyle = {
            marginTop: 0,
            marginBottom: 0,
            justifyContent: "flex-start",
        };
        if (placementSplit.length === 1) {
            placementStyle.justifyContent = "center";
            if (placement === "top") {
                placementStyle.marginBottom = 15;
            } else if (placement === "bottom") {
                placementStyle.marginTop = 15;
            }
        } else if (placementSplit.length === 2) {
            if (placementSplit[0] === "top") {
                placementStyle.marginBottom = 15;
            } else if (placementSplit[0] === "bottom") {
                placementStyle.marginTop = 15;
            }
            if (placementSplit[1] === "left") {
                placementStyle.justifyContent = "flex-start";
            } else if (placementSplit[1] === "right") {
                placementStyle.justifyContent = "flex-end";
            }
        }
        return placementStyle;
    }
    return (
        // @ts-ignore
        <div className="table-operation-container" style={returnPlacement()}>
            { children }
        </div>
    )
}

interface PropsEntity {
    readonly children: any[],
    placement?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right",
}

export default TableOperation
