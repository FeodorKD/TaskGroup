import React, {FC, useState} from 'react';
import {Button, Form, Input, Typography} from "antd";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {authSlice} from "../../../App/store/reducers/authSlice";

interface FormValues {
    password: string | undefined,
    username: string | undefined
}

const AppForm: FC = () => {
    const dispatch = useTypedDispatch()
    const {login} = authSlice.actions
    const [isValidData, setIsValidData] = useState<boolean>(true)
    const onFinish = (values: FormValues) => {
        if(values.password === 'root' && values.username === 'admin'){
            localStorage.setItem('isAuth', 'true')
            setIsValidData(prevState => !prevState ? !prevState : prevState)
            dispatch(login())
            return
        }

        setIsValidData(false)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
        >
            {!isValidData && (
                <Form.Item>
                    <Typography.Text
                        type="danger"
                    >
                        Invalid username or password
                    </Typography.Text>
                </Form.Item>
            )}
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
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
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AppForm;