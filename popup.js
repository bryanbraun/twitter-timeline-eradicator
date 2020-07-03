var settingsForm = document.querySelector("#settings-form");
var settingsCheckboxes = document.querySelectorAll("input[type=checkbox]");

// Pre-populate Settings
chrome.storage.sync.get(null, function(settingsObj) {
  Object.keys(settingsObj).forEach(function(settingId) {
    var settingEl = document.querySelector("#" + settingId);
    if (settingEl) {
      settingEl.checked = settingsObj[settingId];
    }
  });
});

// Listen for changes to settings
settingsCheckboxes.forEach(function(el) {
  el.addEventListener("click", function() {
    var settings = {};
    for (var i = 0; i < settingsForm.elements.length; i++) {
      var formEl = settingsForm.elements[i];
      settings[formEl.id] = formEl.checked;
    }
    chrome.storage.sync.set(settings, function() {
      // console.log("settings stored", settings)
    });
  });
});
