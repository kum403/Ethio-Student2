const navEl = document.querySelector('.container-nav');
const overlayEl = document.querySelector('.overlay');
const menuEl = document.querySelector('.menu-list');
const headerEl = document.querySelector('.container-nav')
const showEl = document.querySelector('.show')
const liEl = document.querySelectorAll('.li')
const body2 = document.querySelector("body");


const styles = navEl.classList


         

const menu = () =>{
    if(styles.contains('open')){
        styles.remove('open')
        overlayEl.classList.add('fade-out')
        overlayEl.classList.remove('fade-in')
        menuEl.classList.add('fade-out')
        menuEl.classList.remove('fade-in')
        body2.style.overflow = "visible"
        headerEl.classList.remove('un-shadow')
    }
    else{
        styles.add('open')
        overlayEl.classList.add('fade-in')
        overlayEl.classList.remove('fade-out')
        menuEl.classList.remove('fade-out')
        menuEl.classList.add('fade-in')
        body2.style.overflow = "hidden"
        headerEl.classList.add('un-shadow')
        menuEl.style.transform = "translateY(0)"

          // body2.addEventListener("touchmove",function(e){
          //   e.preventDefault()
          //  },false)

    }
}
window.addEventListener('resize',function(){
    overlayEl.classList.remove('fade-in');
    overlayEl.classList.add('fade-out');
    menuEl.classList.remove('fade-in')
    menuEl.classList.add('fade-out')
    styles.remove('open')
    menuEl.style.transform = "translateY(-200%)"
})

document.addEventListener('scroll', scrollEvent2);

function scrollEvent2(){
    overlayEl.classList.remove('fade-in');
    // overlayEl.classList.add('fade-out');
    menuEl.classList.remove('fade-in')
   
    styles.remove('open')
    menuEl.style.transform = "translateY(-200%)"
}

liEl.forEach(function(btns){
    btns.addEventListener('click',function(){
        overlayEl.classList.add('fade-out');
        // menuEl.style.display = "none"
        // menuEl.classList.add('fade-out')
        // menuEl.style.display = "none"
        document.body.style.overflow = "visible"
        styles.remove('open')
        menuEl.style.transform = "translateY(-200%)"
        // menuEl.forEach(function(menu){
        //     menu.classList.add('fade-out');

        // })
    })
})

// const grades = document.querySelectorAll('.grade-btn');

// grades.forEach(function(gradeBtn){
//     gradeBtn.addEventListener('click',function(){
//         menuEl.classList.add('fade-out')
    
//     })
// })


// books sliding for hero home
const booksEl = document.querySelector('.book-animation');

let booksAr = [
    'img/books/chem.png',
    'img/books/math.png',
    'img/books/physics.png'
    ] 

function randomNumber(){
    return Math.floor(Math.random() *
    booksAr.length )
}

function sliding(){
    let number = randomNumber()

    booksEl.src = booksAr[number]

}

setInterval(sliding,10000)



//coming soon pdf books


// const subjectEls = document.querySelectorAll('.subject button');
const comingSoonWrapper = document.querySelector('.coming-soon-options');
// const pickedBook = document.querySelector('.picked-book');
// const cancelBtn = document.querySelector('.cancel');
const overlayMsgComing = document.querySelector('.overlay');
     const gradesElBtn = document.querySelectorAll('.grade-btn')

gradesElBtn.forEach(function(btn){
btn.addEventListener('click', comingSoon);
})



 
function comingSoon(e){
    e.preventDefault()
            comingSoonWrapper.classList.add('fade-in')
            comingSoonWrapper.classList.remove('fade-out')
            overlayMsgComing.classList.add('fade-in')
            overlayMsgComing.classList.remove('fade-out')
    
            overlayMsgComing.onclick = function () {
                comingSoonWrapper.classList.remove('fade-in');
                comingSoonWrapper.classList.add('fade-out')
                overlayMsgComing.classList.remove('overlay-msg-coming')
                // body.style.overflow = "visible"
                overlayMsgComing.classList.remove('fade-in');
                overlayMsgComing.classList.add('fade-out')
            }
            
}

function cancelComing(){

    comingSoonWrapper.classList.remove('fade-in');
    comingSoonWrapper.classList.add('fade-out')
    overlayMsgComing.classList.remove('overlay-msg-coming')
    // body.style.overflow = "visible"
    overlayMsgComing.classList.remove('fade-in');
    overlayMsgComing.classList.add('fade-out')
}
document.addEventListener('scroll', scrollEvent);

function scrollEvent(){
    
    comingSoonWrapper.classList.remove('fade-in');
    // comingSoonWrapper.classList.add('fade-out')
    overlayMsgComing.classList.remove('overlay-msg-coming')
    // body.style.overflow = "visible"
    overlayMsgComing.classList.remove('fade-in');
}