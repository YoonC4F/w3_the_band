var navButton = document.getElementsByClassName("search-collapse")[0];
var header = document.getElementById("header");
var navItems = document.getElementsByClassName("nav-item");
// console.log(getComputedStyle(header).height);
// console.log(navButton);
// 1. navigation
function toggle(callback) {
    if(getComputedStyle(header).height == '48px'){
        Object.assign(header.style,{
            height: 'calc(48px * 5)',
            transition: 'height 0.2s linear',
            // overflow: 'visible'
        });
    }
    else {
        Object.assign(header.style,{
            height: '48px',
            transition: 'height 0.2s linear',
            overflow: 'hidden'
        });
    }
    if(getComputedStyle(header).height == '48px'){
        setTimeout(function() {
            Object.assign(header.style,{
                overflow: 'visible'
            });
        }, 200);
    }
}
navButton.onclick = toggle;


for(var navItem of navItems){
    navItem.onclick = function(){
        Object.assign(header.style,{
            height: '48px',
            overflow: 'hidden'
        });
    }   
}

// 2.slider
var sliders = document.querySelectorAll(".home-container");
// console.log(sliders);
setInterval(function(){
    for(var i=0; i<sliders.length; i++){
        if(sliders[i].classList.contains("home-active")){
            sliders[i].classList.remove("home-active");
            if(i!=2){
                sliders[++i].classList.add("home-active");
            }
            else{
                sliders[0].classList.add("home-active");
            }
            break;
        }
    }
},2000);

// 3.modal
var modal = document.getElementById("modal");
var btns = document.querySelectorAll(".tour-item__info .btn-main");
var closeX = document.querySelector(".modal-heading i:nth-of-type(2)");
var closeBtn = document.querySelector(".modal-container button:nth-of-type(2)");
var modalLayout = document.getElementsByClassName("modal-layout")[0];

// console.log(modalLayout);
for(var btn of btns){
    btn.addEventListener("click",function(){
        modal.classList.add("modal-active");
    })
}
closeX.addEventListener("click",function(){ //vs querySelector thi dung onclick ko duoc nen p phai dung even listener
    modal.classList.remove("modal-active");
})
closeBtn.addEventListener("click",function(){
    modal.classList.remove("modal-active");
})
modal.onclick = function(){
    modal.classList.remove("modal-active");
};
modalLayout.onclick = function(event){
    event.stopPropagation();
}