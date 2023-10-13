import { Footer } from "./Footer";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import db from '../../public/DB/db.json'
// import { useEffect } from "react";
import '../CSS/home.css'
export default function Home() {
//     useEffect(() => {
//         fetch(
//           "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
//         )
//           .then((response) => response.json())
//           .then((data) => console.log(data));
    // },[])
    
    return (
      <>
        <div className="container">
          <Header />
          <div className="main">
            <h3>Chez vous , partout et ailleurs</h3>
            <div className="cards">
              {db.map((card) => (
                <div className="card" key={card.id}>
                  <Link to={`details/:${card.id}`}>   <img src={card.cover} alt="image" /> </Link>
                  <p>{card.location}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
}