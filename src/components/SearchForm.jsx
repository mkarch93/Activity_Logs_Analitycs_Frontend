import React from 'react';
import { Form, Row, Col, Select, DatePicker } from 'antd';

const SearchForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            name={"advanced_search"}
            className="ant-advanced-search-form"
            onFinish={onFinish}
            layout="vertical"
        >
            <Row gutter={24}>
                <Col span={12} key="statuses">
                    <Form.Item
                        name="statuses"
                        label="Statuses"
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                        >
                         <Select.Option>dbkldfbnldfknb</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} key="activityTypes">
                    <Form.Item
                        name="activityTypes"
                        label="Activity types"
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                        >
                            <Select.Option>dbkldfbnldfknb</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24} key="activityTypes">
                    <Form.Item
                        name="activityTypes"
                        label="Activity types"
                    >
                        <DatePicker.RangePicker showTime style={{ width: '100%' }}/>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;