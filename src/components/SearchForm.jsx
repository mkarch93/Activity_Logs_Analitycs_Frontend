import React from 'react';
import { Form, Row, Col, Select, DatePicker } from 'antd';
import { activityTypes } from './settings';
const {Option} = Select;

const SearchForm = ({onChange}) => {

    const handleChange = (name) => (value) => {
        onChange(name, value)
    }

    return (
        <Form
            name={"advanced_search"}
            className="ant-advanced-search-form"
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
                            onChange={handleChange('statuses')}
                            defaultValue={['SUCCESS', 'FAIL', 'IN_PROCESS']}
                        >
                            <Option value="SUCCESS">SUCCESS</Option>
                            <Option value="FAIL">FAIL</Option>
                            <Option value="IN_PROCESS">IN_PROCESS</Option>
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
                            onChange={handleChange('activityTypes')}
                        >
                            {activityTypes.map(v => <Option value={v} key={v}>{v}</Option>)}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24} key="dateTime">
                    <Form.Item
                        name="dateTime"
                        label="Date time"
                    >
                        <DatePicker.RangePicker
                            onChange={handleChange('dateTime')}
                            showTime style={{ width: '100%' }}/>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;