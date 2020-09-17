import React from "react";
import { Tabs } from 'antd';
import Subtab from "./subtab/Subtab";

const { TabPane } = Tabs;

export default function Maintab (){

    return (
        <Tabs defaultActiveKey="1" style={{ maxWidth: '850px' }}>
        <TabPane tab="Tab 1" key="1">
            <Subtab />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2.
        </TabPane>
        <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
        </TabPane>
        </Tabs>
    );
  
}
