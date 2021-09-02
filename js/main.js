let input = document.querySelectorAll('input')
let btn = document.querySelectorAll('button')
let div = document.querySelectorAll('div')
let body = document.querySelector('body')
let nav =document.querySelector('nav')
let form =document.querySelector('form')
let addStyle =() => {
    w = input[0].value;
    h = input[1].value;
    bgc = input[2].value;

    div[8].style.width = w;
    div[8].style.height = h;
    div[8].style.backgroundColor = bgc;
}
btn[1].addEventListener('click', addStyle);

btn[0].onclick = function(){
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        btn[0].classList = " btn btn-dark"
        btn[0].innerText ="Dark M0od"
        nav.classList= "navbar navbar-expand-lg navbar-light bg-light"
        div[7].style.borderColor ='black'
        form.style.borderColor ='black'
    }else{
        body.classList.add('dark')
        btn[0].classList = " btn btn-light"
       btn[0].innerText ="Light M0od"
       nav.classList= "navbar navbar-expand-lg navbar-dark bg-dark"
       div[7].style.borderColor ='white'
       form.style.borderColor ='white'
    }
}