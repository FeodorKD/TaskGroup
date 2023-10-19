import React, {FC} from 'react';
import {Layout, Row} from 'antd';
import classes from "./LoginPage.module.css";
import { Button, Checkbox, Form, Input } from 'antd';
import AppForm from "../../../Shared/ui/Form/AppForm";
const {
    Content,
    Footer
} = Layout;


const LoginPage: FC = () => {




    return (
        <Layout className={classes.layout}>
            <Content className={classes.content}>
                <AppForm/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default LoginPage;

