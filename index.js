console.log('hello world')

let count = 0;
let counterDisplay = document.getElementById ('counter')

function increase() {
   count++;
   counterDisplay.innerText = count
}

function decrease() {
    count--;
    counterDisplay.innerText = count
}

function reset() {
    count = 0;
    counterDisplay.innerHTML = `<mark>${count}</mark>`
}

function selectTheme(theme){
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;

    let buttons = document.getElementsByTagName('button')
        for (let i = 0; i < buttons.length; i++){
            buttons[i].className = theme;
        }
}