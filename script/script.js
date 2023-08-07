let btns = document.querySelectorAll('.room__btn');
let imgs = document.querySelectorAll('.slider__item-img').length;
let currentImg = 0;
btns.forEach(btn => btn.addEventListener("click", scrollSlider));
function scrollSlider(e) {
    if (e.target.id == "left") {
        if (currentImg == 0) {
            currentImg=imgs;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';
            
        }
        else{
            currentImg--;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';
            console.log("xd")
        }
    }
    else if (e.target.id == "right") {
        if (currentImg != imgs) {
            currentImg++;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';
            console.log("xd")
        }
        else{
            currentImg=0;
            document.querySelector('.slider__wrapper').style.marginLeft = -(345 * currentImg) + 'px';
        }
    }

}