
import { useState,useEffect } from 'react';
import '../style/front.css';
import NewsResults from './searchResult';


const Front = () => {
   const [search,setSearch] = useState("india");
   const [newsData,setNewsData] = useState(null);
   
   const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

   const getData = async() =>{
   const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&language=en&apiKey=${API_KEY}`);
   const data = await res.json()
    console.log(data);
   setNewsData(data.articles)
    }
    const HandleInput = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
     }
    useEffect(() => {getData();}, [search]);
    
    return (
    <div className='front'>
      <div className="newstab">
        <h3>News<span className="huntt">HUNT</span></h3>
      <p>🎯NewsHUNT is your go-to companion for fast, focused news. Powered by AI, it condenses top headlines into short, insightful summaries. Skip the noise, avoid clickbait, and stay informed in seconds — whether you're on the go or taking a break. Perfect for students, professionals, and curious minds who value clarity over clutter.</p>
      
      <form>
        <div  className="navbar_search">
           <input type="text" placeholder="Search News,Articles and more" className='search' onChange={HandleInput}/>
           <button type="button" className='search-btn' onClick={getData}><img src="../src/assets/searchicon.png" alt="searchicon"/></button>
        </div>
      </form>
      </div>
      <NewsResults articles={newsData}/>
    </div>
    

  );
  };
  

export default Front;