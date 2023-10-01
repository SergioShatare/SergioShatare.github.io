const derechaBtn = document.querySelector(".boton-right");
const izquierdaBtn = document.querySelector(".boton-left");

const contenido = document.querySelector(".slider");

derechaBtn.addEventListener("click", () => {
    contenido.scrollLeft += 280;
});

izquierdaBtn.addEventListener("click", () => {
    contenido.scrollLeft -= 280;
});



const mouseBtnR = document.querySelector(".mouse-right");
const mouseBtnL = document.querySelector(".mouse-left");

const contMouse = document.querySelector("#mouses");

mouseBtnR.addEventListener("click", () => {
    contMouse.scrollLeft += 280;
});

mouseBtnL.addEventListener("click", () => {
    contMouse.scrollLeft -= 280;
});



const monitorBtnR = document.querySelector(".monitor-right");
const monitorBtnL = document.querySelector(".monitor-left");

const contMonitor = document.querySelector("#monitores");

monitorBtnR.addEventListener("click", () => {
    contMonitor.scrollLeft += 280;
});

monitorBtnL.addEventListener("click", () => {
    contMonitor.scrollLeft -= 280;
});