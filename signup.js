const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button form");

form.onsubmit = (e)=>{
    e.preventDefault();
}


continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","html/signup.html",true);
    xhr.onload = ()=>{

    }
    xhr.send();
}