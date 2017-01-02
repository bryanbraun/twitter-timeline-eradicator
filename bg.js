click();

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.getElementById('stream-item').style.visibility='hidden'"});
  window.close();
}

document.getElementById("global-nav-home").AddEventListener("click", insertClean);

function insertClean(){
  console.log("insertClean worked");
  chrome.tabs.insertCSS("clean.css");
};

console.log("bg.js loaded");
