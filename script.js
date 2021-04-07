document.getElementById("clickme").onclick = function(){
    if(document.getElementById("Bin").value == "" && document.getElementById("Dec").value == "" && document.getElementById("Oct").value == "" && document.getElementById("Hex").value == ""){
        alert("Enter the number you want to convert in the appropriate field.");
    }
}
/*
OVO JE ZA DUGME(AKO OCES NA TO DA SE CONVERTUJE)
*/
// let con = document.getElementById('clickme');
// con.addEventListener('click', function(){
//     if(document.getElementById('Bin').value !== "" && document.getElementById('Dec').value == "" && document.getElementById('Oct').value == "" && document.getElementById('Hex').value == ""){
//         let input1 = document.getElementById('Bin').value;
//         document.getElementById('Dec').value = Number.parseInt(input1, 2);
//         document.getElementById('Oct').value = Number.parseInt(input1, 2).toString(8);
//         document.getElementById('Hex').value = Number.parseInt(input1, 2).toString(16);
//     }else if(document.getElementById('Bin').value == "" && document.getElementById('Dec').value !== "" && document.getElementById('Oct').value == "" && document.getElementById('Hex').value == ""){
//         let input2 = document.getElementById('Dec').value;
//         document.getElementById('Bin').value = Number(input2).toString(2);
//         document.getElementById('Oct').value = Number(input2).toString(8);
//         document.getElementById('Hex').value = Number(input2).toString(16);
//     }else if(document.getElementById('Bin').value == "" && document.getElementById('Dec').value == "" && document.getElementById('Oct').value !== "" && document.getElementById('Hex').value == ""){
//         let input3 = document.getElementById('Oct').value;
//         document.getElementById('Bin').value = Number.parseInt(input3, 8).toString(2);
//         document.getElementById('Dec').value = Number.parseInt(input3, 8);
//         document.getElementById('Hex').value = Number.parseInt(input3, 8).toString(16);
//     }else if(document.getElementById('Bin').value == "" && document.getElementById('Dec').value == "" && document.getElementById('Oct').value == "" && document.getElementById('Hex').value !== ""){
//         let input4 = document.getElementById('Hex').value;
//         document.getElementById('Bin').value = Number.parseInt(input4, 16).toString(2);
//         document.getElementById('Dec').value = Number.parseInt(input4, 16);
//         document.getElementById('Oct').value = Number.parseInt(input4, 16).toString(8);
//     }
// });
/*
OVO JE AUTOMATSKO RACUNANJE
*/
const binInput = document.getElementById('Bin');
const decInput = document.getElementById('Dec');
const octInput = document.getElementById('Oct');
const hexInput = document.getElementById('Hex');
const inputs = document.getElementsByClassName("input");
for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];
    input.addEventListener("input", function(e){
        let value = e.target.value;
        switch(e.target.name){
            case "Bin":
                decInput.value =  Number.parseInt(value, 2);
                octInput.value =  Number.parseInt(value, 2).toString(8);
                hexInput.value =  Number.parseInt(value, 2).toString(16);
                break;
            case "Dec":
                binInput.value =  Number(value).toString(2);
                octInput.value =  Number(value).toString(8);
                hexInput.value =  Number(value).toString(16);
                break;
            case "Oct":
                binInput.value =  Number.parseInt(value, 8).toString(2);
                decInput.value =  Number.parseInt(value, 8);
                hexInput.value =  Number.parseInt(value, 8).toString(16);
                break;
            case "Hex":
                binInput.value =  Number.parseInt(value, 16).toString(2);
                decInput.value =  Number.parseInt(value, 16);
                octInput.value =  Number.parseInt(value, 16).toString(8);
                break;
        }
    });
}