let clickaudio= new Audio("click.wav")
let gamewin = new Audio("game_win.wav")
let turn = "X"

const changeturn=()=>{
    return turn==="X"?"O":"X"
}
const chakewin=()=>{
    let boxtext= document.querySelectorAll('.boxtext')
   if(boxtext[0].innerHTML===boxtext[1].innerHTML && boxtext[1].innerHTML===boxtext[2].innerHTML &&boxtext[0].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[0].innerHTML + " won 🌟✨🎉"
    boxtext[0].style.color="green"
    boxtext[1].style.color="green"
    boxtext[2].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[3].innerHTML===boxtext[4].innerHTML && boxtext[4].innerHTML===boxtext[5].innerHTML &&boxtext[3].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[3].innerHTML + " won 🌟✨🎉"
    boxtext[3].style.color="green"
    boxtext[4].style.color="green"
    boxtext[5].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[6].innerHTML===boxtext[7].innerHTML && boxtext[7].innerHTML===boxtext[8].innerHTML &&boxtext[6].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[6].innerHTML + " won 🌟✨🎉"
    boxtext[6].style.color="green"  
    boxtext[7].style.color="green"  
    boxtext[8].style.color="green"  
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[0].innerHTML===boxtext[3].innerHTML && boxtext[3].innerHTML===boxtext[6].innerHTML &&boxtext[0].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[0].innerHTML + " won 🌟✨🎉"
    boxtext[0].style.color="green"
    boxtext[6].style.color="green"
    boxtext[3].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[1].innerHTML===boxtext[4].innerHTML && boxtext[4].innerHTML===boxtext[7].innerHTML &&boxtext[1].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[1].innerHTML + " won 🌟✨🎉"
    boxtext[1].style.color="green"
    boxtext[7].style.color="green"
    boxtext[4].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[2].innerHTML===boxtext[5].innerHTML && boxtext[5].innerHTML===boxtext[8].innerHTML &&boxtext[2].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[2].innerHTML + " won 🌟✨🎉"
    boxtext[2].style.color="green"
    boxtext[5].style.color="green"
    boxtext[8].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[0].innerHTML===boxtext[4].innerHTML && boxtext[4].innerHTML===boxtext[8].innerHTML &&boxtext[0].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[0].innerHTML + " won 🌟✨🎉"
    boxtext[0].style.color="green"
    boxtext[8].style.color="green"
    boxtext[4].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
   else if(boxtext[2].innerHTML===boxtext[4].innerHTML && boxtext[4].innerHTML===boxtext[6].innerHTML &&boxtext[2].innerHTML!="" ){
    document.getElementsByClassName("chance")[0].innerHTML= boxtext[2].innerHTML + " won 🌟✨🎉 "
    boxtext[2].style.color="green"
    boxtext[6].style.color="green"
    boxtext[4].style.color="green"
    document.getElementsByTagName('img')[0].style.width="60px"
    gamewin.play()
   }
}




//main logic 
let box1=document.getElementsByClassName("box")[0]
box1.addEventListener('click',()=>{
    let boxtext1=document.getElementsByClassName("boxtext")[0]
    clickaudio.play()
    if(boxtext1.innerHTML===""){
        boxtext1.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box2=document.getElementsByClassName("box")[1]
box2.addEventListener('click',()=>{
    let boxtext2=document.getElementsByClassName("boxtext")[1]
    clickaudio.play()
    if(boxtext2.innerHTML===""){
        boxtext2.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box3=document.getElementsByClassName("box")[2]
box3.addEventListener('click',()=>{
    let boxtext3=document.getElementsByClassName("boxtext")[2]
 
    if(boxtext3.innerHTML===""){
        boxtext3.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        clickaudio.play()
        chakewin()
    }
})
let box4=document.getElementsByClassName("box")[3]
box4.addEventListener('click',()=>{
    let boxtext4=document.getElementsByClassName("boxtext")[3]
    if(boxtext4.innerHTML===""){
        clickaudio.play()
        boxtext4.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box5=document.getElementsByClassName("box")[4]
box5.addEventListener('click',()=>{
    let boxtext5=document.getElementsByClassName("boxtext")[4]
    if(boxtext5.innerHTML===""){
        clickaudio.play()
        boxtext5.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box6=document.getElementsByClassName("box")[5]
box6.addEventListener('click',()=>{
    let boxtext6=document.getElementsByClassName("boxtext")[5]
    if(boxtext6.innerHTML===""){
        clickaudio.play()
        boxtext6.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box7=document.getElementsByClassName("box")[6]
box7.addEventListener('click',()=>{
    let boxtext7=document.getElementsByClassName("boxtext")[6]
    if(boxtext7.innerHTML===""){
        clickaudio.play()
        boxtext7.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box8=document.getElementsByClassName("box")[7]
box8.addEventListener('click',()=>{
    let boxtext8=document.getElementsByClassName("boxtext")[7]
    if(boxtext8.innerHTML===""){
        clickaudio.play()
        boxtext8.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})
let box9=document.getElementsByClassName("box")[8]
box9.addEventListener('click',()=>{
    let boxtext9=document.getElementsByClassName("boxtext")[8]
    if(boxtext9.innerHTML===""){
        clickaudio.play()
        boxtext9.innerHTML=turn
        turn =changeturn()
        document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
        chakewin()
    }
})

let restart=document.getElementById("restar")
let boxes= document.querySelectorAll('.boxtext')
restart.addEventListener('click',()=>{
    for (const i in boxes) {
        boxes[i].innerHTML=""
        chakewin()
    }
    for(let index=0;index<=8;index++){
        boxes[index].style.color="black"
    }
    turn="X"
    document.getElementsByClassName("chance")[0].innerHTML= "Turn for "+turn
    document.getElementsByTagName('img')[0].style.width="0px"
})