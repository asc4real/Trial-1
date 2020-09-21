import React from 'react';
import { Timeline } from 'antd';

export default function TimeLine() {

  const sampleData = ["Create a services site 2015-09-01",
                      "Solve initial network problems 2015-09-01",
                      "Technical testing 2015-09-01",
                      "Network problems being solved 2015-09-01"];

  

  return (
    <div>
      
        <Timeline>
        {sampleData.map((sample_data) =>
            <Timeline.Item>{sample_data}</Timeline.Item>
            )} 
        </Timeline>
        
    </div>
  );
}
