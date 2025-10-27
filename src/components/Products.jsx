import React from "react";
import '../styles/Products.css';
import Rey from '../assets/rey.png';

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
          <span className="card-category">Indoor</span>
          <div className="card-details">
            <span className="card-title">Peace Lily</span>
            <span className="card-price">$36.00</span>
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
            src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
            alt=""
          />
        </div>
        <div className="card-content">
          <span className="card-category">Outdoor</span>
          <div className="card-details">
            <span className="card-title">Monstera</span>
            <span className="card-price teal-price">$45.00</span>
          </div>
        </div>
      </div>
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
            <span className="card-category">Indoor</span>
            <div className="card-details">
              <span className="card-title">Peace Lily</span>
              <span className="card-price">$36.00</span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
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
            <span className="card-category">Indoor</span>
            <div className="card-details">
              <span className="card-title">Peace Lily</span>
              <span className="card-price">$36.00</span>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
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
            <span className="card-category">Indoor</span>
            <div className="card-details">
              <span className="card-title">Peace Lily</span>
              <span className="card-price">$36.00</span>
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