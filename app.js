let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbmail = document.querySelector('.slider .thumbmail')
let thumbmailItens = thumbmail.querySelectorAll('.item')

thumbmail.appendChild(thumbmailItens[0])

// função para o botão de proximo 
nextBtn.onclick = function(){
    moveSlider('next')
}

// função para o botão de prev

prevBtn.onclick = function(){
    moveSlider('prev')
}

function moveSlider (direction){
    let sliderItens = sliderList.querySelectorAll('.item')
    let thumbmailItens = document.querySelectorAll('.thumbmail .item')

    if(direction === 'next'){
        sliderList.appendChild(sliderItens[0])
        thumbmail.appendChild(thumbmailItens[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItens[sliderItens.length - 1])
        thumbmail.prepend(thumbmailItens[thumbmailItens.length -1])
        slider.classList.add('prev')
    }

    slider.addEventListener('animationend',function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) 
}