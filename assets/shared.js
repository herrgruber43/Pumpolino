/* shared.js — nav, hamburger, Mondrian corners */

function initNav() {
  /* randomise corner colours */
  var colours = ['#D32F2F','#1565C0','#F9A825'];
  for (var i = colours.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = colours[i]; colours[i] = colours[j]; colours[j] = tmp;
  }
  var c1 = document.querySelector('.m-corner-1');
  var c2 = document.querySelector('.m-corner-2');
  var c3 = document.querySelector('.m-corner-3');
  if (c1) { c1.style.background = colours[0]; c1.onclick = function(){ this.classList.add('hidden'); }; }
  if (c2) { c2.style.background = colours[1]; c2.onclick = function(){ this.classList.add('hidden'); }; }
  if (c3) { c3.style.background = colours[2]; c3.onclick = function(){ this.classList.add('hidden'); }; }
}

function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('nav-overlay').classList.toggle('open');
}

function initShared() {
  initNav();
}
