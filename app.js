let board = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];

let splMsg = document.getElementById("spl-msg");
let inputBtn = document.querySelectorAll(".input-btn");
let resetBtn = document.getElementById("reset-btn");
let finish = false;

function reset() {
    let temp = 0;
    for(let i = 0; i < 3; i++) {
       for(let j = 0; j < 3; j++) {
           board[i][j] = -1;
           inputBtn[temp].textContent = "";
           inputBtn[temp++].classList.remove("win");
       }
    }

    splMsg.textContent = "";
    finish = false;
}

function checker() {
    
    //horizontal
    for (let i = 0; i < 3; i++) {
        let x = 0, o = 0;
        for(let j = 0; j < 3; j++) {
            if(board[i][j] == 1) x++;
            else if(board[i][j] == 0) o++;
        }
        
        if(x == 3 || o == 3) {
           
           let k = 0, n = 3;

           if(i == 1) k = 3;
           if(i == 2) k = 6;
           n = k + 3;

           for(; k < n; k++) {
            inputBtn[k].classList.add("win");
           }

           if(x == 3) splMsg.textContent = "x is the winner";
           else splMsg.textContent = "o is the winner";
           finish = true;
           return;
        }
    }

    //vertical
    for (let j = 0; j < 3; j++) {
        let x = 0, o = 0;
        for(let i = 0; i < 3; i++) {
            if(board[i][j] == 1) x++;
            else if(board[i][j] == 0) o++;
        }
        
        
        if(x == 3 || o == 3) {
           
           let k = j;
           n = k + (3*2)+1;

           for(; k < n; k += 3) {
            inputBtn[k].classList.add("win");
           }

           if(x == 3) splMsg.textContent = "x is the winner";
           else splMsg.textContent = "o is the winner";
           finish = true;
           return;

        }
    }

    //left diagonal
    let r = 0, c = 0, x = 0, o = 0;

    while(r < 3 && c < 3) {
        if(board[r][c] == 1) x++;
        else if(board[r][c] == 0) o++;
        r++;
        c++;
    }

    if(x == 3 || o == 3) {
        
        for(let k = 0; k < 9; k += 4) inputBtn[k].classList.add("win");

        if(x == 3) splMsg.textContent = "x is the winner";
        else splMsg.textContent = "o is the winner";
        finish = true;
        return;
    }

    //right diagonal
    r = 0; c = 2; x = 0; o = 0;

    while(r < 3 && c >= 0) {
        if(board[r][c] == 1) x++;
        else if(board[r][c] == 0) o++;
        r++;
        c--;
    }

    if(x == 3 || o == 3) {
        
        for(let k = 2; k < 7; k += 2) inputBtn[k].classList.add("win");

        if(x == 3) splMsg.textContent = "x is the winner";
        else splMsg.textContent = "o is the winner";
        finish = true; 
        return;
    }    
   
    //tie checker

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[i][j] == -1) return;
        }
    }
    
    splMsg.textContent = "it's a tie";
    finish = true;

}

let turn = true;

