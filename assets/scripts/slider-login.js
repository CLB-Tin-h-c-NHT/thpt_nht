window.addEventListener("load", function(){
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".form-box");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const btnLogin = document.querySelector(".btnLogin");
    const btnRegister = document.querySelector(".btnRegister");

    let positionX = 0;
    let id = 0;
    btnLogin.addEventListener("click", function(){
        id = 0;
        positionX = -(sliderItemWidth*id);
        sliderMain.style = `transform: translateX(${positionX}px)`;
    })
    btnRegister.addEventListener("click", function(){
        id = 1;
        positionX = -(sliderItemWidth*id);
        sliderMain.style = `transform: translateX(${positionX}px)`;
    })
        
})