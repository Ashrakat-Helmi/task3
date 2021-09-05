let btnMood =document.getElementById('btnMood');
let body =document.querySelector('body');
let style=document.getElementById('style');
let form =document.querySelector('div .form1');
let nav =document.querySelector('nav');
let wInput=document.getElementById('width');
let hInput =document.getElementById('Hight');
let bgc =document.getElementById('backGroundColor');
let styleAdded=document.getElementById('styleAdded');
let btnStyle =document.getElementById('done');




let addStyle =() =>{
    w = wInput.value;
    h = hInput.value;
    bg =bgc.value;

    styleAdded.style.width =w;
    styleAdded.style.height =h;
    styleAdded.style.backgroundColor =bg;
}

btnStyle.addEventListener('click',addStyle );






btnMood.onclick = function(){
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        btnMood.classList = " btn btn-dark"
        btnMood.innerText ="Dark M0od"
        nav.classList= "navbar navbar-expand-lg navbar-light bg-light"
        style.style.borderColor ='black'
        form.style.borderColor ='black'
    }else{
        body.classList.add('dark')
        btnMood.classList = " btn btn-light"
       btnMood.innerText ="Light M0od"
       nav.classList= "navbar navbar-expand-lg navbar-dark bg-dark"
       style.style.borderColor ='white'
       form.style.borderColor ='white'
    }
}
