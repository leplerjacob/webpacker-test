import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// Store the component so that it updates when it's code changes
let element = component();
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");

    // Not very DRY
    document.body.removeChild(element)
    element = component();
    document.body.appendChild(element)
  });
}
