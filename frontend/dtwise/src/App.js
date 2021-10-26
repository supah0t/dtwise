import React, { useState } from "react";
import { Tabs } from '@geist-ui/react';
import { BookOpen, List, BarChart2 } from '@geist-ui/react-icons';
import "./App.css";
import { Intro } from './Components/Intro';
import { Stats } from './Containers/Stats';
import { GraphDisplay } from './Components/GraphDisplay';

function App() {
  const [value, setValue] = useState('1');
  const changeHandler = val => setValue(val);

  const RenderSwitch = number => {
    switch(number) {
      case '1':
        return <Intro />;
      case '2':
        return <Stats />;
      case '3':
        return (
          <div>
            <GraphDisplay metric='metric_1'/>
          </div>
        );
      default:
        return <div/>;
    }
  }

  return (
    <div>
        <img src="http://www.dtwise.com/wp-content/themes/dtwise/images/dtwise-logo-general.png" alt="Logo of dtwise" 
          height="60px"
        />
      <div className="gap-10" />

      <Tabs value={value} onChange={changeHandler}>
        <Tabs.Item label={<><BookOpen /> Documentation</>} value="1">
        </Tabs.Item>
        <Tabs.Item label={<><List /> Stats</>} value="2"></Tabs.Item>
        <Tabs.Item label={<><BarChart2 /> Graphs</>} value="3"></Tabs.Item>
      </Tabs>

      <div className="gap-20"/>

      <div className="content">
        {RenderSwitch(value)}
      </div>

    </div>
  );
}

export default App;
