const left=document.querySelector('.left');
const right = document.querySelector('.right');
const buttons=document.querySelector('.arrow');

let counter = 0;
const stopbtn = document.querySelector('#stop');
const playbtn = document.querySelector('#play');
stopbtn.addEventListener('click',stopSlide);
playbtn.addEventListener('click',changeSlide);
function slideShow(){
    if(slideIndicator.querySelector('.currentButton'))
    {
        slideIndicator.querySelector('.currentButton').classList.remove('currentButton');
    }
    
    counter++;
    if(counter>3)
    {
        counter=0;
        tx=txplus;
        currentBtn=slideIndicator.firstElementChild;
        currentBtn.classList.add('currentButton');
        slideImage(tx,counter);
    }
    else{
        currentBtn=currentBtn.nextElementSibling;
        currentBtn.classList.add('currentButton');  
        tx=txminus;  
        slideImage(tx,counter);
    }
}

let intervalId;
function changeSlide(){
    if(!intervalId)
    {
        intervalId = setInterval(slideShow,5000);
    }
}
function stopSlide(){
    clearInterval(intervalId);
    intervalId=null;
}
const slideIndicator=document.querySelector('.slideIndicator');
const indicator=document.querySelectorAll('.indicator');
 
    const slides=document.querySelectorAll('.slides');
    slides.forEach((slide,index)=>{
        slide.style.left= `${index * 100 }%`;

    })
let txplus='translateX(';
let txminus='translateX(-';
let tx;
let currentBtn;
currentBtn=slideIndicator.querySelector
('.currentButton');
let nextBtn = null;
indicator.forEach((button,index)=>{
    button.setAttribute('data-index',index);
});

const slideImage = (tx,counter) => {

    slides.forEach(slide=>{
        slide.style.transform = tx+counter*100+'%)';
    })
}
left.addEventListener('click',()=>{
    stopSlide();
    if(slideIndicator.querySelector('.currentButton'))
    slideIndicator.querySelector('.currentButton').classList.remove('currentButton');

    counter--;
if(counter<0)
{
    counter=3;
    currentBtn=slideIndicator.lastElementChild;
    currentBtn.classList.add('currentButton');
    tx=txminus;
    slideImage(tx,counter);
    
} 
else{
    currentBtn=currentBtn.previousElementSibling;
currentBtn.classList.add('currentButton');
tx=txminus;
    slideImage(tx,counter);
}
changeSlide();
});

right.addEventListener('click',()=>{
   stopSlide();
    if(slideIndicator.querySelector('.currentButton'))
    {
        slideIndicator.querySelector('.currentButton').classList.remove('currentButton');
    }
    
    counter++;
    if(counter>3)
    {
        counter=0;
        tx=txplus;
        currentBtn=slideIndicator.firstElementChild;
        currentBtn.classList.add('currentButton');
        slideImage(tx,counter);
    }
    else{
        currentBtn=currentBtn.nextElementSibling;
        currentBtn.classList.add('currentButton');  
        tx=txminus;  
        slideImage(tx,counter);
    }
    changeSlide();
});



slideIndicator.addEventListener('click',(e)=>{
    stopSlide();
    if(e.target.classList.contains('indicator'))
    {
        if(e.target.classList.contains('currentButton'))
        {
            return;
        }
        else{
                    // stopSlide();
                    
                if(e.target.closest('.slideIndicator').querySelector('.currentButton'))
                e.target.closest('.slideIndicator').querySelector('.currentButton').classList.remove('currentButton');

                currentBtn=e.target;
                currentBtn.classList.add('currentButton');
                let index= e.target.dataset.index;
                counter=index;
                tx=txminus;
                slideImage(tx,counter);

           }    
    }
    changeSlide();
});
changeSlide();