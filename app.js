let header = document.querySelector('h1');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');
let bgr = document.body
// Decrease
function decrease(){
    header.textContent--
    // document.body.style.backgroundColor = 'red';
    if(header.textContent < 0){
     bgr.style.backgroundColor = 'red'
    }
}

dec.addEventListener('click', decrease)

// Increase
function increase(){
    header.textContent++
    // document.body.style.backgroundColor = 'green';
    if(header.textContent > 0){
        bgr.style.backgroundColor = 'green'
    }
}


inc.addEventListener('click', increase)

// Reset
let reset = ()=>{
    header.textContent = 0
    // document.body.style.backgroundColor = 'yellow';
    if(header.textContent == 0){
        bgr.style.backgroundColor = 'yellow'
    }
}

res.addEventListener('click', reset)