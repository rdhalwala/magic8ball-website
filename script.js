function shake(){

    var ball= document.getElementById("ball")
    var messageText = document.getElementById("message")
 
    //remove previous message if it exists
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    //Make the ball shake by adding the css class
    ball.classList.add("shake");
 
    //Remove the shake class after it stops shaking
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    //call the fortune function to get your fortune only after 2sec
    setTimeout(function(){ getFortune(); }, 1500);
 }
 
 
 //generate the fortune for the ball
 function getFortune(){
     //array of fortunes
     var fortunes = ['Do NOT go to the BOOT', 'Go to the Boot', 'Fuck a bitch', 'Bro, he is so mid', 'You are too drunk - Do not have another drink', "Pa' arriba, pa' abajo, pa' centro, pa' dentro", 'NO BOOTCEST', 'Do your HW!', 'You can save that assignment for tomorrow', 'Yes, Signs point to yes', 'Concentrate and ask again', 'My sources say no']
 
     //get a random fortune message message
     var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
 
     //display the fortune on the page
     var parent = document.getElementById("fortune");
     var newMessage = document.createElement("div");
     newMessage.setAttribute('id', "message");
     newMessage.innerHTML = "\""+fortune+"\"";
     parent.appendChild(newMessage);
 }