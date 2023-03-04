// function lightSwitch() {
//   'use strict';

//   // YOUR CODE HERE
//   // let light = document.getElementsByClassName('bulb')
//   // console.log(light);

//   // let stop = document.getElementById("stopButton")
//   // let slow = document.getElementById("slowButton")
//   // let go = document.getElementById("goButton")


//   var redbtn = document.getElementById("stopButton");
//   let rcount = 1;
//   redbtn.addEventListener("click", function(){
//     if (rcount % 2 == 0){
//       var rLight = document.getElementById("stopLight")
//       rLight.style.backgroundColor = "black"
//     } else {
//       var rLight = document.getElementById("stopLight")
//     rLight.style.backgroundColor = "red"
//   }
//     rcount++
//     console.log(rcount)
//   })
  


//   var ybtn = document.getElementById("slowButton");
//   let ycount = 1;
//   ybtn.addEventListener("click", function(){
//     if (ycount % 2 == 0){
//       var yLight = document.getElementById("slowLight")
//       yLight.style.backgroundColor = "black"
//     } else {
//       var yLight = document.getElementById("slowLight")
//       yLight.style.backgroundColor = "yellow"
//   }
//     ycount++
//   })

//   var gbtn = document.getElementById("goButton");
//   let gcount = 1;
//   gbtn.addEventListener("click", function(){
//     if (gcount % 2 == 0){
//       var gLight = document.getElementById("goLight")
//       gLight.style.backgroundColor = "black"
//     } else {
//       var gLight = document.getElementById("goLight")
//       gLight.style.backgroundColor = "green"
//     }
//     gcount++
//   })
// };

// lightSwitch()


    // var element = document.querySelector(".stop")
    // var red = getComputedStyle(element)




    
'use strict';

// YOUR CODE HERE
// let light = document.getElementsByClassName('bulb')
// console.log(light);

// let stop = document.getElementById("stopButton")
// let slow = document.getElementById("slowButton")
// let go = document.getElementById("goButton")


var redbtn = document.getElementById("stopButton");

redbtn.addEventListener("click", function(){
  var rLight = document.getElementById("stopLight")
  rLight.classList.toggle("stop")

})

var ybtn = document.getElementById("slowButton");

ybtn.addEventListener("click", function(){
    var yLight = document.getElementById("slowLight")
    yLight.classList.toggle("slow")

})

var gbtn = document.getElementById("goButton");

gbtn.addEventListener("click", function(){
    var gLight = document.getElementById("goLight")
    gLight.classList.toggle("go")

})

// redbtn.addEventListener("mouseenter", () => {buttonArea('stop')});
// ybtn.addEventListener("mouseenter", () => {buttonArea('slow')});
// gbtn.addEventListener("mouseenter", () => {buttonArea('go')});

let buttons = document.querySelectorAll(".button")
// buttons.forEach(button =>{
//   button.addEventListener("mouseenter", (e)=> {
//     buttonArea(e.target.textContent);
//   })
// })

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("mouseenter", function(e){
  buttonArea(e.target.innerText)
  })
}


function buttonArea(btnName){
  console.log(`Entered ${btnName} button`)
}


// buttons.forEach(button =>{
//   button.addEventListener("mouseleave", (e)=> {
//     leaveArea(e.target.textContent);
//   })
// })
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("mouseleave", function(e){
  leaveArea(e.target.innerText)
  })
}

function leaveArea(btnName){
  console.log(`Left ${btnName} button`)
}



  // var element = document.querySelector(".stop")
  // var red = getComputedStyle(element)