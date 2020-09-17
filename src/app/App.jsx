import React from 'react';
import 'antd/dist/antd.css';
import 'shards-ui/dist/css/shards.min.css';
import 'semantic-ui-css/semantic.min.css';
import MiniDrawer from './components/Navigation';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <div>
        <MiniDrawer />
    </div>
  );
}
