const subjectEls = document.querySelectorAll('.subject button');
const downloadBtn = document.querySelector('.wrapper-option');
const pickedBook = document.querySelector('.picked-book');
const cancelBtn = document.querySelector('.cancel');
const overlayMsg = document.querySelector('.overlay-msg-js');
const body = document.querySelector('body');
const downloadUrl = document.querySelector(".download-url");

subjectEls.forEach(function (subjectEl) {
    subjectEl.addEventListener('click', function (sub) {

        sub.preventDefault()
        downloadBtn.classList.add('fade-in')
        downloadBtn.classList.remove('fade-out')
        overlayMsg.classList.add('overlay-msg')

        overlayMsg.onclick = function () {
            downloadBtn.classList.remove('fade-in');
            downloadBtn.classList.add('fade-out')
            overlayMsg.classList.remove('overlay-msg')
            body.style.overflow = "visible"

        }
        pickedBook.textContent = subjectEl.textContent
        // console.log(sub)
        body.style.overflow = "hidden"
        // let x = screen.availHeight / 2
        // downloadBtn.style.top = `${x}px`

    })
})

function exit() {
    if (downloadBtn.classList.contains('fade-in')) {
        downloadBtn.classList.add('fade-out');
        downloadBtn.classList.remove('fade-in');
        overlayMsg.classList.remove('overlay-msg')
        body.style.overflow = "visible"
    }
}

function download(){
    exit()

    // downloadUrl.setAttributes("href", `${
      
    // }`)


}


    subjectEls.forEach(function(subjectEl){
       subjectEl.onclick = () =>{
        downloadUrl.setAttribute("href", `${subjectEl.value}`)
       }
     })

//grades-comingsoon

