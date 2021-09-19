// ==UserScript==
// @name         Adjust searchform Google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adjust searchform size for Google Search
// @author       Sasano Yasuhiro
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

// reffer: https://sinister.ly/Thread-Tutorial-How-To-Edit-CSS-within-TamperMonkey-Edit-Sites-CSS
function addGlobalStyle(css) {
   var head, style;
   head = document.getElementsByTagName('head')[0];
   if (!head) { return; }
   style = document.createElement('style');
   style.type = 'text/css';
   style.innerHTML = css;
   head.appendChild(style);
}
// disable horizontal scroll-bar
// reffer: https://magai.hateblo.jp/entry/2020/08/01/160304
addGlobalStyle('#appbar { min-width: 0px; }');
addGlobalStyle('.rhscol { min-width: 0px; }');
addGlobalStyle('#top_nav { min-width: 0px; }');
addGlobalStyle('div#searchform { min-width: 0px; }');
addGlobalStyle('#fbar { min-width: 0px; }');
//addGlobalStyle('#rhs { display: none; }');
// adjust searchform
addGlobalStyle('div.Q3DXx.yIbDgf { width: 100%; }');
addGlobalStyle('#tsf { width: auto; display: flex; }');
addGlobalStyle('div.A8SBwf { width: 100%; }');
addGlobalStyle('div.RNNXgb { width: auto; }');
