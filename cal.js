let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for(item of buttons){
  item.addEventListener('click', (e)=>{
    buttonText = e.target.innerHTML;
    console.log('button text is ', buttonText);
    if(buttonText=='+'){
      buttonText = '+';
      screenValue += buttonText;
      screen.value = screenValue;
    }

    else if(buttonText=='-'){
      buttonText = '-';
      screenValue += buttonText;
      screen.value = screenValue;
    }

    else if(buttonText=='x'){
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }

    else if(buttonText=='/'){
      buttonText = '/';
      screenValue += buttonText;
      screen.value = screenValue;
    }

    // else if(buttonText=='<'){
      // buttonText = '+';
      // screenValue += buttonText;
    //   screenValue = screen.value.slice(0, -1);
    // }
    
    else if(buttonText=='C'){
      screenValue = "";
      screen.value = screenValue;
    }

    else if(buttonText=='='){
      screenValue = eval(screenValue);
      screen.value = screenValue;

    }

    else{
      screenValue += buttonText;
      screen.value = screenValue;
    }


  })
}