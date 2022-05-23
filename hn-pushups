// ==UserScript==
// @name     HN Pushups
// @version  3
// @grant    none
// @include  https://news.ycombinator.com/
// ==/UserScript==

function getDate(d) {
	return d.getYear() + "-" + d.getMonth() + "-" + d.getDate();
}

let loadCount = JSON.parse(localStorage.getItem("load_stats") || '{}');

console.log("load", loadCount);
const loadTime = new Date();

if (loadCount.date !== getDate(loadTime)) {
  loadCount = {
  	date: getDate(loadTime),
    count: 0,
  }
}

loadCount.count++;

localStorage.setItem("load_stats", JSON.stringify(loadCount));



function block() {
  if (window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
    return
  }
  console.log("blocking");
  
  confirm("Drop and give me 20! You've loaded HN " + loadCount.count + " times today");
  const nowTime = new Date();
  const elapsed = (nowTime.getTime() - loadTime.getTime()) / 1000;
  if (elapsed < 10) {
  	alert("It's only been " + elapsed + " seconds!");
    block();
  }
}


block();
