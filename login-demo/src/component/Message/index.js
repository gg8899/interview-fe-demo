import React from 'react';
import { Button, Result } from 'antd';
const Message = ({ status, title, subTitle }) => (
    <Result
        status={status}
        title={title}
        subTitle={subTitle}
        extra={[
            <Button type="primary" key="console">
                Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
        ]}
    />
);
export default Message;