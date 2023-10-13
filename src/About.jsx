import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import './CSS/About.css'
export default function About() {
    return (
      <>
        <Header />
        <div className="about">
          <h3></h3>
          <div className="details-lists">
            <details>
              <summary>Fiabilité</summary>
              <p>Lorem ipsum dolor sit amet consectetur,</p>
            </details>
            <details>
              <summary>Respect</summary>
              <p>Lorem ipsum dolor sit amet consectetur,</p>
            </details>
            <details>
              <summary>Service</summary>
              <p>Lorem ipsum dolor sit amet consectetur,</p>
            </details>
            <details>
              <summary>Sécurité</summary>
              <p>Lorem ipsum dolor sit amet consectetur,</p>
            </details>
          </div>
        </div>
        <Footer />
      </>
    );
}