const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 30;
const MONSTER_ATTACK_VALUE = 20;
const HEAL_VALUE = 15;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";


const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_MONSTER_ATTACK ="MONSTER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let battleLog = [];
let lastLoggedEntry;


let idleTimer = true;

let deadFlag = false
let deadFlagM = false


function playerAttackSpriteHandler () {
    idleTimer = false;
    // clearTimeout(idleTimeout)
    const playerSprite = document.getElementById('playerSprite');
    let PSA1 = playerSprite.getAttribute("PSA1-src");
    let PSA2 = playerSprite.getAttribute("PSA2-src");
    let PSA3 = playerSprite.getAttribute("PSA3-src");
    let PSA4 = playerSprite.getAttribute("PSA4-src");
    let PSA5 = playerSprite.getAttribute("PSA5-src");
    let PSA6 = playerSprite.getAttribute("PSA6-src");
    let PSA7 = playerSprite.getAttribute("PSA7-src");
    let PSA8 = playerSprite.getAttribute("PSA8-src");
    let PSA9 = playerSprite.getAttribute("PSA9-src");
    let PSA10 = playerSprite.getAttribute("PSA10-src");
    
    setTimeout(
        function(){
            playerSprite.src= PSA1
            setTimeout(function(){
               if(deadFlag == false){
                playerSprite.src= PSA2
                setTimeout(function(){
                    if(deadFlag == false){
                        playerSprite.src= PSA3
                    setTimeout(function(){
                        if(deadFlag == false){
                            playerSprite.src= PSA4
                        setTimeout(function(){
                            if(deadFlag == false){
                                playerSprite.src= PSA5
                            setTimeout(function(){
                                if(deadFlag == false){
                                    playerSprite.src= PSA6
                                setTimeout(function(){
                                    if(deadFlag == false){
                                        playerSprite.src= PSA7
                                    setTimeout(function(){
                                        if(deadFlag == false){
                                            playerSprite.src= PSA8
                                        setTimeout(function(){
                                            if(deadFlag == false){
                                                playerSprite.src= PSA9
                                            setTimeout(function(){
                                                if (deadFlag == false){
                                                    playerSprite.src= PSA10
                                                    idleTimer = true;
                                                   playerIdleSpriteHandler()
                                                }
                                              
                                            },50)
                                            }
                                        },50)
                                        }
                                    },50)
                                    }
                                },50)
                                }
                            },50)
                            }
                        },50)
                        }
                    },50)
                    }
                },50)
               }
            },50)
        },50
    )

    
}




function playerDiedSpriteHandler () {
    idleTimer = false;
    // clearTimeout(idleTimeout)
    const playerSprite = document.getElementById('playerSprite');
    let PSD1 = playerSprite.getAttribute("PSD1-src");
    let PSD2 = playerSprite.getAttribute("PSD2-src");
    let PSD3 = playerSprite.getAttribute("PSD3-src");
    let PSD4 = playerSprite.getAttribute("PSD4-src");
    let PSD5 = playerSprite.getAttribute("PSD5-src");
    let PSD6 = playerSprite.getAttribute("PSD6-src");
    let PSD7 = playerSprite.getAttribute("PSD7-src");
    let PSD8 = playerSprite.getAttribute("PSD8-src");
    let PSD9 = playerSprite.getAttribute("PSD9-src");
    let PSD10 = playerSprite.getAttribute("PSD10-src");
    
    setTimeout(
        function(){
            playerSprite.src= PSD1
            setTimeout(function(){
                playerSprite.src= PSD2
                setTimeout(function(){
                    playerSprite.src= PSD3
                    setTimeout(function(){
                        playerSprite.src= PSD4
                        setTimeout(function(){
                            playerSprite.src= PSD5
                            setTimeout(function(){
                                playerSprite.src= PSD6
                                setTimeout(function(){
                                    playerSprite.src= PSD7
                                    setTimeout(function(){
                                        playerSprite.src= PSD8
                                        setTimeout(function(){
                                            playerSprite.src= PSD9
                                            setTimeout(function(){
                                                playerSprite.src= PSD10
                                            },50)
                                        },50)
                                    },50)
                                },50)
                            },50)
                        },50)
                    },50)
                },50)
            },50)
        },50
    )

    
}
































