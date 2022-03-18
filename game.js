
let userscore =0;
let computerscore =0;
  
 function image(imgchoice){
   //   console.log(imgchoice);
     
     if(imgchoice=="rock")
     {

         return "url('rock.jpg')";
     }

     else if(imgchoice=="paper")
     {
       
         return "url('paper.jpg')";
     }
     else if(imgchoice=="scissor")
     {
       
         return "url('scissor.png')";
     }
 }

  function gameChallenge(userchoice,comChoice)
  {
   //    console.log(userchoice+" "+comChoice);
      if(userchoice==comChoice)
      {
          return "draw";
      }
      //  for rock choice
      if(userchoice == "rock")
      {
          if(comChoice=="paper"){
              return false;
          }
          else if(comChoice=="scissor"){
              return true;
          }
      }
      
   //    for paper choice
      else if(userchoice == "paper")
      {
          if(comChoice=="rock"){
              return true;
          }
          else if(comChoice=="scissor"){
              return false;
          }
      }

       //    for scissor choice
       else if(userchoice == "scissor")
      {
          if(comChoice=="rock"){
              return false;
          }
          else if(comChoice=="paper"){
              return true;
          }
      }
  }


function game(userchoice){
    document.getElementById("resultid").style.display ="flex";
    let userimageSelection = image(userchoice);
    document.getElementById("userchoice").style.backgroundImage = userimageSelection;

    let comChoice =["rock","paper","scissor"];
   var i = Math.floor(Math.random()*3);
    let comimageSelection = image(comChoice[i]);
    document.getElementById("comchoice").style.backgroundImage = comimageSelection;

    var GameWon = gameChallenge(userchoice,comChoice[i]);
    if(GameWon==true)
    {
        userscore++;
        document.getElementById("resultText").innerText= "you won";
        document.getElementById("userscore").innerText= userscore;
        document.getElementById("resultText").style.color= "green";
    }
    else if(GameWon==false)
    {
        computerscore++;
       document.getElementById("resultText").innerText= "you lose";
       document.getElementById("computerscore").innerText= computerscore;
       document.getElementById("resultText").style.color= "red";
    }
    else{
       document.getElementById("resultText").innerText= "Draw";
       document.getElementById("resultText").style.color= "yellow";
    }
}

