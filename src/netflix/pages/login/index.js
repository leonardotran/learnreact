import React, {useState} from "react";
import { Row, Col, Form, Input, Button, Spin } from 'antd';
import { apiMovie } from "../../services/movie";
import { useHistory } from "react-router-dom";
import { apiLogin } from "../../services/login";
import { helper } from "../../helpers/common";

const LoginMovies = () => {
    const history = useHistory();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [messError, setMessError] = useState(null);

    const onFinish = async (values) => {
        await setLoadingLogin(true);
        let username = values.username;
        let password = values.password;
        if(username !== '' && password !== '') {
            // call api login 
            let token = await apiLogin.checkLoginUser(username, password);
            if(token !== null) {
                //login thanh cong
                await setLoadingLogin(false);
                //Di vao trang phim (popular, search)
                helper.saveTokenLocalStorage(token);
                history.push("/popular-movies");

            } else{
                //login KO thanh cong
                await setLoadingLogin(true);
                // xoa token neu da tung co
                helper.removeTokenLocalStorage();
                await setMessError(token['error'])
            }
        }
        // console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row>
                <Col span={12} offset={6}>
                { messError !== null && <p style={{color: 'red'}}>{messError}</p>}
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

            

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button 
                        type="primary" 
                        htmlType="submit"
                        disabled={loadingLogin}
                        >
                            Login
                        </Button>
                        { loadingLogin && <Spin/>}
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default React.memo(LoginMovies);