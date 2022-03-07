function add(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
      var num3 = parseInt(num1) + parseInt(num2);
    document.querySelector('#Result').innerHTML = "The result is " + " " + num3;
}

function sub(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
      var num3 = parseInt(num1) - parseInt(num2);
    document.querySelector('#Result').innerHTML = "The result is " + " " + num3;
}

function mul(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
      var num3 = parseInt(num1) * parseInt(num2);
    document.querySelector('#Result').innerHTML = "The result is " + " " + num3;
}

function div(){
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
      var num3 = parseInt(num1) / parseInt(num2);
    document.querySelector('#Result').innerHTML = "The result is " + " " + num3;
}