import React from 'react';
import {Col, Row} from 'antd';


const App: React.FC = () => (
    <Row>
        <Col span={18} style={{background: "white"}}>col-8</Col>
        <Col span={6} style={{background: "white"}}>col-8</Col>
    </Row>
);

export default App;