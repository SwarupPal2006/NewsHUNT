
import "../style/card.css";
function NewsResults({ articles }) {
  if (!articles) return <p>Loading...</p>;
  if (articles.length === 0) return <p>No news found.</p>;
  function truncate(text, limit) {
  if (!text) return "No description available.";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}


  return (
    <div className="news-grid">
      {articles.map((item, index) => (
        <div  key={index} className="card" style={{maxWidth:'360px', height: '380px'}}>
          <img src={item.urlToImage} className="card-img"/>
          <div className="card-body">
             <h5 className="cart-title" style={{color:'white'}}>{item.title}</h5>
             <p className="cart-text" style={{color:'white', fontSize: '17px', marginTop: 5, lineHeight: '20px'}}>{truncate(item.description, 85)}</p>
             <div className="card-link">
                <a href={item.url} target="_blank" className="btn-primary">Read Full Article</a>
                {/* <GeminiSummarizer articleText={url}/> */}
             </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsResults;
