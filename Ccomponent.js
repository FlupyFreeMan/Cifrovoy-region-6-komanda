import React, {Component} from "react"
import PostsComponent from "./posts/PostsComponent";
import AboutUs from "./components/AboutUs.js";
import Tests from "./components/tests/Tests.js";
import Vuzs from "./components/Vuzs.js";
import Prods from "./components/Prods.js";
import './App.css';

import logo from './icons/logo.png';
import link_img_vk from './icons/vk.png';
import link_img_tg from './icons/tg.png';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from 'react-router-dom';

export default class Ccomponent extends Component {
    render() {
        return(
            <div >
                {/* <div className="head_menu ">
                    <ul className="logo_text_box">
                        <li>
                            <div class="d_logo"> 
                                <img className="logo" src={logo} alt="logo"></img>
                            </div>
                        </li>
                        <li>
                            <div className="logo_text">
                            <div className="font_h1">Цифровой регион</div>
                            <div className="font_h2">Нижегородская область</div>
                            </div>
                        </li>
                        <li className="right_block">
                            <div className="right_links_and_text">
                                <ul className="links_soc">
                                    <li>
                                        <div className="link_vk ">
                                            <a target="_blank" href="https://vk.com/digitalregion">
                                            <img className="link_img_vk links_img" src={link_img_vk} alt="link_img_vk"></img>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="link_tg">
                                        <a target="_blank" href="https://vk.com/welcome_to_the_city_17">
                                            <img className="link_img_vk links_img" src={link_img_tg} alt="link_img_vk"></img>
                                        </a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="dev_izi">Живи вместе с городом!</div>
                            </div>
                        </li>
                    </ul>
                    <div className="line_head line"></div>
                </div> */}

                <Router>
                    <div>
                        <div className="menu_div ">
                            <ul className="menu_ul ">
                                <li className="menu_we menu_element">
                                    <Link to="/" className="menu_element_link" >Главная</Link>
                                </li>
                                <li className="menu_we menu_element">
                                    <Link to="/about-us" className="menu_element_link" >О нас</Link>
                                </li>
                                <li className="menu_tests menu_element">
                                    <Link to="/tests" className="menu_element_link" >Тесты</Link>
                                </li>
                                <li className="menu_prod menu_element">
                                    <Link to="/proizvodstva" className="menu_element_link" >Производства</Link>
                                </li>
                                <li className="menu_vuz menu_element">
                                    <Link to="/vuzs" className="menu_element_link" >Вузы</Link>
                                </li>
                                
                            </ul>
                            <div className="line_menu line"></div>
                        </div>
                    
                        <Routes>
                            <Route path="/" element={<PostsComponent />}></Route>
                            <Route path="/about-us" element={<AboutUs/>}></Route>
                            <Route path="/tests" element={<Tests/>}></Route>
                            <Route path="/proizvodstva" element={<Prods/>}></Route>
                            <Route path="/vuzs" element={<Vuzs/>}></Route>

                        </Routes>
                    </div>
                </Router>

                <div className="block_down">
                    <div className="line_down1 line"></div>
                    <div className="text_down">
                        <div className="text_pol">Политика конфедициальности</div>
                        <div>©2022. Цифровой регион Нижегородская область</div>
                    </div>
                    
                    <div className="line_down2 line"></div>
                </div>
                

            </div>
            
        );
    }
}