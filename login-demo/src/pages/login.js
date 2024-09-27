import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, message, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import { login } from '../apis/index'
import '../apis/mock'



const Component = () => {
    const form = Form.useForm()[0]

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
        if (userInfo?.remember) {
            form.setFieldsValue(userInfo)
        }
    }, [])
    const navigate = useNavigate()
    const onFinish = (values) => {
        login(values).then(res => {
            if (res?.status === 200) {
                message.success('登录成功');
                navigate('/', { state: { username: values?.username } })
                if (values.remember) {
                    localStorage.setItem('userInfo', JSON.stringify(values))
                }
            } else {
                message.error('操作失败')
            }

        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <Form form={form}
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
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
                <Button style={{ marginLeft: '20px' }} onClick={handleRegister} >
                    注册
                </Button>
            </Form.Item>
        </Form>
    )
};
export default Component;