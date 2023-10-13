import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useParams } from "react-router-dom";
import Error from "./Components/404";
import "./CSS/detail.css";
import db from "../public/DB/db.json";

export default function Details() {
  const { id } = useParams();
  const detail = db.find((item) => id == `:${item.id}`);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === detail.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? detail.pictures.length - 1 : prevSlide - 1
    );
  };

  if (!detail) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="detail">
        <div className="slides">
          {detail.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Slide ${index + 1}`}
              style={{ display: index === currentSlide ? "block" : "none" }}
            />
          ))}
          <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
              >
                <path
                  d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="next" onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
              >
                <path
                  d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="content">
          <div className="firstLine">
            <div>
              <h3>{detail.title}</h3>
              <p>{detail.location}</p>
            </div>

            <div className="host">
              <p>{detail.host.name}</p>
              <img
                src={detail.host.picture}
                alt="image"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="secondLine">
            <div className="tags">
              {detail.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <div className="images">
              {Array.from({ length: detail.rating }).map((_, index) => (
                <img
                  key={index}
                  src={`../src/assets/${"active.png"}`}
                  alt="image"
                />
              ))}
              {Array.from({ length: 5-detail.rating }).map((_, index) => (
                <img
                  key={index}
                  src={`../src/assets/${ "inactive.png"   }`}
                  alt="image"
                />
              ))}
            </div>
          </div>
          <div className="thirdLine">
            <details className="description">
              <summary>Description</summary>
              <p>{detail.description}</p>
            </details>
            <details className="equipements">
              <summary>Equipements</summary>

              {detail.equipments.map((equip, index) => (
                <p key={index}>{equip}</p>
              ))}
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
