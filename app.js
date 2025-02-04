let text = document.getElementById('text')
let bird1 = document.getElementById('bird1')
let bird2 = document.getElementById('bird2')
let forest = document.getElementById('forest')
let btn = document.getElementById('btn')
let rocks = document.getElementById('rocks')
let water = document.getElementById('water')

window.addEventListener('scroll' , function(){
    let value = window.scrollY


    text.style.top = 240 + value * -1 + 'px'
    bird1.style.top = -1.6 * value + 'px'
    bird1.style.left = -5 * value + 'px'

    bird2.style.top = -1.6 * value + 'px'
    bird2.style.left = 2 * value + 'px'
    btn.style.marginTop =  value * 1.5 + 'px'
    forest.style.top = value * -0.20 + 'px'
    rocks.style.top = value * -0.12 + 'px'
    water.style.top = value * -0.01 + 'px'
})
