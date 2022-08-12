import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "antd";
import {
    createIncrementAction,
    createDecrementAction
} from './redux/actions/count';
import {
    getPersonData
} from './redux/actions/person';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

const App = () => {
    const count = useSelector((state: RootStateOrAny) => state.countReducer.count);
    const personData = useSelector((state: RootStateOrAny) => state.personReducer.personData);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <span>{count}</span>
                <Button onClick={() => dispatch(createDecrementAction(count))}>-</Button>
                <Button onClick={() => dispatch(createIncrementAction(count))}>+</Button>
            </div>
            <div>
                <div>name: {personData.name}</div>
                <div>age: {personData.age}</div>
                <div>sex: {personData.sex}</div>
                <Button onClick={() => dispatch(getPersonData())}>获取个人信息</Button>
            </div>
        </div>
    )
}

export default App
