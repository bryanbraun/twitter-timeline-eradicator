chrome.storage.sync.get(null, function(settingsObj) {
  if (settingsObj["disable-main-timeline"] === false) {
    embedCSSFile("enable-main-timeline.css");
  }
  if (settingsObj["disable-moments"] === false) {
    embedCSSFile("enable-moments.css");
  }
});

function embedCSSFile(filename) {
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = chrome.extension.getURL(filename);
  document.getElementsByTagName("head")[0].appendChild(link);
}
