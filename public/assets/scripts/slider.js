window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main")
    const sliderItem = document.querySelectorAll(".slider-item")
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderLength = sliderItem.length;
    let positionX = 0;
    let id = 0;

    setInterval(function(){
        id += 1;
        if (id == sliderLength){
            id = 0;
            sliderMain.classList.remove('active');
        } else sliderMain.classList.add('active');
        positionX = -(sliderItemWidth*id);
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }, 5000)
})