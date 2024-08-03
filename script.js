var navDialog = document.getElementById('nav-dialog')
function handleMenu(){
    console.log("in menu",navDialog ,  navDialog.classList)
    navDialog.classList.toggle('hidden')
}

//to properly move the on x-asis the companies : 
const initialTranslateLTR = -48*4 //negetive for left to right
const initialTranslateRTL = 34*4 //positive for ri8 to left

// addeing scroll listener when when in visible are
function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries)=>{
        console.log("entries",entries)
        const isIntersecting =entries[0].isIntersecting
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler)
        }
        else{
            document.removeEventListener('scroll',scrollHandler)
        }
    }
    const intersectionObserver = new IntersectionObserver( intersectionCallback )
    intersectionObserver.observe(element)
    function scrollHandler(){
        //to handle scroll speed
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate =0;
        if(isLTR){
            totalTranslate=translateX + initialTranslateLTR
        }else{
            totalTranslate= -(translateX + initialTranslateRTL)
        }
        element.style.transform = `translateX(${totalTranslate}px)`
    }
}
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
setupIntersectionObserver(line3, true, 0.15)