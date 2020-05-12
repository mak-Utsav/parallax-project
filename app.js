const headerbg = document.getElementById('bg')

window.addEventListener('scroll' , function () {
    headerbg.style.opacity = 1 - + window.pageYOffset/450+ " "
    headerbg.style.top = +window.pageYOffset + "px"
})



window.addEventListener('scroll', function () {
    let introtext = document.querySelector('.intro-text');
    let screenposition = window.pageYOffset;


    console.log(screenposition)
    
    if (screenposition > 450) {
        introtext.classList.add('intro-appear')
    } else {
        introtext.classList.remove('intro-appear')
    }
})

window.addEventListener('scroll', function () {
    let introtext2 = document.querySelector('.intro-text-2');
    let screenposition = window.pageYOffset;


    console.log(screenposition)
    
    if (screenposition > 850) {
        introtext2.classList.add('intro-appear-2')
    } else {
        introtext2.classList.remove('intro-appear-2')
    }
})