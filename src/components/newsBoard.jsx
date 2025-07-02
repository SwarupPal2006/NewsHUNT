import "../style/board.css";
import { Component } from "react"; 
import Card from "./newscard";
import React from "react";



export class Catagory extends Component{
  constructor(){
    super();
    this.state = {
      selectedCategory: '',
      articles: [],
      loading: false,
      page: 1,
    }
  }
  scrollRef = React.createRef();
  async componentDidMount(){
    if (this.scrollRef.current) {
      this.scrollRef.current.scrollLeft = 0;
    }
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY
    let url = `https://newsapi.org/v2/top-headlines?q=india&apiKey=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json()
    console.log(data);
    this.setState({articles: data.articles, totalArticles: data.totalResults})
  }
   handleCategoryClick = async(catagory) =>{
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY
    let url = `https://newsapi.org/v2/top-headlines?q=${catagory}&apiKey=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json()
    console.log(data);
    this.setState({articles: data.articles,
      totalArticles: data.totalResults,
      selectedCategory: catagory
    })
    console.log('Category selected:', catagory);
   }
   


  
  render(){
    return(
      <div className='n_board'>
        <div className="catagory" ref={this.scrollRef}> 
         
           <button type="button" onClick={() => this.handleCategoryClick('business')} className="sticky-button">
          Business <i className="fas fa-briefcase"></i>
        </button>

        <button type="button" onClick={() => this.handleCategoryClick('entertainment')}>
          Entertainment <i className="fas fa-film"></i>
        </button>

        <button type="button" onClick={() => this.handleCategoryClick('general')}>
          General <i className="fas fa-globe"></i>
        </button>

        <button type="button" onClick={() => this.handleCategoryClick('health')}>
          Health <i className="fas fa-heartbeat"></i>
        </button>

        <button type="button" onClick={() => this.handleCategoryClick('science')}>
          Science <i className="fas fa-flask"></i>
        </button>

        <button type="button" onClick={() => this.handleCategoryClick('sports')}>
          Sports <i className="fas fa-futbol"></i>
        </button>

        <button type="button" onClick={() => this.handleCategoryClick('technology')}>
          Technology <i className="fas fa-microchip"></i>
        </button>
        </div>
        
           <h1>Top <span style={{ color: "#1e90ff" }}>Headlines</span></h1><br /><hr />
             <div className="row">
               {this.state.articles && this.state.articles.map((news) => {
               return (
                  <div key={news.url} className="col">
                   <Card title={news.title} descript={news.description.slice(0, 100)} src={news.urlToImage} url={news.url}/>
                  </div>
               );
             })}
             </div>
       


    </div>
    );
  };
}  

export default Catagory;