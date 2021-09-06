// 2. Homework: Conditionals

    // 1.  The World Translator

    let lang ="english";
    if (lang === "english") {
      console.log("hello world")
    } if (lang  === "french" ) {
      console.log("bonjour le monde")
    }  if (lang === "malay") {
      console.log("hai dunia")
    }

    // 2. The Grade Assigner

    let gradescore = 63 ;
    let usergrade = "damon";
    
    if (gradescore >= 90) {
      console.log(usergrade + " " + "got a" + " " + "A")
    } else if (gradescore >= 80 ) {
      console.log(usergrade + " " + "got a" + " " + "B")
    } else if (gradescore >= 60 ) {
      console.log(usergrade + " " + "got a" + " " + "C")
    } else if (gradescore >= 40 ) {
      console.log(usergrade + " " + "got a" + " " + "D")
    } else { console.log(usergrade + " " + "got a" + " " + "F") }

    // 3. Air Conditioning
    
    let currtemp = 20;
    let acfunc = false;
    let distemp = 18;

    if (acfunc === true && currtemp > distemp) {
      console.log("turn on the a/c please")
    } else if (acfunc !== true && currtemp > distemp ) {
      console.log("fix the a/c now! it's hot!")
    } else if (acfunc !== true && currtemp < distemp) {
      console.log("fix the a/c whenever you have the chance")
    }

    // 4. you and your goverment

    let usergovage = 10 ;

    if (usergovage >= 35 ) {
      console.log("you can vote and hold any place in gov"); 
    } else if (usergovage >= 25) {
      console.log("you can vote and run for the senate");
    } else if (usergovage >= 18) {
      console.log("you can vote");
    } else {console.log("you can't vote yet");}

    // 5. golf

    let scoregolf = 13;
    let par  = 10;
    
    if (scoregolf == 1) {
      console.log("hole in one");
    } else if (scoregolf <= par - 2 ) {
      console.log("eagle");
    } else if (scoregolf == par - 1) {
      console.log("birdie");
    } else if (scoregolf == par) {
      console.log("par");
    } else if (scoregolf == par + 1) {
      console.log("bogey");
    } else if (scoregolf == par + 2) {
      console.log("double bogey");
    } else if (scoregolf >= par + 3) {
      console.log("not sure");
    }
  
    // 6. serge says

    let usermsg = "LOLs";

    if (usermsg[4] == "?") {
      console.log("sure");
    } else if (usermsg == "") {
      console.log("fine! be that way");
    } else if (usermsg.toUpperCase == true) {
      console.log("woah! chill out");
    } else {
      console.log("whatever");
    }

    // 7. the pluralizer

    let noun = "children";
    let numberp = 2;
    let regexing = /(.*)ing$/g ;
    let regexs = /(.*)s$/g ;
    let regexes = /(.*)es$/g ;
    let regexen = /(.*)en$/g ;
    let regexies = /(.*)ies$/g ;

    if (numberp > 1 && regexing.test(noun) == true) {
      console.log("this word has ing plural")
    } else if (numberp >= 2 && regexies.test(noun) == true) {
      console.log("this word has ies plural")
    }  else if (numberp >= 2 && regexes.test(noun) == true) {
      console.log("this word has es plural")
    } else if (numberp >= 2 && regexs.test(noun) == true) {
      console.log("this word has s plural")
    }else if (numberp >= 2 && regexen.test(noun) == true) {
      console.log("this word has en plural")
    }else if (numberp <= 1 ) {
      console.log("this word is not plural")
    }
    

    // 8. rock paper scissor

    let plchoose = "paper";
    let pl2choose = "scissor";

    if (plchoose == pl2choose) {
      console.log("tie");
    } 
    else if (plchoose  == "rock") 
      {
          if (pl2choose == "paper") 
          {
            console.log("player 1 choose rock lose");
            console.log("player 2 choose paper  win ")
          } 
          else if (pl2choose == "scissor") 
          {
            console.log("player 1 choose rock win");
            console.log("player 2 choose scissor  lose ")        
          }
    } 
    else if (plchoose  == "scissor") 
      {
          if (pl2choose == "paper") 
          {
            console.log("player 1 choose rock win");
            console.log("player 2 choose paper  lose ")
          } 
          else if (pl2choose == "rock") 
          {
            console.log("player 1 choose scissor lose");
            console.log("player 2 choose rock  win ")        
          }
    } 
    else if (plchoose  == "paper") 
      {
          if (pl2choose == "rock") 
          {
            console.log("player 1 choose paper win");
            console.log("player 2 choose rock lose ")
          } 
          else if (pl2choose == "scissor") 
          {
            console.log("player 1 choose paper lose");
            console.log("player 2 choose scissor  win ")        
          }
    }

  // 3. Homework: JavaScript loops

    // 1. the even/odd reporter
    function evenOdd () {

      for (var i = 0; i <= 20;  i++) {
        //  remainder exp: 13 % 5 = 3;
        if (i % 2 === 0) {
          console.log(i + " is even")
        } else {
          console.log(i + " is odd")
        }
      }      
      
    }
    
    // evenOdd();


     // 2. multiplication tables
     function multiplication () {

      let multiply = 9
      for ( let i = 0; i <= 12; i += 1) {
          let result = multiply * i;
          console.log(multiply + " * " + i + " = " + result);

        for (let multiply = 0; multiply <= 12; multiply++) {
          for (let i = 0; i <= 12; i++) {
            let result = multiply * i;
            console.log(multiply + " * " + i + " = " + result);
          }
        }
      }        
       
     }

     // multiplication();


    // 3. the grade assigner
    function thegrade() {
      
      function gradeassign (result) {

        if (result >= 90) {
          return "a";
        } else if (result >= 80) {
          return "b";
        } else if (result >= 70) {
          return "c";
        } else if (result >= 60) {
          return "d";
        } else {
          return "f";
        }    
      }     
      
      for (let i = 50; i <= 100; i++) {
        console.log('for ' + i + ', you got a ' + gradeassign(i));
      }
      
    }
    // thegrade();

    // 4. golf 

    function golf() {
      


      
        for (scoregolf = 1; scoregolf < 8; scoregolf++ ) 
        {
        
          let par = 5;
          if (scoregolf == 1) {
            console.log("hole in one");
          } else if (scoregolf <= par - 2 ) {
            console.log("eagle");
          } else if (scoregolf == par - 1) {
            console.log("birdie");
          } else if (scoregolf == par) {
            console.log("par");
          } else if (scoregolf == par + 1) {
            console.log("bogey");
          } else if (scoregolf == par + 2) {
            console.log("double bogey");
          } else if (scoregolf >= par + 3) {
            console.log("not sure");
          }  
          
          for( par = 3; par <= 5; par++ ) 
          {
              
              if (scoregolf == 1) {
                console.log("hole in one");
              } else if (scoregolf <= par - 2 ) {
                console.log("eagle");
              } else if (scoregolf == par - 1) {
                console.log("birdie");
              } else if (scoregolf == par) {
                console.log("par");
              } else if (scoregolf == par + 1) {
                console.log("bogey");
              } else if (scoregolf == par + 2) {
                console.log("double bogey");
              } else if (scoregolf >= par + 3) {
                console.log("not sure");
              }                

           }
  
  
      
        } 
      
        
        
          for (scoregolf = 1; scoregolf < 8; scoregolf++ )  {
           par = Math.floor(Math.random());

              if (scoregolf == 1) {
                console.log("hole in one");
              } else if (scoregolf <= par - 2 ) {
                console.log("eagle");
              } else if (scoregolf == par - 1) {
                console.log("birdie");
              } else if (scoregolf == par) {
                console.log("par");
              } else if (scoregolf == par + 1) {
                console.log("bogey");
              } else if (scoregolf == par + 2) {
                console.log("double bogey");
              } else if (scoregolf >= par + 3) {
                console.log("not sure");
              }   
          
          }
        
       
     
    }

   // golf();

    // 5. 99 bottles of beer 
    function bottlesofbeer() {

      let beer ;
      for(beer = 100; beer >= 0 ; beer--) 
      {

          if ( beer > 1  == true) {
          console.log( beer + " bottles of beer on the wall, " + beer + " bottles of beer." + " Take one down and pass it around, " + beer + " bottles of beer on the wall.")

          } else if (beer == 1) {
          console.log( beer + " bottle of beer on the wall, " + beer + " bottle of beer." + " Take one down and pass it around, " + beer + " bottle of beer on the wall.")

          } else {
           console.log("No more bottles of beer on the wall, no more bottles of beer." +
  "Go to the store and buy some more, 99 bottles of beer on the wall.")        
          }


      }
      
    }

     bottlesofbeer();
