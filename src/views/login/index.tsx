import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { getToken, logout } from "@/redux/actions/login";
const Login = () => {
    let dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(logout());
    }, []);
    const onFinish = (values: any) => {
        dispatch(getToken(values, setLoading));
    };
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Mobile"
                    name="mobile"
                    rules={[{ required: true, message: 'Please input your mobile!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login