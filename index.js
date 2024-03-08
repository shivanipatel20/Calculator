console.log("Welcome again");

let screenValue = "";
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonTxt = e.target.innerText;
        console.log(buttonTxt);
        if(buttonTxt === "AC"){
            screenValue="";
            screen.value = screenValue;
        }
        else if(buttonTxt === "Del"){
            if(screenValue.length>0)
                screenValue=screenValue.slice(0,-1);
            screen.value = screenValue;
        }
        else if(buttonTxt == '='){
            try{
                let temp =eval(screenValue);
                screenValue = temp.toString();
                screen.value = screenValue;
            }
            catch{
                screen.value='Error';
                screenValue="";
                screen.value = screenValue;
            }

        }
        else{
            screenValue+=buttonTxt;
            screen.value = screenValue;
        }
    })
}