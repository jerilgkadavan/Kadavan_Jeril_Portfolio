

    $(document).foundation()

    let myGallery = [];
let popText = document.querySelectorAll('.popText');
let galImg = document.querySelectorAll('.gal');

    function get_gallery() {

        fetch('./includes/index.php') // pass in the one or many query
          .then(res => res.json())
          .then(data => {
           
              myGallery = data;
    
              popText.forEach((textelement,index) => {
                textelement.textContent=data[index].gallery_descripation;
            })
            
            galImg.forEach((pic,i) => {
                pic.src= "images/"+ data[i].gallery_thumb_image;
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    
    window.addEventListener('load', () => {
    
    get_gallery();
    
    
    });



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


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var img8 = document.getElementById('myImg8');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[0].gallery_image;

}

//handle click for myImg2
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[1].gallery_image;
}

//handle click for myImg3
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[2].gallery_image;
}
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[3].gallery_image;
}

//handle click for myImg2
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[4].gallery_image;
}

//handle click for myImg3
img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[5].gallery_image;
}

//handle click for myImg3
img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[6].gallery_image;
}

//handle click for myImg3
img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'images/'+myGallery[7].gallery_image;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


// 1. DB Query
// 2. FETCH API to put everything in data and into an empty array (myGallery)
// 3. apply data targetting the query selector img.src, text, thumb.src in DOM    


