
import { Component } from "react";
import "../style/card.css";
import GeminiSummarizer from './summarized';
export class Card extends Component{
  constructor(){
    super()
     
  }
 render(){
    let {title, descript, src, url} = this.props;
    return(
      <div className="card_container">
        <div className="card" style={{maxWidth:'360px'}}>
          <img src={src} className="card-img"/>
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{descript}...</p>
             <div className="card-link">
                <a href={url} target="_blank" className="btn-primary">Read Full Article</a>
                <GeminiSummarizer articleText={url}/>
             </div>
          </div>
        </div>
      </div>
    );
  };
}  

export default Card;