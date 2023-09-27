function bigMyBasa(){
    let name = document.getElementById("name").value 
    localStorage.setItem("name",name);
    
    let surname = document.getElementById("surname").value 
    localStorage.setItem("surname",surname);

    let email = document.getElementById("email").value 
    localStorage.setItem("email",email);

    let posswrod = document.getElementById("posswrod").value 
    localStorage.setItem("posswrod",posswrod);

    let number = document.getElementById("number").value 
    localStorage.setItem("number",number);

    let list = document.getElementById("list").value 
    localStorage.setItem("list",list);
}

/*-----------------------kun va tun ------------------------------ */
let myBtn = document.querySelector(".slider")
let myBtnBackgroundBody = false

myBtn.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("tun")
    if (myBtnBackgroundBody === false){
            myBtnBackgroundBody = true;
            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector(".box2").style.color = "#fca311"
     }else{
       myBtnBackgroundBody = false;
            document.querySelector("body").style.backgroundColor = "#fca311";
            document.querySelector(".box2").style.color = "black";
    }
    
})

/*-----------------------kun va tun ------------------------------ */

/*----------------------------------------------srech-------------------------------*/
function myThebest (){
    var input, filter, table, tr , td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByClassName("col");


        for(i=0; i<tr.length; i++){
            td = tr[i].getElementsByTagName("h1")[0];

            if(td){
                txtValue = td.textContatent || td.innerText;
                if(txtValue.toUpperCase().indexOf(filter)> -1){
                    tr[i].style.display = ""
                }else {
                    tr[i].style.display = "none"
                }
            }
         }
}
/*----------------------------------------------------------------------------------------- */

/*--------------------------rasimlar     - --------------------------*/

function butP() {
    document.querySelector("#jok1").style.display = "none";
    document.querySelector("#jok2").style.display = "block";
    document.querySelector("#jok3").style.display = "none";
}
function butPP() {
    document.querySelector("#jok1").style.display = "none";
    document.querySelector("#jok2").style.display = "none";
    document.querySelector("#jok3").style.display = "block";
}
function but1() {
    document.querySelector("#jok1").style.display = "block";
    document.querySelector("#jok2").style.display = "none";
    document.querySelector("#jok3").style.display = "none";
}
/*----------------------------------------------------------------------*/
/*---------------- soat ---------------------*/
function myBset(){
    var date = new Date();
    var secon = date.getSeconds();
    var mind = date.getMinutes()+2;
    var hurs = date.getHours();
    document.querySelector(".koa").innerHTML = hurs+":"+mind+":"+secon;

}
setInterval(myBset, 1000)



/*---------------------------button tebpaga ----------------------------*/

let myButton = document.querySelector("#myBtn");

window.onscroll = function(){scrollTop()};

//1 funtion
function scrollTop(){
    if(document.body .scrollTop > 100 || document.documentElement.scrollTop > 100){
        myButton.style.display = "block"
    }else{
        myButton.style.display="none";
    }
}


//2 funtion 
function goup(){
    document.body.scrollTop =0
    document.documentElement.scrollTop = 0
}

/*---------------------------------------------------------------------------*/