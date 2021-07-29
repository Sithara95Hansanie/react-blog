import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import LeftArrow from "../Assets/ArrowLeft.svg";
import RightArrow from "../Assets/ArrowRight.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={RightArrow}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.16)",
        borderRadius: "50%",
        width: 50,
        height: 50,
        right: -55,
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={LeftArrow}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.16)",
        borderRadius: "50%",
        width: 50,
        height: 50,
        left: -55,
      }}
    />
  );
}

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? "👉" : "👈";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

function customPaging(i) {
  return <span>{i + 1}</span>;
}

function appendDots(dots) {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <ul style={{ margin: "3px" }}> {dots} </ul>
    </div>
  );
}

function Transaction() {
  const itemData = require("../Data/transaction.json");
  const [cardState, setCardState] = useState({});

  useEffect(() => {
    itemData.map((data, index) => {
      setCardState((prevState) => ({ ...prevState, [index]: false }));
    });
  }, [itemData]);

  const renderSlides = () =>
    itemData.map((data, index) => (
      <div
        // className="flip-card"
        key={data.id}
        className={cardState[index] ? "flip-card active" : "flip-card"}
        onClick={() => {
          setCardState((prevState) => ({
            ...prevState,
            [index]: !cardState[index],
          }));
        }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-items">
              <div className="card-header">
                <img src={data.flagspan} alt="" />
              </div>
              <hr className="header-line" />
              <div className="card-top">
                <img src={data.img1} alt="" />
              </div>
              <div className="card-middle">
                <p>{data.aquired}</p>
              </div>
              <div className="card-bottom">
                <img src={data.img2} alt="" />
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-list">
              <ul>
                <li>Sector:</li>
                <p>Media & Internet</p>
                <li>Deal Type:</li>
                <p>Private Capital</p>
                <p>Founder-Led Businesses</p>

                <li>Engagement Type:</li>
                <p>Fund Raise</p>

                <li>Size:</li>
                <p>$45 Million</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="transaction-card-wrapper">
        <h2>Slider</h2>
        <Slider
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          // dots={true}
          customPaging={customPaging}
          // appendDots={appendDots}
          rows={2}
          slidesPerRow={4}
          // slidesToShow={1}
          // slidesToScroll={1}
          infinite={true}
          variableWidth={true}
          cssEase={"linear"}
          // swipe={true}
          // swipeToSlide={true}
        >
          {renderSlides()}
        </Slider>
      </div>
    </>
  );
}

export default Transaction;
