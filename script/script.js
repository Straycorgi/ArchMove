/*------------------------header------------------------------*/
const Burger = document.querySelector('.burger');
const menu = document.querySelector('.header__list');
const signUp = document.querySelector('.header__interaction-up');
const signUpMobile = document.querySelector('.list__interract');
const signUpClose = document.querySelector('.signUp__btn');
/*------------------------header------------------------------*/


/*------------------------Room slider------------------------------*/
const btns = document.querySelectorAll('.room__btn');
const imgs = document.querySelectorAll('.slider__item-img').length - 3;
const imgItem=  document.querySelector('.slider__item-img');
let currentImg = 0;
/*------------------------Room slider------------------------------*/

/*------------------------Comments slider------------------------------*/
const btnsComm = document.querySelectorAll('.comment__btn');
const comments = document.querySelectorAll('.comments__slider-item').length - 1;
const commentItem=document.querySelector('.comments__slider-item');
let currentComm = 0;
/*------------------------Comment slider------------------------------*/
let options = {
    root: null,
    rootMargion: '0px',
    theresold: 0.5
}
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(item =>{
        if(item.isIntersecting){
            item.target.classList.add('active');
            
        }
        else{
            item.target.classList.remove('active');
        }
    })
},options)
const targets = document.querySelectorAll('.observerTarget');
targets.forEach(item=>{
    observer.observe(item);
})
/*------------------------Room slider------------------------------*/
btns.forEach(btn => btn.addEventListener("click", scrollSlider));
function scrollSlider(e) {
    let whiteSpace =  parseInt(window.getComputedStyle(imgItem).marginRight);
    let itemWidth=  imgItem.width;
    

    if (e.target.id == "left") {
        if (currentImg == 0) {
            currentImg = imgs;
            document.querySelector('.slider__wrapper').style.marginLeft = -((itemWidth+whiteSpace) * currentImg) + 'px';

        }
        else {
            currentImg--;
            document.querySelector('.slider__wrapper').style.marginLeft = -((itemWidth+whiteSpace) * currentImg) + 'px';

        }
    }
    else if (e.target.id == "right") {
        if (currentImg != imgs) {
            currentImg++;
            document.querySelector('.slider__wrapper').style.marginLeft = -((itemWidth+whiteSpace) * currentImg) + 'px';

        }
        else {
            currentImg = 0;
            document.querySelector('.slider__wrapper').style.marginLeft = -((itemWidth+whiteSpace) * currentImg) + 'px';
        }
    }

}
/*------------------------Room slider------------------------------*/

/*------------------------Comments slider------------------------------*/
btnsComm.forEach(btn => btn.addEventListener("click", scrollSliderComms));
function scrollSliderComms(e) {
    let itemWidth = parseInt(window.getComputedStyle(commentItem).width);
    let itemSpace = itemWidth + (2*parseInt(getComputedStyle(commentItem).marginRight));
    
    if (e.target.id == "leftCom") {
        if (currentComm == 0) {
            currentComm = comments;
            document.querySelector('.comments__slider').style.marginLeft = -(itemSpace * currentComm) + 'px';

        }
        else {
            currentComm--;
            document.querySelector('.comments__slider').style.marginLeft = -(itemSpace * currentComm) + 'px';

        }
    }
    else if (e.target.id == "rightCom") {
        if (currentComm != comments) {
            currentComm++;
            document.querySelector('.comments__slider').style.marginLeft = -(itemSpace * currentComm) + 'px';

        }
        else {
            currentComm = 0;
            document.querySelector('.comments__slider').style.marginLeft = -(itemSpace * currentComm) + 'px';
        }
    }

}

/*------------------------Comments slider------------------------------*/
/*------------------------burger open/close------------------------------*/
Burger.addEventListener("click", openClose);

function openClose() {
    if (Burger.classList.contains('open')) {
        Burger.classList.remove('open');
        menu.classList.remove('header__list--open');
    }
    else {
        Burger.classList.add('open');
        menu.classList.add('header__list--open');
    }
}
/*------------------------burger open/close------------------------------*/
signUpMobile.addEventListener("click", signUpOpenClose);
signUp.addEventListener("click", signUpOpenClose);
function signUpOpenClose() {
    if (!document.querySelector('.signUp').classList.contains('active')) {
        document.querySelector('.signUp').classList.add('active');
    }
    else {
        document.querySelector('.signUp').classList.remove('active');
    }
}
signUpClose.addEventListener("click", () => {
    document.querySelector('.signUp').classList.remove('active');
})