import React from "react";

export default function PropBox({ cardInfo }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "space-evenly",
          gap: "50px",
          color: "white",
        }}
      >
        {cardInfo.map((card, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              border: "5px solid", 
              borderImage: "linear-gradient(45deg, red, blue, green, yellow) 1", 
              borderImageSlice: 1, 
              animation: "gradient-border 3s infinite",
            }}
          >
            <img
              style={{ height: "150px", width: "150px" }}
              src={card.imgSrc}
              alt={`Card ${card.id}`}
            />
            <h2>Card {card.id} </h2>
            <p>This is Card {card.id} description</p>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes gradient-border {
            0% {
              border-image-source: linear-gradient(45deg, red, blue, green, yellow);
            }
            50% {
              border-image-source: linear-gradient(45deg, yellow, green, blue, red);
            }
            100% {
              border-image-source: linear-gradient(45deg, red, blue, green, yellow);
            }
          }
        `}
      </style>
    </>
  );
}
