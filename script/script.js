/*------------------------Room slider------------------------------*/
let btns = document.querySelectorAll('.room__btn');
let imgs = document.querySelectorAll('.slider__item-img').length - 3;
let currentImg = 0;
/*------------------------Room slider------------------------------*/

/*------------------------Comments slider------------------------------*/
let btnsComm = document.querySelectorAll('.comment__btn');
let comments = document.querySelectorAll('.comments__slider-item').length - 1;
let currentComm = 0;
/*------------------------Comment slider------------------------------*/

/*------------------------Burger------------------------------*/
let Burger = document.querySelector('.burger');
let menu =document.querySelector('.header__list');
/*------------------------Burger------------------------------*/

/*------------------------Room slider------------------------------*/
btns.forEach(btn => btn.addEventListener("click", scrollSlider));
function scrollSlider(e) {
    if (e.target.id == "left") {
        if (currentImg == 0) {
            currentImg = imgs;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';

        }
        else {
            currentImg--;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';

        }
    }
    else if (e.target.id == "right") {
        if (currentImg != imgs) {
            currentImg++;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';

        }
        else {
            currentImg = 0;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';
        }
    }

}
/*------------------------Room slider------------------------------*/

/*------------------------Comments slider------------------------------*/
btnsComm.forEach(btn => btn.addEventListener("click", scrollSliderComms));
function scrollSliderComms(e) {
    if (e.target.id == "leftCom") {
        if (currentComm == 0) {
            currentComm = comments;
            document.querySelector('.comments__slider').style.marginLeft = -(870 * currentComm) + 'px';

        }
        else {
            currentComm--;
            document.querySelector('.comments__slider').style.marginLeft = -(870 * currentComm) + 'px';

        }
    }
    else if (e.target.id == "rightCom") {
        if (currentComm != comments) {
            currentComm++;
            document.querySelector('.comments__slider').style.marginLeft = -(870 * currentComm) + 'px';

        }
        else {
            currentComm = 0;
            document.querySelector('.comments__slider').style.marginLeft = -(870 * currentComm) + 'px';
        }
    }

}

/*------------------------Comments slider------------------------------*/
/*------------------------burger open/close------------------------------*/
Burger.addEventListener("click", openClose);

function openClose() {
    if (Burger.classList.contains('open')) {
        Burger.classList.remove('open');
        menu.style.display="none";
        

    }
    else {
        Burger.classList.add('open');
        menu.style.display="flex";
        
    }
}



/*------------------------burger open/close------------------------------*/