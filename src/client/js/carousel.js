const images = document.querySelectorAll('.slider img');
const slider = document.querySelector('.slider');
const right = document.querySelector('.images .right');

//to keep track of the photo in the images section
count = 1;
//width of the frame 
width = 200;

//to move the slider block in x direction for a length of width*count 
right.addEventListener("click",(e)=>{
    if(count>2){
        slider.style.transform = `translateX(${0}px)`;
        count = 1;
        return;
    }
    slider.style.transform = `translateX(-${width*count}px)`;
    count++;
})