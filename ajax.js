var form=document.querySelector("form");
form.addEventListener("submit",function (e) {
        e.preventDefault();
        var username=form.username.value;
        var password=form.password.value;
        alert(username+" "+password);
        var request=new XMLHttpRequest();
        request.onreadystatechange=function(){
            if(request.readyState===4&&request.status===200){
                console.log("成功");
            }
    }
    request.open("GET","/login?username="+username+"&password="+password)
    request.send();
})