var prev =document.getElementById("prev");
var next = document.getElementById("next");
var items = Array.from(document.querySelectorAll('#image img'));
var count = items.length;
var point = Array.from(document.querySelectorAll(' ul li'))    ;
var ul = document.getElementById("flex")
var current = 1
prev.onclick = prevSlide;

next.onclick = nextSlide;


for (let i = 0 ; i < items.length ; i++) {
    const li = point[i]
 
}


slide()


function nextSlide(){
if (  next.classList.contains("noactive")) {
return false;
} else {
   current++;
    slide();
}
}

function prevSlide(){
    if (  prev.classList.contains("noactive")) {
        return false;
        } else {
           current--;
            slide();
        }
    }
    for (let i = 0; i < point.length; i++) {
        point[i].onclick = function (){
           current = +(this.getAttribute("data-index"));
           
           slide()
         }  
       
    }
    var time =setInterval(() => {
        nextSlide()
    
    }, 7000);
       
    

    function slide(){
        removeClass()
items[current-1].classList.add("img-active");
point[current-1].classList.add("active");
     if (current ==1) {
        prev.classList.add("noactive")
     } else {
        prev.classList.remove("noactive")
     }

     if (current ==count) {
        next.classList.add("noactive")
     } else {
        next.classList.remove("noactive")
     }

    }

function removeClass(){
    items.forEach((image)=>{
        image.classList.remove("img-active");

    })
    point.forEach((p)=>{
        p.classList.remove("active");

    })
}




