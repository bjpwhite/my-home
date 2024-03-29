import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageA from "../views/pageA";
import PageB from "../views/pageB";
import PageC from "../views/pageC";
import Check from "../views/tool/check";
import RouterBeforeEach from "./RouterBeforeEach";
import Login from "../views/login";
import Container from "../components/layout/container";
import Demo1 from "@/views/demos/demo1";
import Demo2 from "@/views/demos/demo2";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from "@/lib/history";
import Demo3 from "@/views/demos/demo3";
import CRUD from "@/views/demos/CRUD";
import Test from "@/views/demos/test";
import DemoMap from "@/views/demos/DemoMap";
import DemoMap2 from "@/views/demos/DemoMap/demoMap2";

const Routers = () => {

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route element={<RouterBeforeEach />}>
                    <Route element={<Container />}>
                        <Route path="/" element={<PageA/>}/>
                        <Route path="/tools/check" element={<Check />}/>
                        <Route path="/tools/pageB" element={<PageB/>}/>
                        <Route path="/pageC" element={<PageC/>}/>
                        <Route path="/demos/demo1" element={<Demo1/>}/>
                        <Route path="/demos/demo2" element={<Demo2/>}/>
                        <Route path="/demos/demo3" element={<Demo3/>}/>
                        <Route path="/demos/CRUD" element={<CRUD/>}/>
                        <Route path="/demos/test" element={<Test/>}/>
                        <Route path="/demos/amap" element={<DemoMap/>}/>
                        <Route path="/demos/amap2" element={<DemoMap2/>}/>
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </HistoryRouter>
    )
}

export default Routers
