/* ------------------------- */
/* Version en JavaScript pur */
/* ------------------------- */
"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  animate_text();
});
// -------------------
function animate_text() 
{
  let delay = 100, delay_start = 0, contents, letters;

  document.querySelectorAll("span").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        // ---------
        // effet machine à écrire (SIMPLE)
        elem.textContent += letter;
        // ---------
        // OU :
        // effet machine à écrire + animation CSS (SPECIAL)
        /*
        var span = document.createElement('span');
        span.innerHTML = letter.replace(/ /,'&nbsp;');
        elem.appendChild(span);
*/
        // ---------
      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}