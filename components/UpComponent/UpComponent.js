import React, {Component} from "react"
import "./UpComponent.css"
import logo from './../../icons/logo.png';
import link_img_vk from './../../icons/vk.png';
import link_img_tg from './../../icons/tg.png';

export default class UpComponent extends Component {
    render() {
        return(




            <div className="upcom_body">
                <ul className="upcom_ul_row">
                    <li className="upcom_ul_row_li upcom_ul_logo">
                        <img className="upcom_logo" src={logo} alt="Логотип"></img>
                    </li>
                    <li className="upcom_ul_column upcom_ul_row_li upcom_ul_text_name">
                        <div className="upcom_ul_box_text_name">
                            <div className="upcom_name_h1">Цифровой регион</div>
                            <div className="upcom_name_h2">Нижегородская область</div>
                        </div>
                    </li>
                    <li className="upcom_ul_column upcom_ul_row_li upcom_ul_links_text">
                        <div className="upcom_ul_box_links_text"> 
                            <div className="upcom_li_box_links_img">
                                <div className="upcom_div_box_links_img">
                                    <a target="_blank" href="https://vk.com/digitalregion">
                                        <img className="upcom_links_img" src={link_img_vk} alt="ссылка на вк"></img>
                                    </a>
                                    <a target="_blank" href="https://t.me/digitalregion_nn">
                                        <img className="upcom_links_img" src={link_img_tg} alt="ссылка на телеграмм"></img>
                                    </a>
                                </div>
                            </div>
                            <div className="upcom_text_h12">Живи вместе с городом!</div>
                        </div>
                    </li>
                </ul>
            </div>


            // <div className="upcom_body">
            //     <ul className="upcom_ul_row">
            //         <li className="upcom_ul_row_li upcom_ul_logo">
            //             <img className="upcom_logo" src={logo} alt="Логотип"></img>
            //         </li>
            //         <li className="upcom_ul_column upcom_ul_row_li upcom_ul_text_name">
            //             <div className="upcom_ul_box_text_name">
            //                 <div className="upcom_name_h1">Цифровой регион</div>
            //                 <div className="upcom_name_h2">Нижегородская область</div>
            //             </div>
            //         </li>
            //         <li className="upcom_ul_column upcom_ul_row_li upcom_ul_links_text">
            //             <ul className="upcom_ul_box_links_text"> 
            //                 <li className="upcom_li_box_links_img">
            //                     <div className="upcom_div_box_links_img">
            //                         <a target="_blank" href="https://vk.com/digitalregion">
            //                             <img className="upcom_links_img" src={link_img_vk} alt="ссылка на вк"></img>
            //                         </a>
            //                         <a target="_blank" href="https://vk.com/welcome_to_the_city_17">
            //                             <img className="upcom_links_img" src={link_img_tg} alt="ссылка на телеграмм"></img>
            //                         </a>
            //                     </div>
            //                 </li>
            //                 <li className="upcom_text_h12">Живи вместе с городом!</li>
            //             </ul>
            //         </li>
            //     </ul>
            // </div>


            // <div className="upcom_body">
            //     <ul className="upcom_ul_row">
            //         <li className="upcom_ul_row_li upcom_ul_logo">
            //             <img className="upcom_logo" src={logo} alt="Логотип"></img>
            //         </li>
            //         <li className="upcom_ul_column upcom_ul_row_li upcom_ul_text_name">
            //             <ul className="upcom_ul_box_text_name">
            //                 <li className="upcom_name_h1">Цифровой регион</li>
            //                 <li className="upcom_name_h2">Нижегородская область</li>
            //             </ul>
            //         </li>
            //         <li className="upcom_ul_column upcom_ul_row_li upcom_ul_links_text">
            //             <ul className="upcom_ul_box_links_text"> 
            //                 <li className="upcom_li_box_links_img">
            //                     <div className="upcom_div_box_links_img">
            //                         <a target="_blank" href="https://vk.com/digitalregion">
            //                             <img className="upcom_links_img" src={link_img_vk} alt="ссылка на вк"></img>
            //                         </a>
            //                         <a target="_blank" href="https://vk.com/welcome_to_the_city_17">
            //                             <img className="upcom_links_img" src={link_img_tg} alt="ссылка на телеграмм"></img>
            //                         </a>
            //                     </div>
            //                 </li>
            //                 <li className="upcom_text_h12">Живи вместе с городом!</li>
            //             </ul>
            //         </li>
            //     </ul>
            // </div>
            
        );      
    }
}