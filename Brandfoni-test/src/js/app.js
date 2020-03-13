'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function () {
  $('#alert').on('click', e => alert('clicked'))
});

var input = document.querySelector('input');
var result = document.querySelector('.search-result');
input.addEventListener('input', function () {
  result.style.display = "block";
});

var icon1 = document.getElementsByClassName('user-profil')[0];
var activClass = document.getElementsByClassName('active')[0];
var layer = document.getElementsByClassName('layer')[0];

icon1.addEventListener("click", function () {
  console.log("clicked");
  activClass.style.display = "block";
  layer.style.display = "block";
});
layer.addEventListener("click", function(){
  activClass.style.display = "none";
  layer.style.display = "none";
})
