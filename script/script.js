/*------------------------header------------------------------*/
const Burger = document.querySelector('.burger');
const menu =document.querySelector('.header__list');
/*------------------------header------------------------------*/


/*------------------------Room slider------------------------------*/
const btns = document.querySelectorAll('.room__btn');
const imgs = document.querySelectorAll('.slider__item-img').length - 3;
const currentImg = 0;
/*------------------------Room slider------------------------------*/

/*------------------------Comments slider------------------------------*/
const btnsComm = document.querySelectorAll('.comment__btn');
const comments = document.querySelectorAll('.comments__slider-item').length - 1;
const currentComm = 0;
/*------------------------Comment slider------------------------------*/



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
        menu.classList.remove('header__list--open');
    }
    else {
        Burger.classList.add('open'); 
        menu.classList.add('header__list--open');
    }
}



/*------------------------burger open/close------------------------------*/