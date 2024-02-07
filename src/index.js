import { format } from "date-fns";
import { add } from "./math";
import "./index.css";

const container = document.querySelector(".container");
container.innerText = format(new Date(), "dd-MM-yyyy");

for (let i = 0; i < 10; i++) {
  console.log(`Index ${i}`);
}
const arr = [1, Math.round(Math.random() * 100), 2, 3, 4, 5];
const arr2 = [...arr, 1, 2, ...arr, 3, 1, ...arr];
console.log(``, arr2);
console.log(``, add(200, 100));
console.log(`kot`);
