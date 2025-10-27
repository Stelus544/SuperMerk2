import React from "react";
import '../styles/Products.css';
import Rey from '../assets/rey.png';
import Ajax from '../assets/ajax.png';
import Bonaropa from '../assets/bonaropa.png';
import Vidrios from '../assets/limpiavidrios.png';
import Fabuloso from '../assets/fabuloso.png';

const ProductCardGrid = () => {
  return (
    <div className="product-grid">
      <div className="product-card orange-card">
        <svg
          className="card-svg"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="card-image-container">
          <div
            className="card-gradient-overlay"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="card-image"
            src={Rey}
            alt=""
          />
        </div>
        <div className="card-content">
          <span className="card-category"></span>
          <div className="card-details">
            <span className="card-title">Jabon Rey</span>
            <span className="card-price">$15.000</span>
          </div>
        </div>
      </div>
      <div className="product-card teal-card">
        <svg
          className="card-svg"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="card-image-container">
          <div
            className="card-gradient-overlay"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="card-image"
            src={Ajax}
            alt=""
          />
        </div>
        <div className="card-content">
          <span className="card-category"></span>
          <div className="card-details">
            <span className="card-title">Limpiador
            </span>
            <span className="card-price teal-price">$15.000</span>
          </div>
        </div>
      </div>
      <div className="product-grid">
        <div className="product-card blue-card">
          <svg
            className="card-svg"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="card-image-container">
            <div
              className="card-gradient-overlay"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="card-image"
              src={Bonaropa}
              alt=""
            />
          </div>
          <div className="card-content">
            <span className="card-category"></span>
            <div className="card-details">
              <span className="card-title">Bonaropa</span>
              <span className="card-price">$25.000</span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="product-grid">
        <div className="product-card gray-card">
          <svg
            className="card-svg"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="card-image-container">
            <div
              className="card-gradient-overlay"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="card-image"
              src={Vidrios}
              alt=""
            />
          </div>
          <div className="card-content">
            <span className="card-category"></span>
            <div className="card-details">
              <span className="card-title">Limpiavidrios</span>
              <span className="card-price">$15.000</span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="product-grid">
        <div className="product-card purple-card">
          <svg
            className="card-svg"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="card-image-container">
            <div
              className="card-gradient-overlay"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="card-image"
              src={Fabuloso}
              alt=""
            />
          </div>
          <div className="card-content">
            <span className="card-category"></span>
            <div className="card-details">
              <span className="card-title">Fabuloso</span>
              <span className="card-price">$20.000</span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;