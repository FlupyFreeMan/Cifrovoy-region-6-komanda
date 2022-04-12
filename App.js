
// import logo from './icons/logo.png';
// import link_img_vk from './icons/vk.png';
// import link_img_tg from './icons/tg.png';
// import postsData from './posts/PostsData.js';
// import Post from './posts/Posts.js';
import Ccomponent from './Ccomponent.js'
import UpComponent from "./components/UpComponent/UpComponent.js";

import './App.css';
import './fonts/Sansation_Light.ttf'
// import { Button } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from 'react-router-dom';




function App() {
  return (
    <div className="body">
      <UpComponent/>
      <div className='line_upcon'></div>
      <Ccomponent/>

      
    </div>
  );
}

export default App;
