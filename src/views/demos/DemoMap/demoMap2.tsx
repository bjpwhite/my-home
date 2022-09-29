import React, {useState} from "react";
import AMap from "^/AMap";

const DemoMap2 = () => {
    const [mapSize] = useState({width: '100%', height: 'calc(100vh - 100px)'});
    return (
        <div className="demo-map-container">
            <AMap size={mapSize} />
        </div>
    )
}

export default DemoMap2
