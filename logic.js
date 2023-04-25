let body = document.querySelector('body')
let board = body.querySelector('.board')
let gridSize = 16

let startButton = body.querySelector('button.start')
let clearButton = body.querySelector('button.clear')

let mode = body.querySelector('select')

mode.addEventListener('change', (event) => {
    if(event.target.value == 'default'){
        defaultMode()
    } else if(event.target.value == 'opacity'){
        opacityMode()
    } else if(event.target.value == 'rainbow'){
        rainbowMode()
    }
})

function defaultMode(){
    createGrid()
    let boxes = body.querySelectorAll('.box')
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener('mouseover', () => {
            boxes[i].setAttribute('class', 'box hovered')
        })
    }
}

function opacityMode(){
    createGrid()
    let boxes = body.querySelectorAll('.box')
    for(let i=0; i<boxes.length; i++){
        let box = boxes[i]
        box.addEventListener('mouseover', () => {
            if(box.style.opacity < 1){
                opacityValue = +box.style.opacity
                box.style.opacity = opacityValue + 0.1
                box.style.backgroundColor = 'black'
            } else{
            }
        })
    }
}

function rainbowMode(){
    createGrid()
    let boxes = body.querySelectorAll('.box')
    for(let i=0; i<boxes.length; i++){
        let box = boxes[i]
        box.addEventListener('mouseover', () => {
            let r = Math.round(Math.random()*255)
            let g = Math.round(Math.random()*255)
            let b = Math.round(Math.random()*255)
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        })
    }
}

function createGrid(){
    while(board.firstChild){
        board.removeChild(board.firstChild)
    }
    for(let i = 0; i<Math.round(gridSize); i++){
        let row = board.appendChild(document.createElement('div'))
        row.setAttribute('class', 'row')
        for(let i = 0; i<gridSize; i++){
            let box = row.appendChild(document.createElement('div'))
            box.setAttribute('class', 'box')
        }
    }
}

startButton.addEventListener('click', () => {
    let sizePrompt = prompt('How big should the grid be? (between 1 and 64)')
    console.log(+sizePrompt)
    console.log(sizePrompt)
    if(isNaN(sizePrompt)){
        alert('Only numbers are allowed.')
    } else if(sizePrompt>=1 && sizePrompt<=64){
        gridSize = sizePrompt
    } else{
        alert('Please, choose a number between 1 and 64.')
    }
    if(mode.value == 'default'){
        defaultMode()
    } else if(mode.value == 'opacity'){
        opacityMode()
    } else if(mode.value == 'rainbow'){
        rainbowMode()
    }
})

clearButton.addEventListener('click', () => {
    if(mode.value == 'default'){
        defaultMode()
    } else if(mode.value == 'opacity'){
        opacityMode()
    } else if(mode.value == 'rainbow'){
        rainbowMode()
    }
})

defaultMode()