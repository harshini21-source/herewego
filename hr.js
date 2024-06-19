const display = document.getElementById("display");
function addelement(input){
    display.value +=input;


}
function clearout(){
    display.value =" ";
}
function calculate(){
    try{
        display.value=eval(display.value);

    }
    catch{
        display.value=Error;
    }
}