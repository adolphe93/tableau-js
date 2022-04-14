let caro1   =   document.querySelector('#caro1');
let button1 =   document.querySelector('#btn1');
let caro2   =   document.querySelector('#caro2');
let button2 =   document.querySelector('#btn2');
let button  =   document.querySelector('#btn');

btn1.addEventListener('click', function () {
    document.getElementById('caro1').style.background = "blue";
});

btn2.addEventListener('click', function () {
    document.getElementById('caro2').style.background = "yellow";
});

btn.addEventListener('click', function() {
    if (document.getElementById('caro1').style.background == "" && document.getElementById('caro2').style.background == "") {
        document.getElementById('caro1').style.background = "blue" 
        document.getElementById('caro2').style.background = "yellow";

    
        }

    else if (document.getElementById('caro1').style.background == "" && document.getElementById('caro2').style.background !== "") {
        document.getElementById('caro1').style.background = document.getElementById('caro2').style.background
        document.getElementById('caro2').style.background = "yellow";


        console.log(3333);
    }
    
    else if (document.getElementById('caro1').style.background !== "" && document.getElementById('caro2').style.background == "") {
        document.getElementById('caro2').style.background = document.getElementById('caro1').style.background
        document.getElementById('caro1').style.background = "blue";

        console.log(6666);
    }
    
})
