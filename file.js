const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function pickCapital(){
        let randomIndex = Math.floor( Math.random() * 26)
        return characters[randomIndex]
        
    }
function pickSmall(){
    let randomIndex = Math.floor( Math.random() * (49-26+ 1)+26)
    return characters[randomIndex]
}
function pickNumber(){
    let randomIndex = Math.floor( Math.random() * (61-52+ 1)+52)
    return characters[randomIndex] 
}
function pickCharacter(){
    let randomIndex = Math.floor( Math.random() * (90-62+ 1)+62)
    return characters[randomIndex]
}
const button=document.querySelector('.button')
button.addEventListener("click",)
function combination(){
    let word=[pickCapital(),pickSmall(),pickNumber(),pickCharacter(),pickCapital(),pickNumber(),pickCharacter()]
    for(let i=0;i<word.length;i++){
        return word[i]  
    }
}



