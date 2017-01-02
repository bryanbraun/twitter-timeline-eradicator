function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.getElementById('stream-item').style.visibility='hidden'"});
  window.close();
}

chrome.tabs.insertCSS("clean.css");

/*
document.getElementById("global-nav-home").AddEventListener("click", insertClean);

function insertClean(){
  console.log("insertClean worked");
  chrome.tabs.insertCSS(,"clean.css",);
};
*/

console.log("clean.js loaded");
