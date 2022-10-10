"use strict";

function renderEq(eq) {
  katex.render(eq, document.getElementById("equation"), {
    throwOnError: false,
  });
}

function isHidden() {
  return document.getElementById("solution").style.display == "none";
}

let prev = 0;
function changeEquation() {
  let index = prev;
  while (index == prev) {
    index = Math.floor(Math.random() * equations.length);
  }
  prev = index;
  const eq = equations[index];
  if (eq.equation) renderEq("\\ce{" + eq.equation + "}");
  else if (eq.katex) renderEq(eq.katex);
  document.getElementById("from").innerHTML = eq.from;
  document.getElementById("to").innerHTML = eq.to;
  document.getElementById("msg").innerHTML = eq.msg ? eq.msg : "";
}

function click() {
  if (isHidden()) {
    document.getElementById("solution").style.display = "block";
  } else {
    document.getElementById("solution").style.display = "none";
    changeEquation();
  }
}

this.addEventListener("keydown", (event) => {
  if (event.key === "Enter") click();
});

document.body.addEventListener("touchend", click);

this.addEventListener("click", click);

changeEquation();
