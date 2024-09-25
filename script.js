



function roll(){
    document.getElementById("result").innerHTML="<img src='image/loader.gif'/>";
    setTimeout(function (){
        let rand = Math.floor(Math.random()*6)+1;
        document.getElementById("result").innerHTML="<img src='image/"+rand+".png'/>";
    },2000);
}






