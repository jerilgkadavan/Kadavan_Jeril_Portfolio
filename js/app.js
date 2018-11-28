$(document).foundation()

// console.log("mainjs");

// // div hide before scroll
// document.querySelector("#bkdTextOne").style.visibility = "hidden";
// document.querySelector("#bkdTextTwo").style.visibility = "hidden";
// document.querySelector("#bkdTextThree").style.visibility = "hidden";
// document.querySelector("#softWareSkillsHeading").style.visibility = "hidden";
// document.querySelector("#detailInf").style.visibility = "hidden";
// document.querySelector("#eduWorkImg").style.visibility = "hidden";
// document.querySelector("#hobbiesImg").style.visibility = "hidden";
// document.querySelector("#psImg").style.visibility = "hidden";
// document.querySelector("#prImg").style.visibility = "hidden";
// document.querySelector("#arImg").style.visibility = "hidden";
// document.querySelector("#xdImg").style.visibility = "hidden";
// document.querySelector("#arImg").style.visibility = "hidden";
// document.querySelector("#idImg").style.visibility = "hidden";
// document.querySelector("#aiImg").style.visibility = "hidden";
// document.querySelector("#cinema4dImg").style.visibility = "hidden";
// document.querySelector("#mayaImg").style.visibility = "hidden";

// function a(){
TweenMax.from('#bkdTextOne, #bkdTextTwo, #bkdTextThree, #softWareSkillsHeading',1.5,{ ease: Bounce.easeOut, y: -1000});

TweenMax.from('#detailInf',1.5,{scale:0, delay:.5});
TweenMax.from('#eduWorkImg',1.5,{scale:0, delay:1});
TweenMax.from('#hobbiesImg',1.5,{scale:0, delay:1.5});

TweenMax.from('#psImg',2,{scale:0, rotation:-500, delay:3});
TweenMax.from('#prImg',2,{scale:0, rotation:-500, delay:3.2});
TweenMax.from('#arImg',2,{scale:0, rotation:-500, delay:3.4});
TweenMax.from('#xdImg',2,{scale:0, rotation:-500, delay:3.6});
TweenMax.from('#idImg',2,{scale:0, rotation:-500, delay:3.8});
TweenMax.from('#aiImg',2,{scale:0, rotation:-500, delay:4});
TweenMax.from('#cinema4dImg',2,{scale:0, rotation:-500, delay:4.2});
TweenMax.from('#mayaImg',2,{scale:0, rotation:-500, delay:4.4});
// }
//waypoint for keyfeature section

// var waypoint = new Waypoint({
//     element: document.querySelector('.keyFeatureHeading'),
//     handler: function(direction) {
//       console.log('Scrolled to waypoint!')
//       a();


//       //div visible after scroll

//       document.querySelector("#bkdTextOne").style.visibility = "visible";
// document.querySelector("#bkdTextTwo").style.visibility = "visible";
// document.querySelector("#bkdTextThree").style.visibility = "visible";
// document.querySelector("#softWareSkillsHeading").style.visibility = "visible";

// this.destroy();
// }, offset: -50

// })