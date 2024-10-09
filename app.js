const hour = document.querySelector('.hour');  
const minute = document.querySelector('.minute');  
const second = document.querySelector('.second');  

function setClock() {  
    const now = new Date();  
    
    const seconds = now.getSeconds();  
    const minutes = now.getMinutes();  
    const hours = now.getHours();  
    
   
    const secondDeg = seconds * 6;  
    const minuteDeg = minutes * 6 + (seconds / 60) * 6; 
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;  
    
     
    second.style.transform = `rotateZ(${secondDeg}deg)`;  
    minute.style.transform = `rotateZ(${minuteDeg}deg)`;  
    hour.style.transform = `rotateZ(${hourDeg}deg)`;  
}  

setInterval(setClock, 1000);  

setClock();



 

