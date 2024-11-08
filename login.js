function validate(){
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let p1=document.getElementById("result");
    
    if(username=="admin" && pass=="admin")
        {
            p1.innerText= "validated";
            window.location.href = "dashboard.html";
        }
    else
    {
        p1.innerText = "invalid login details";
    }
}
