// ==UserScript==
// @name     Google It DDG
// @version  1
// @grant    none
// @match https://*.duckduckgo.com/*
// ==/UserScript==
setTimeout(function() {
  if (document.getElementById('google_button')) return
  var el = document.getElementById('duckbar_static');
  var query = document.getElementById('search_form_input').value
  var li = document.createElement('li')
  li.id = "google_button"
  li.classList.add("zcm__item")
  li.innerHTML = '<a href="https://google.com/search?q=' + encodeURIComponent(query) + '">GOOGLE IT</a>';
  el.insertBefore(li, el.firstChild);
}, 500);
