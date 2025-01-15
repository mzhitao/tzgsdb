import React,{useState} from "react";
import {Tabs} from "antd";
import AddProject from "./AddProject";
import ListProject from "./ProjectList";
import { set } from "lodash";

const ProjectManagement: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState('list');
    const items=[
        {
            key:'list',
            label:'项目列表',
            children:<ListProject/>},
        {
            key:'add',
            label:'添加项目',
            children:<AddProject/>
        }
    ]
    return <Tabs activeKey={activeTab} items={items} onChange={setActiveTab} />;
};

export default ProjectManagement;