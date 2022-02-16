let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.king.com");
// //console.log(myLeads);
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
//console.log(leadsFromLocalStorage); this one

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    //  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    listItems +=
      // "<li><a href='" + myLeads[i] + "'target='_blank'>" + myLeads[i] + "</a></li>";
      `<li>
      <a href='${leads[i]}'target='_blank'>${leads[i]}</a>
      </li>`;
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

//localStorage.setItem("myLeads", "www.wikipedia.org");
//console.log(localStorage.getItem("myLeads"));  this one
//localStorage.clear();

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  // console.log(myLeads);

  render(myLeads);

  // console.log(localStorage.getItem("myLeads"));  this one
});

// let boxCl = document.getElementById("box");
// boxCl.addEventListener("click", function () {
//   console.log("i want to open the box");
// });

// const container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'>buy !</button>";

// function buy() {
//   container.innerHTML += "<p>" + "thank you for buying" + "</p>";
// }

// console.log(Boolean(""));
// console.log(Boolean("0"));
// console.log(Boolean(100));
// console.log(Boolean(null));
// console.log(Boolean([0]));
// console.log(Boolean(-0));
