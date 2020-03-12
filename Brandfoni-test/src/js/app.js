'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function () {
  $('#alert').on('click', e => alert('clicked'))
});


var input = document.querySelector('input');

var result = document.querySelector('.search-result');

input.addEventListener('input', function()
{
  result.style.display = "block";
});