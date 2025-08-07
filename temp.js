const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const submit = document.getElementById("submit");
const p = document.getElementById("p");
let temp;

function convert(){ 

    if(tofahrenheit.checked){
        temp = textbox.value;         //line no. 11,12 is equal to line no.17
        temp = Number(temp);
        temp = temp * 9/5 + 32;
        p.textContent = temp.toFixed(1) + "F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        p.textContent = temp.toFixed(1) + "C";
    }
    else{
        p.textContent = "select an unit";
    }
}

//line no. 11,12 is equal to line no.17

// ---------------- OR ----------------------------
// delete the onclick="convert()" on the submit button in HTML and type the code below

/* 
submit.onclick = function(){

       if(tofahrenheit.checked){
        temp = textbox.value;
        temp = Number(temp);
        temp = temp * 9/5 + 32;
        p.textContent = temp.toFixed(1) + "F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        p.textContent = temp.toFixed(1) + "C";
    }
    else{
        p.textContent = "select an unit";
    }
} 
*/