function playerIdleSpriteHandler() {
    let idleCount = 2;
    idleCount = idleCount - 1;
    if(idleCount < 1){
        return
    }
    const playerSprite = document.getElementById('playerSprite');
    let PSI1 = playerSprite.getAttribute("PSI1-src");
    let PSI2 = playerSprite.getAttribute("PSI2-src");
    let PSI3 = playerSprite.getAttribute("PSI3-src");
    let PSI4 = playerSprite.getAttribute("PSI4-src");
    let PSI5 = playerSprite.getAttribute("PSI5-src");
    let PSI6 = playerSprite.getAttribute("PSI6-src");
    let PSI7 = playerSprite.getAttribute("PSI7-src");
    let PSI8 = playerSprite.getAttribute("PSI8-src");
    let PSI9 = playerSprite.getAttribute("PSI9-src");
    let PSI10 = playerSprite.getAttribute("PSI10-src");
    
   
   if(idleTimer == true){
    idleCount++;
    setTimeout(function(){
        if(idleTimer == true){
            playerSprite.src= PSI1
        setTimeout(function(){
          if(idleTimer == true){
            playerSprite.src= PSI2
            setTimeout(function(){
               if(idleTimer == true){
                playerSprite.src= PSI3
                setTimeout(function(){
                    if(idleTimer == true){
                        playerSprite.src= PSI4
                    setTimeout(function(){
                        if(idleTimer == true){
                            if(idleTimer == true){
                                playerSprite.src= PSI5
                        setTimeout(function(){
                            if(idleTimer == true){
                                playerSprite.src= PSI6
                            setTimeout(function(){
                                if(idleTimer == true){
                                    playerSprite.src= PSI7
                                setTimeout(function(){
                                    if(idleTimer == true){
                                        playerSprite.src= PSI8
                                    setTimeout(function(){
                                        if(idleTimer == true){
                                            playerSprite.src= PSI9
                                        setTimeout(function(){
                                            if(idleTimer == true){
                                                playerSprite.src= PSI10
                                                
                                            
                            
                                                playerIdleSpriteHandler()
                                            }
                                           
                                        
                                        },100)
                                        }
                                    },100)
                                    }
                                },100)
                                }
                            },100)
                            }
                        },100)
                            }
                        }
                    },100)
                    }
                },100)
               }
            },100)
          }
        },100)
        }
   },100)
   }

   else{
    return
   }
   

    
}







function monsterAttackSpriteHandler () {
    idleTimer = false;
    // clearTimeout(idleTimeout)
    const monsterSprite = document.getElementById('monsterSprite');
    let MSA1 = monsterSprite.getAttribute("MSA1-src");
    let MSA2 = monsterSprite.getAttribute("MSA2-src");
    let MSA3 = monsterSprite.getAttribute("MSA3-src");
    let MSA4 = monsterSprite.getAttribute("MSA4-src");
    let MSA5 = monsterSprite.getAttribute("MSA5-src");
    let MSA6 = monsterSprite.getAttribute("MSA6-src");
    let MSA7 = monsterSprite.getAttribute("MSA7-src");
    let MSA8 = monsterSprite.getAttribute("MSA8-src");
    let MSA9 = monsterSprite.getAttribute("MSA9-src");
    
    
    setTimeout(
        function(){
            monsterSprite.src= MSA1
            setTimeout(function(){
               if(deadFlagM == false){
                monsterSprite.src= MSA2
                setTimeout(function(){
                    if(deadFlagM == false){
                        monsterSprite.src= MSA3
                    setTimeout(function(){
                        if(deadFlagM == false){
                            monsterSprite.src= MSA4
                        setTimeout(function(){
                            if(deadFlagM == false){
                                monsterSprite.src= MSA5
                            setTimeout(function(){
                                if(deadFlagM == false){
                                    monsterSprite.src= MSA6
                                setTimeout(function(){
                                    if(deadFlagM == false){
                                        monsterSprite.src= MSA7
                                    setTimeout(function(){
                                        if(deadFlagM == false){
                                            monsterSprite.src= MSA8
                                        setTimeout(function(){
                                            if(deadFlagM == false){
                                                monsterSprite.src= MSA9
                                                idleTimer = true;
                                                monsterIdleSpriteHandler()
                                           
                                            }
                                        },50)
                                        }
                                    },50)
                                    }
                                },50)
                                }
                            },50)
                            }
                        },50)
                        }
                    },50)
                    }
                },50)
               }
            },50)
        },50
    )

    
}










