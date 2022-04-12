import React, {Component} from "react"
import prodsData from "./ProdsData.js"
import "./Prods.css"

function Prod(props) {
  return (
      <div className="prod_body">
        <ul className="ul_prod">
          <li className="li_name_prod"><div className="name_prod"><a className="link_prod" target="_blank" href={props.link_prod}>{props.name_prod}</a></div></li>
          <li><img className="img_path" src={props.img_path} alt="image"/></li>
        </ul>
        
        <div className="about_prod">{props.about}</div>
      </div>
  )
}

const prodsList = prodsData.map(item => <Prod name_prod={item.name_prod} img_path={item.img_path} about={item.about} link_prod={item.link_prod}/>);

export default class Prods extends Component {
  render() {
      return(
        <div className="prod_box">
          {prodsList}

        </div>  
      );
  }
}