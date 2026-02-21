const output = document.querySelector(".main");
const button = document.querySelectorAll("button");
let str = ''

button.forEach((button) =>{
    button.addEventListener("click", (e) => {
        
        
    
        if(e.target.textContent.trim() === "AC"){
                str = ''
                output.value = str;
        }
        else if (e.target.textContent.trim() === "="){
                str = eval(str);
                output.value = str;
        }
        else if (e.target.textContent.trim()=== "DEL"){
                str = str.substring(0,str.length-1)
                output.value = str;
        }
        else {
            str += e.target.textContent.trim();
            output.value = str;
        }
         
    })
})

// function handleData(e){
//     console.log("value", e.target.textContent.trim());
//     let str = '';

//     if(e.target.textContent.trim() === "AC"){

//     }
//     else if (e.target.textContent.trim() === "="){

//     }
//     else if (e.target.textContent.trim()=== "DEL"){

//     }
//     else {
//         str += e.target.textContent.trim();
//         output.value = str;
//     }
     


// } 









