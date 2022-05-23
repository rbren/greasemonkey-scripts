// ==UserScript==
// @name     Favicons for HN
// @version  1.1
// @grant    none
// @match https://*.ycombinator.com/*
// ==/UserScript==

// check for existing favicons (in case of back button)
var favicons = document.getElementsByClassName('favicon-script');
if (!(favicons.length > 0)) {
  // add favicons alongside each post title
  for(let link of document.querySelectorAll('.titlelink')) {
    const domain = new URL(link.href).hostname
    const imageUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`
    const image = document.createElement('img')
    image.src = imageUrl
    image.className = 'favicon-script'
    image.width = 16
    image.height = 16
    image.style.paddingRight = '0.25em'
    image.style.paddingLeft = '0.25em'
    link.prepend(image)
  }
}
