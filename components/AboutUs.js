import React, {Component} from "react"
import "./AboutUs.css"
import photoDev1 from "../icons/Alexey.jpg"
import photoDev2 from "../icons/Alex.jpg"
import photoDev3 from "../icons/Kiril.jpg"
import photoDev4 from "../icons/Ilya.jpg"
import photoDev5 from "../icons/Ivan.jpg"


export default class AboutUs extends Component {
   
    render() {
        return(
            <div>
                <div>
                    <div className="link_div"><a className="link_text" href="https://vk.com/digitalregion" target="_blank">Цифровой регион. Нижегородская область</a></div>
                    
                    <div className="text_about font_text">
                        <b>Цифровой регион Нижегородская область</b> - это портал об интересных событиях Нижнего Новгорода.
                        Статьи заполняются нашими авторами, к числу которых может присоединиться любой желающий. 
                        Редакция сайта и команда модераторов формируется из активных членов сообщества.
                        Кроме того, наш информационный портал — один из лучших в области — с актуальной информацией и дублированием материала в соцсетях.
                    </div>

                    <div className="devCon font_text">
                        <div className="text_head"> Наша команда:</div>
                        
                        <div className="person">
                            <div className="name"><a className="name_link" target="_blank" href="https://vk.com/dlbbvdead">Алексей Пронин</a></div>
                            <img className="photo" src={photoDev1} alt="Алексей Пронин"/> 
                            <div className="role">Занимается оформлением портала и фирменным стилем, разработчик сайта.</div>
                        </div>

                        <div className="person">
                            <div className="name"><a className="name_link" target="_blank" href="https://vk.com/welcome_to_the_city_17">Александр Матвеичев</a></div>
                            <img className="photo" src={photoDev2} alt="Александр Матвеичев"/>   
                            <div className="role">Frontend разработчик, тестирование и исправление сайта.</div>
                        </div>

                        <div className="person">
                            <div className="name"><a className="name_link" target="_blank" href="https://vk.com/isxkov">Кирилл Исаков</a></div>
                            <img className="photo" src={photoDev3} alt="Кирилл Исаков"/> 
                            <div className="role">Сбор информации для проекта, статей и документации.</div>
                        </div>

                        <div className="person">
                            <div className="name"><a className="name_link" target="_blank" href="https://vk.com/aviail">Илья Храпунов</a></div>
                            <img className="photo" src={photoDev4} alt="Илья Храпунов"/>  
                            <div className="role">Создание соцсетей, ботов для статей во ВКонтакте и Telegram.</div>
                        </div>

                        <div className="person">
                            <div className="name"><a className="name_link" target="_blank" href="https://vk.com/id140582343">Иван Башкатов</a></div>
                            <img className="photo" src={photoDev5} alt="Иван Башкатов"/> 
                            <div className="role">Составление тестов для персонализированной ленты мероприятий.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}