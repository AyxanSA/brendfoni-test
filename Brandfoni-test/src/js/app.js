'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel';

$(function () {
  $('#alert').on('click', e => alert('clicked'))
});
var icon1 = document.getElementsByClassName('user-profil')[0];
var activClass = document.getElementsByClassName('active')[0];
var layer = document.getElementsByClassName('layer')[0];

icon1.addEventListener("click", function () {
  console.log("clicked");
  activClass.style.display = "block";
  layer.style.display = "block";
});
layer.addEventListener("click", function () {
  activClass.style.display = "none";
  layer.style.display = "none";
  result.style.display = "none";
  input.value = "";
})
var input = document.querySelector('input');
var result = document.querySelector('.search-result');
input.addEventListener('input', function () {
  result.style.display = "block";
  layer.style.display = "block";
});
var marka = document.getElementsByClassName("marka-search");
var brends = document.getElementsByClassName("search-box")[0];


for (var i = 0; i < marka.length; i++) {
  marka[i].addEventListener("click", function () {
    var parent = this.parentElement;
    $(this).parent().siblings().removeClass('active');
    $(this).parent().toggleClass("active");
  });
}


var hearts = document.getElementsByClassName('heart')

for (var i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass("active");
  });
}

$(document).ready(function(){
  $("#last-looked .owl-carousel").owlCarousel({
    loop: true,
    items: 6,
    nav:false,
    autoplay: false,
    dots: false,
  });
});