function monsterDiedSpriteHandler () {
    idleTimer = false;
    
    // clearTimeout(idleTimeout)
    const monsterSprite = document.getElementById('monsterSprite');
    let MSD1 = monsterSprite.getAttribute("MSD1-src");
    let MSD2 = monsterSprite.getAttribute("MSD2-src");
    let MSD3 = monsterSprite.getAttribute("MSD3-src");
    let MSD4 = monsterSprite.getAttribute("MSD4-src");
    let MSD5 = monsterSprite.getAttribute("MSD5-src");
    let MSD6 = monsterSprite.getAttribute("MSD6-src");
    let MSD7 = monsterSprite.getAttribute("MSD7-src");
    let MSD8 = monsterSprite.getAttribute("MSD8-src");
    let MSD9 = monsterSprite.getAttribute("MSD9-src");
    let MSD10 = monsterSprite.getAttribute("MSD10-src");
    
    setTimeout(
        function(){
            monsterSprite.src= MSD1
            setTimeout(function(){
                monsterSprite.src= MSD2
                setTimeout(function(){
                    monsterSprite.src= MSD3
                    setTimeout(function(){
                        monsterSprite.src= MSD4
                        setTimeout(function(){  
                            monsterSprite.src= MSD5
                            setTimeout(function(){
                                monsterSprite.src= MSD6
                                setTimeout(function(){
                                    monsterSprite.src= MSD7
                                    setTimeout(function(){
                                        monsterSprite.src= MSD8
                                        setTimeout(function(){
                                            monsterSprite.src= MSD9
                                            setTimeout(function(){
                                                monsterSprite.src= MSD10
                                            },100)
                                        },100)
                                    },100)
                                },100)
                            },100)
                        },100)
                    },100)
                },100)
            },100)
        },100
    )

    
}




function monsterIdleSpriteHandler(){

    const monsterSprite = document.getElementById('monsterSprite')

    let MSI1 = monsterSprite.getAttribute("MSI1-src");
    let MSI2 = monsterSprite.getAttribute("MSI2-src");
    let MSI3 = monsterSprite.getAttribute("MSI3-src");
    let MSI4 = monsterSprite.getAttribute("MSI4-src");
    let MSI5 = monsterSprite.getAttribute("MSI5-src");
    let MSI6 = monsterSprite.getAttribute("MSI6-src");
    let MSI7 = monsterSprite.getAttribute("MSI7-src");
    let MSI8 = monsterSprite.getAttribute("MSI8-src");
    let MSI9 = monsterSprite.getAttribute("MSI9-src");
    let MSI10 = monsterSprite.getAttribute("MSI10-src");
    let MSI11 = monsterSprite.getAttribute("MSI11-src");
    let MSI12 = monsterSprite.getAttribute("MSI12-src");

    if(idleTimer == true){
        
        setTimeout(function(){
            if(idleTimer == true){
                monsterSprite.src= MSI1
            setTimeout(function(){
              if(idleTimer == true){
                monsterSprite.src= MSI2
                setTimeout(function(){
                   if(idleTimer == true){
                    monsterSprite.src= MSI3
                    setTimeout(function(){
                        if(idleTimer == true){
                            monsterSprite.src= MSI4
                        setTimeout(function(){
                            if(idleTimer == true){
                                if(idleTimer == true){
                                    monsterSprite.src= MSI5
                            setTimeout(function(){
                                if(idleTimer == true){
                                    monsterSprite.src= MSI6
                                setTimeout(function(){
                                    if(idleTimer == true){
                                        monsterSprite.src= MSI7
                                    setTimeout(function(){
                                        if(idleTimer == true){
                                            monsterSprite.src= MSI8
                                        setTimeout(function(){
                                            if(idleTimer == true){
                                                monsterSprite.src= MSI9
                                            setTimeout(function(){
                                                if(idleTimer == true){
                                                    monsterSprite.src= MSI10

                                                    setTimeout(function(){
                                                        if(idleTimer == true){
                                                            monsterSprite.src= MSI11
                                                            
                                                            setTimeout(function(){
                                                                if(idleTimer == true){
                                                                    monsterSprite.src= MSI12
                                                                    monsterIdleSpriteHandler()
                                                                
                                                
                                                            
                                                                }
                                                               
                                                            
                                                            },100)
                                        
                                                    
                                                        }
                                                       
                                                    
                                                    },100)           
                                                }
                                               
                                            
                                            },100)
                                            }
                                        },100)
                                        }
                                    },100)
                                    }
                                },100)
                                }
                            },100)
                                }
                            }
                        },100)
                        }
                    },100)
                   }
                },100)
              }
            },100)
            }
       },100)
       }
    
       else{
        return
       }
}







