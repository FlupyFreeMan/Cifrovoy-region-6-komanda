import React, {Component} from "react"
import vuzsData from "./VuzsData";
import "./Vuzs.css"

function Vuz(props) {
  let arrAbout = props.about_vuz.map(element => <VuzAbout about_vuz_element = {element}/>)
  return (
    <div>
      <div className="vuz">
        <div className="name_vuz" ><a className="vuz_links" target="_blank" href={props.link_vuz}>{props.name_vuz}</a></div>
        <img className="img_vuz" src={props.img_vuz} alt="image"/>
        <div className="about_vuz">{arrAbout}</div>
        <div className="under_line"></div>
      </div>
    </div>

    // <div>
    //   <div className="vuz">
    //     <div className="name_vuz">{props.name_vuz}</div>
    //     <img className="img_vuz" src={props.img_vuz} alt="image"/>
    //     <div className="about_vuz">{arrAbout}</div>
    //   </div>
    // </div>
  )
}

function VuzAbout(props) {
  return (
    <div>
        <div className="about_vuz_element">{props.about_vuz_element}</div>
    </div>
  )
}

const vuzsList = vuzsData.map(item => <Vuz name_vuz={item.name_vuz} img_vuz={item.img_vuz} about_vuz={item.about_vuz} link_vuz={item.link_vuz}/>);

export default class Vuzs extends Component {
  render() {
      return(
        <div>
          {vuzsList}

        </div>  
      );
  }
}