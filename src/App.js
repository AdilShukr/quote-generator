import './App.css'
import { WhatsApp, Twitter } from '@material-ui/icons';
import { useState , useEffect } from 'react';
import axios from 'axios'; 
import { BrowserRouter as Router ,Link } from 'react-router-dom';
import './social-links'
import links from './social-links';

export default function App() {
  const[quotes,setQuotes] = useState([]);

  useEffect(() => {
      async function fetchData(){
          const url = await axios.get(links.api);
          setQuotes(url.data[Math.floor(Math.random() * url.data.length)]);
          return(url);

      }
      fetchData();
  
      
  }, [])
  const changequotes = () =>{
      async function fetchData(){
          const url = await axios.get(links.api);
          setQuotes(url.data[Math.floor(Math.random() * url.data.length)]);
          return(url);

      }
      fetchData();
  }
  return (
      <Router>
            
      <div className="quotes-box">
          <div className="quotes-text">
              <p>{quotes.text}</p>

          </div>
          <div className="quotes-author">
              {quotes?.author }
          </div>
          <div className="buttons">
              <div className="socialmedia">
                 <Link to={{pathname:links.twitter}} target="_blank" className="social-icons"><Twitter/></Link>
                  <Link to={{pathname:links.whatsapp}} target="_blank"className="social-icons"><WhatsApp/></Link>
                </div>
              
              <button  onClick={changequotes} className="next-button">Next</button>
           </div>
      </div>
      </Router>
  )
  
  
}
