downloadBtn.onclick = () =>{
    timer.style.display = 'unset'
    function countdown () {
        if (time.innerText != 0) {
            time.innerText--
        }
        else{
            downLoadLink.click();
            chandeTitle.innerText = "Скачивание не началось?"
            downloadBtn.innerText = "Скачать"
            downloadBtn.addEventListener("click", () => { download(); }, false);
            clearInterval(timeInterval)
        }
    }
    const timeInterval = setInterval(countdown, 1000)
}
function download(){
    downLoadLink.click();
}