function play() {
    
        // can win horizontal
        for(let i = 0; i < 3; i++) {
            let o = 0,x = 0;
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == 0) o++;
                else if(board[i][j] == 1) x++;
            }

            if(o == 2 && x == 0) {
                for(let j = 0; j < 3; j++) {
                    if(board[i][j] == -1) {
                        board[i][j] = 0;
                        if(i == 0) {
                            inputBtn[j].textContent = "o";
                            inputBtn[j].classList.add("o");
                        } else if(i == 1) {
                            inputBtn[j+3].textContent = "o";
                            inputBtn[j+3].classList.add("o");
                        } else {
                            inputBtn[j+6].textContent = "o";
                            inputBtn[j+6].classList.add("o");
                        }
                    }
                }

               turn = true;
            }

            if(turn) return;
        }
        
        //can win vertical

        for(let j = 0; j < 3; j++) {
            let o = 0, x = 0;
            for(let i = 0; i < 3; i++) {
               if(board[i][j] == 0) o++;
               else if(board[i][j] == 1) x++;
            }

            if(o == 2 && x == 0) {
                for(let i = 0; i < 3; i++) {
                    if(board[i][j] == -1) {
                        board[i][j] = 0;
                        if(i == 0) {
                            inputBtn[j].textContent = "o";
                            inputBtn[j].classList.add("o");
                        } else if(i == 1) {
                            inputBtn[j+3].textContent = "o";
                            inputBtn[j+3].classList.add("o");
                        } else if(i == 2) {
                            inputBtn[j+6].textContent = "o";
                            inputBtn[j+6].classList.add("o");
                        }
                    }
                }

               turn = true;
               if(turn) return;
            }

        }


        //can win diagonal
        
        let r = 0, c = 0, x = 0, o = 0;

        while(r < 3 && c < 3) {
             if(board[r][c] == 0) o++;
             else if(board[r][c] == 1) x++;
             r++;
             c++;
        }


        if(o == 2 && x == 0) {
            r = 0; c = 0;
            while(r < 3 && c < 3) {
                if(board[r][c] == -1) {
                    board[r][c] = 0;
                    if(r == 0) {
                        inputBtn[r].textContent = "o";
                        inputBtn[r].classList.add("o");
                    } else if(r == 1) {
                        inputBtn[4].textContent = "o";
                        inputBtn[4].classList.add("o");
                    } else {
                        inputBtn[8].textContent = "o";
                        inputBtn[8].classList.add("o");
                    }
                    turn = true;
                    if(turn) return;

                }
                r++;
                c++;
            }
        }


        r = 0; c = 2; x = 0; o = 0;

        while(r < 3 && c >= 0) {
            if(board[r][c] == 0) o++;
            else if(board[r][c] == 1) x++;
            r++;
            c--;
        }

        if(o == 2 && x == 0) {
            r = 0; c = 2;
            while(r < 3 && c >= 0) {
                if(board[r][c] == -1) {
                    board[r][c] = 0;
                    if(r == 0) {
                        inputBtn[2].textContent = "o";
                        inputBtn[2].classList.add("o");
                    } else if(r == 1) {
                        inputBtn[4].textContent = "o";
                        inputBtn[4].classList.add("o");
                    } else {
                        inputBtn[6].textContent = "o";
                        inputBtn[6].classList.add("o");
                    }
                    turn = true;
                    if(turn) return;
                }
                r++;
                c--;
            }
        }
        
       

        //end of can win

        // can block horizontal
        for(let i = 0; i < 3; i++) {
            let x = 0, neg = 0;
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == 1) x++;
                else if(board[i][j] == -1) neg++;
            }

            if(x == 2 && neg == 1) {
                for(let j = 0; j < 3; j++) {
                    if(board[i][j] == -1) {
                        board[i][j] = 0;
                        if(i == 0) {
                            inputBtn[j].textContent = "o";
                            inputBtn[j].classList.add("o");
                        } else if(i == 1) {
                            inputBtn[j+3].textContent = "o";
                            inputBtn[j+3].classList.add("o");
                        } else {
                            inputBtn[j+6].textContent = "o";
                            inputBtn[j+6].classList.add("o");
                        }
                    }
                }

               turn = true;
            }

            if(turn) return;

        }
        
        //can block vertical

        for(let j = 0; j < 3; j++) {
            let x = 0,neg = 0;
            for(let i = 0; i < 3; i++) {
                if(board[i][j] == 1) x++;
                else if(board[i][j] == -1) neg++; 
            }

            if(x == 2 && neg == 1) {
                for(let i = 0; i < 3; i++) {
                    if(board[i][j] == -1) {
                        board[i][j] = 0;
                        if(i == 0) {
                            inputBtn[j].textContent = "o";
                            inputBtn[j].classList.add("o");
                        } else if(i == 1) {
                            inputBtn[j+3].textContent = "o";
                            inputBtn[j+3].classList.add("o");
                        } else if(i == 2){
                            inputBtn[j+6].textContent = "o";
                            inputBtn[j+6].classList.add("o");
                        }
                    }
                }

               turn = true;
               if(turn) return;

            }

        }


        //can block diagonal
        
        r = 0; c = 0; x = 0;
        o = 0; 

        while(r < 3 && c < 3) {
             if(board[r][c] == 1) x++;
             else if(board[r][c] == -1) o++;
             r++;
             c++;
        }


        if(x == 2 && o == 1) {
            r = 0; c = 0;
            while(r < 3 && c < 3) {
                if(board[r][c] == -1) {
                    board[r][c] = 0;
                    if(r == 0) {
                        inputBtn[r].textContent = "o";
                        inputBtn[r].classList.add("o");
                    } else if(r == 1) {
                        inputBtn[4].textContent = "o";
                        inputBtn[4].classList.add("o");
                    } else {
                        inputBtn[8].textContent = "o";
                        inputBtn[8].classList.add("o");
                    }
                    turn = true;
                    if(turn) return;
                    
                }
                r++;
                c++;
            }
        }


        r = 0; c = 2; x = 0; o = 0;

        while(r < 3 && c >= 0) {
            if(board[r][c] == 1) x++;
            else if(board[r][c] == -1) o++;
            r++;
            c--;
        }

        if(x == 2 && o == 1) {
            r = 0; c = 2;
            while(r < 3 && c >= 0) {
                if(board[r][c] == -1) {
                    board[r][c] = 0;
                    if(r == 0) {
                        inputBtn[2].textContent = "o";
                        inputBtn[2].classList.add("o");
                    } else if(r == 1) {
                        inputBtn[4].textContent = "o";
                        inputBtn[4].classList.add("o");
                    } else {
                        inputBtn[6].textContent = "o";
                        inputBtn[6].classList.add("o");
                    }
                    turn = true;
                    if(turn) return;

                }
                r++;
                c--;
            }
        }
        

        //end of can block

        //random idx
         do {
            r = Math.floor(Math.random() * (3 - 0) + 0);
            c = Math.floor(Math.random() * (3 - 0) + 0);
         } while (board[r][c] != -1);
         
         board[r][c] = 0;

         if(r == 0) {
            inputBtn[c].textContent = "o";
            inputBtn[c].classList.add("o");
         } else if(r == 1) {
            inputBtn[c+3].textContent = "o";
            inputBtn[c+3].classList.add("o");
         } else {
            inputBtn[c+6].textContent = "o";
            inputBtn[c+6].classList.add("o");
         }

         turn = true;
}

