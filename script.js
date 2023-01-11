'use strict';

window.onscroll = function(e) {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (position >= 800) {
      document.getElementById('pageTop').classList.add('open');
    } else {
      document.getElementById('pageTop').classList.remove('open');
    }
  };

//  ハンバーガー

// document.getElementById('openbtn').onclick = function () {
//     this.classList.toggle('active');
//     document.getElementById('gnav').classList.toggle('panelactive');
// };

// document.querySelectorAll('#gnav a').click = function () {
//     document.getElementById('openbtn').classList.remove('active');
//     document.getElementById('gnav').classList.remove('panelactive');
// };



// document.getElementById('menu-btn').onclick=function(e){
//   e.preventDefault();

//   document.getElementById('gnavi').classList.toggle('open');
//   this.classList.toggle('close');
// };

