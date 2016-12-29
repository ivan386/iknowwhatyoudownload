// ==UserScript==
// @name BtDigg links for iknowwhatyoudownload.com
// @description BtDigg magnet link search by file name from iknowwhatyoudownload.com
// @author ivan386
// @license MIT
// @version 1.0
// @run-at document-end
// @include http://iknowwhatyoudownload.com/*
// ==/UserScript==

javascript:
document.querySelectorAll("td[title]").forEach((el, i, a, l )=>(l = el.appendChild(document.createElement("a")), l.appendChild(el.childNodes[0]), l.target="_blank" , l).href="https://btdig.com/search?q="+encodeURIComponent(el.title));
void(0);