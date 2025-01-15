import React from "react";
import {Table,Button} from "antd";

const ProjectList = () => {
    const columns = [
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title:'Owner',
            dataIndex:'owner',
            key:'owner'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => React.createElement(Button, { type: 'link', onClick: () => console.log(record) }, '编辑')
        }
    ]

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default ProjectList;