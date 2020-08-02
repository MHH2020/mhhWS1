// var frm_Show = document.getElementById("frm_Show");
// var btn_Home = document.getElementById("btn_Home");
// var btn_Men = document.getElementById("btn_Men");
// var btn_MenSport = document.getElementById("btn_MenSport");
// var btn_Women = document.getElementById("btn_Women");
// var btn_Baby = document.getElementById("btn_Baby");

// btn_Men.addEventListener("click", link1);
// btn_MenSport.addEventListener("click", link1);
// btn_Women.addEventListener("click", link1);
// btn_Baby.addEventListener("click", link1);

// function link1() {

//     frm_Show.src = "https://www.google.com/";

// }

//  alert("Pages/Home.html");var
// alert(item.getAttribute('id'));
// var x = document.getElementById("frm_Show").src;
// document.getElementById("demo").innerHTML = x;

function OpenPage(item) {
  if (item.getAttribute("id") === "btn_Home") {
    document.getElementById("frm_Show").src = "Pages/Home.html";
  }
  if (item.getAttribute("id") === "btn_Men") {
    document.getElementById("frm_Show").src = "Pages/Men_Shose.html";
  }
  if (item.getAttribute("id") === "btn_MenSport") {
    document.getElementById("frm_Show").src = "Pages/Men_Sport_Shose.html";
  }
  if (item.getAttribute("id") === "btn_Women") {
    document.getElementById("frm_Show").src = "Pages/Women_Shose.html";
  }
  if (item.getAttribute("id") === "btn_Baby") {
    document.getElementById("frm_Show").src = "Pages/Baby_Shose.html";
  }
}

function loadFunction(item) {
  if (item.getAttribute("id") === "frm_Show") {
    doc.getElementById("frm_Show").src = "Pages/Home.html";
  }
}
