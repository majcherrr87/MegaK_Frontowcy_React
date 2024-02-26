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
const colors = ["red", "blue", "green", "yellow", "purple"];

const randomIndex = Math.round(Math.random() * 4);
console.log(randomIndex, colors[randomIndex]);

const promptValue = prompt("podaj color w postaci HEX");
let goodColor;
let infoColor;

if (promptValue === null || promptValue.length < 7) {
  infoColor = "Błędny kolor";
  goodColor = "#000";
} else {
  goodColor = promptValue;
  infoColor = promptValue;
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      className="box1"
      style={{ ...styleBox, backgroundColor: colors[randomIndex] }}
    />
    <div className="box2" style={{ ...styleBox, backgroundColor: goodColor }}>
      {infoColor && infoColor}
    </div>
  </React.StrictMode>
);
