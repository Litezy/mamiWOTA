let arr = [
    './assets/images/goddess-iii.png',
    './assets/images/Oblivion.png',
    './assets/images/Babe1.png',
    './assets/images/better-days.png',
    './assets/images/Goddess-IV.png'
    
    
]

let img = document.querySelector('.imgs>img')
let prev = document.querySelector('.btn-xl')
let next = document.querySelector('.next-btn')
let index =0


prev.addEventListener('click', prevButton)
next.addEventListener('click', nextButton)



function prevButton(){
    if(index <= 0){
        index = arr.length - 1
        img.src = arr[index]
    }else{
        index--
        img.src = arr[index]
    }
}
function nextButton(){
    if(index === arr.length -1){
        index = 0
        img.src = arr[index]
    
    }else{
        index++
        img.src = arr[index]
    }
}

let imagePrev = document.querySelector('#prevb')
let imageNext = document.querySelector('#nextb')
let feat_imgs = document.querySelectorAll('feat-imgs')
let second_slide = document.querySelectorAll('.second-slide')
let num = 0

imagePrev.addEventListener('click', function () {
  second_slide.style.display ='block'
})

imageNext.addEventListener('click', function() {
    secondimg.style.display='block';
})











// let start = setInterval(function(){
//    if(index === 10){
//     clearInterval(start)
//    }else{
//     index++
//     img.src = arr [imgName]
//     console.log(index)
//    }
//     if(imgName === arr.length -1){
//         imgName=0;
//     }else{
//         imgName++;
//     }
// },1000)