playerIdleSpriteHandler()
monsterIdleSpriteHandler()







function getMaxLifeValues() {
    const enteredValue = prompt("Establish desired health for you and the monster")
    
    let parsedValue = parseInt(enteredValue);
    if (isNaN (parsedValue) || parsedValue <=0) {
        throw {message: 'Invalid user input not a number!'}
    }
    
    return parsedValue;
    
   }
 let chosenMaxLife;
   try{

    chosenMaxLife = getMaxLifeValues();
   } catch (error) {
       console.log(error);
       chosenMaxLife = 100;
       alert('Default 100 HP selected')
    // throw error;
   } 

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry;
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:

    }
    if(ev === LOG_EVENT_PLAYER_ATTACK){
        logEntry = {
            event: ev,
            value: val,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } 
        
        
        else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
     }else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        battleLog.push(logEntry);
     }else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
     }
     battleLog.push(logEntry);
}

function reset() {
   
 currentMonsterHealth = chosenMaxLife;
 currentPlayerHealth = chosenMaxLife;
 resetGame(chosenMaxLife);
}

function endRound () {
    const initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
      LOG_EVENT_MONSTER_ATTACK,
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
      );

  if (currentPlayerHealth <= 0 && hasBonusLife){
      hasBonusLife = false;
      removeBonusLife();
      currentPlayerHealth = initialPlayerHealth
      setPlayerHealth(initialPlayerHealth)
      alert("REDMPTION")
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    deadFlagM = true;
    setTimeout(monsterDiedSpriteHandler,500)
    
      setTimeout(function(){
        alert("Congratulations, you win!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            "PLAYER WON",
            currentMonsterHealth,
            currentPlayerHealth
            );
      reset();
      },1500);
  }
  else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    deadFlag = true
   playerDiedSpriteHandler()
      setTimeout(
        function(){
            alert("You Died!")
      writeToLog(
        LOG_EVENT_GAME_OVER,
        "MONSTER WON",
        currentMonsterHealth,
        currentPlayerHealth
        );
      reset();
        }
      , 1500)
  }
  else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
      alert("You both died!");
      writeToLog(
        LOG_EVENT_GAME_OVER,
        "DRAW",
        currentMonsterHealth,
        currentPlayerHealth
        );
      reset();
  }
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE
    const logEvent = mode === MODE_ATTACK ?
    LOG_EVENT_PLAYER_ATTACK
    :LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if(mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE
    //     logEvent = LOG_EVENT_PLAYER_ATTACK
    // } else if(mode === MODE_STRONG_ATTACK){
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    // }
    const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logEvent,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
    );
  endRound();
}

function attackHandler() {
  monsterAttackSpriteHandler()
  playerAttackSpriteHandler()
  attackMonster(MODE_ATTACK);
}
function strongAttackHandler() {
  playerAttackSpriteHandler()
  monsterAttackSpriteHandler()
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal any more")
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;

    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
        );
    endRound();
}

function printLogHandler() {
    for (let i=0 ; i < 3; i++){
        console.log("------------")
    }

    let j = 0;
    
  outerWhile:  do {
        console.log('outer', j);
      innerFor:  for (let k = 0; k < 5; k++ ){
            if (k === 3) {
                break outerWhile;
            }
            console.log('inner', k);
        }
        j++;
     } while (j < 3);

    

    

    // for (let i = 10; i > 0;){
    //     i--;
    //     console.log(i);
    // }
    // for(let i = 0; i < battleLog.length; i++){
    //     console.log(battleLog[i]);
    // }
let i = 0
    for (const logEntry of battleLog){
        if(!lastLoggedEntry && lastLoggedEntry !== 0|| lastLoggedEntry < i){
            console.log(`#${i}`);
            for (const key in logEntry){
                console.log(`${key} => ${logEntry[key]}`);
            }
            lastLoggedEntry = i;
            
            break;
         }
         i++;
        }

}


attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);


