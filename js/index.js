let abc = document.getElementById('icon');

// icon.onclick = function(){
//     console.log(" hey from fn")
// };


abc.addEventListener('click', function() {
  document.body.classList.toggle('lightTheme');

  // document.getElementById("on").style.display="none";
  // document.getElementById("off").style.display="auto";

  // document.getElementById("light").classList.toggle = "light";
});

// abc.addEventListener('click', function() {
//   console.log(" hey from fn");
//   document.body.className.toggleClass('lightTheme');
// });


// const body = document.getElementById("body")
// const switchBTN = document.getElementById("icon")


// function clickEvent() {
//   console.log(" hey");
//   if(body.classList('lightTheme')) {
//     body.classList.remove('lightTheme')
//     body.classList.add('root')
//   } else {
//     body.classList.remove('root')
//     body.classList.add('lightTheme')
//   }
// }

// switchBTN.addEventListener('click', clickEvent)
