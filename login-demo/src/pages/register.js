import React from 'react';
import { Button, message, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import { register } from '../apis/index'
import '../apis/mock'



const Component = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        if (values.password !== values.repassword) {
            message.warning('两次输入密码不一致，请再次确认')
            return
        }
        register(values).then(res => {
            if (res?.status === 200) {
                message.success('注册成功');
                navigate('/login')
                localStorage.clear();
            } else {
                message.error('操作失败')
            }

        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入',
                    },
                    { pattern: /^[\w-]{4,16}$/, message: '不少于4位，仅支持字母，数字，下划线，减号格式' }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    { required: true, message: '请输入', },
                    { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/, message: '至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符' }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="确认密码"
                name="repassword"
                rules={[
                    { required: true, message: '请输入', },
                    { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/, message: '至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符' }
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
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    )
};
export default Component;