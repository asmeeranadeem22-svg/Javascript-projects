const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const originalColor = body.style.backgroundColor;
   
    buttons.forEach(button =>{
             
         button.addEventListener("click", ()=>{
          
            if(button.id=== "1"){
                body.style.backgroundColor = "grey";
            } else if(button.id === "2"){
                body.style.backgroundColor = "yellow";
            } else if(button.id === "3"){
                body.style.backgroundColor = "blue";
            } else if(button.id === "4"){
                body.style.backgroundColor = "green";
            }
            setTimeout(()=>{
                body.style.backgroundColor = originalColor;
            },2000);
        });
 
   
    });
    