function print() {
    for(let i=0; i < 3; i++) {
        console.log([...board[i]]);
        
    }
}

function canPlay() {
    checker();
    if(!finish) {
        turn = false;
        play();
        checker();
    }
}



resetBtn.addEventListener("click",reset);
inputBtn[0].addEventListener("click",() => {
    if(board[0][0] == -1 && !finish) {
        inputBtn[0].classList.add("x");
        inputBtn[0].textContent = "x";
        board[0][0] = 1;
        canPlay();
    }
});

inputBtn[1].addEventListener("click",() => {
    if(board[0][1] == -1 && !finish) {
        inputBtn[1].classList.add("x");
        inputBtn[1].textContent = "x";
        board[0][1] = 1;
        canPlay();
    }
});

inputBtn[2].addEventListener("click",() => {
    if(board[0][2] == -1 && !finish) {
        inputBtn[2].classList.add("x");
        inputBtn[2].textContent = "x";
        board[0][2] = 1;
        canPlay();
    }
});

inputBtn[3].addEventListener("click",() => {
    if(board[1][0] == -1 && !finish) {
        inputBtn[3].classList.add("x");
        inputBtn[3].textContent = "x";
        board[1][0] = 1;
        canPlay();
    }
});

inputBtn[4].addEventListener("click",() => {
    if(board[1][1] == -1 && !finish) {
        inputBtn[4].classList.add("x");
        inputBtn[4].textContent = "x";
        board[1][1] = 1;
        canPlay();
    }
});

inputBtn[5].addEventListener("click",() => {
    if(board[1][2] == -1 && !finish) {
        inputBtn[5].classList.add("x");
        inputBtn[5].textContent = "x";
        board[1][2] = 1;
        canPlay();
    }
});

inputBtn[6].addEventListener("click",() => {
    if(board[2][0] == -1 && !finish) {
        inputBtn[6].classList.add("x");
        inputBtn[6].textContent = "x";
        board[2][0] = 1;
        canPlay();
    }
});

inputBtn[7].addEventListener("click",() => {
    if(board[2][1] == -1 && !finish) {
        inputBtn[7].classList.add("x");
        inputBtn[7].textContent = "x";
        board[2][1] = 1;
        canPlay();

    }
});

inputBtn[8].addEventListener("click",() => {
    if(board[2][2] == -1 && !finish) {
        inputBtn[8].classList.add("x");
        inputBtn[8].textContent = "x";
        board[2][2] = 1;
        canPlay();
    }
});

