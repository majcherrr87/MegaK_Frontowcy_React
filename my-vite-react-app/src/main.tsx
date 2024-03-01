import React, { CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const styleBox: CSSProperties = {
  width: 100,
  height: 100,
  margin: 5,
  color: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const getRandomColor = (): string => {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const randomIndex = Math.round(Math.random() * (colors.length - 1));
  return colors[randomIndex];
};

let backgroundColor = prompt("podaj color w postaci HEX");
let content = "";
const kot = "lisa";

const colorRegExp = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
if (backgroundColor === null) backgroundColor = "#000";

if (colorRegExp.test(backgroundColor)) {
  console.log(`Kolor ${backgroundColor} jest poprawny.`);
} else {
  console.log(`Kolor ${backgroundColor} jest niepoprawny.`);
  backgroundColor = "#000";
  content = "Niepoprawny kolor";
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      className="box1"
      style={{ ...styleBox, backgroundColor: getRandomColor() }}
    />
    <div className="box2" style={{ ...styleBox, backgroundColor }}>
      {content}
    </div>
  </React.StrictMode>
);
