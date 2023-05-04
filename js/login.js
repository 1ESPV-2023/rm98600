inputUser.addEventListener("keyup", ()=>{

    const labelUser = document.querySelector("label[for='idNm']");

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;");
        inputUser.setAttribute("style","color:#ff0000;");
    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;");
        inputUser.setAttribute("style","color:#00ff00;");

    }
});

const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("input[name='txtPass']");

    if(inputPass.getAttribute("type") == 'password'){
        inputPass.setAttribute("type","text");
    }else{
        inputPass
    }
})