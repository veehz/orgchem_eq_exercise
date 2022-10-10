let current_equations = equations;

document.getElementById("ordering").addEventListener("click", () => {
    const btn = document.getElementById("ordering");
    if(btn.innerText == "Ordered") btn.innerText = "Random";
    else btn.innerText = "Ordered";
});

function isRandom(){
    return document.getElementById("ordering").innerText == "Random";
}

const familyTypes = [];
for (const eq of equations) {
  if (!familyTypes.includes(eq.from)) familyTypes.push(eq.from);
  if (!familyTypes.includes(eq.to)) familyTypes.push(eq.to);
}

// function checkToggleAll() {
//   console.log("checkToggleAll");
//   let allChecked = true;
//   for (const family of familyTypes) {
//     if (!document.getElementById(`toggle-${family}`).checked)
//       allChecked = false;
//   }
//   if (allChecked) document.getElementById("toggle-family").checked = true;
//   else document.getElementById("toggle-family").checked = false;
// }

function refreshCurrentEquations() {
  current_equations = [];
  for (const eq of equations) {
    if (
      document.getElementById(`toggle-${eq.from}`).checked &&
      document.getElementById(`toggle-${eq.to}`).checked
    )
      current_equations.push(eq);
  }
  changeEquation();
}

for (const type of familyTypes) {
  document.getElementById("family-fieldset").innerHTML += `
    <div>
        <input type="checkbox" id="toggle-${type}" name="toggle-${type}" value="${type}" checked>
        <label for="toggle-${type}">${type}</label>
    </div>
    `;
  if (getCookie(`toggle-${type}`) === "false") {
    document.getElementById(`toggle-${type}`).checked = false;
  }
}

for(const type of familyTypes){
    document
    .getElementById(`toggle-${type}`)
    .addEventListener("change", (event) => {
      console.log("change");
      setCookie(`toggle-${type}`, event.target.checked ? "true" : "false");
    //   checkToggleAll();
      refreshCurrentEquations();
      changeEquation();
    });
}
