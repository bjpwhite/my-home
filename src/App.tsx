import React, {useEffect} from "react";
import './App.less'
import './styles/globle.less'
import './styles/antd.less'
import Routers from "./routes/routers";

const App = () => {
    useEffect(() => {
        window._AMapSecurityConfig = {
            securityJsCode: '90bb4b01ed2d4a19d9c6f88d796c96ed',
        }
    }, []);
    return (
        <Routers />
    );
}

export default App
