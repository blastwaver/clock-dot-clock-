
window.onload = function() {
    let button = document.getElementById('button');
    button.addEventListener('click', print);
    
     function print() {
           window.print();
    }

}
   
document.addEventListener("DOMContentLoaded", function() {
    
    let body = document.querySelector('body');
    
    //ready for section (line)
    let firstSection = document.createElement('section');
    let secondSection = document.createElement('section');
    let buttonSection = document.createElement('section');
    firstSection.setAttribute('class','wrapper first');
    secondSection.setAttribute('class','wrapper second');
    buttonSection.setAttribute('claas','wrapper third');
    body.appendChild(firstSection);
    body.appendChild(secondSection);
    body.appendChild(buttonSection);
 
    //2d array for each line (still 1d until go inside makeLine Function )
    let firstChars = [];
    let secondChars =[];
    let buttonChars = [];
    let buttonColor = Number;

   //this function make sectionline and dives and 30 divs in a section and make 25 dives in each div (needs a section element and an array)
   function makeLine(numOfSection,array) {
        for(i =0; i < 30; i++ ){
//        console.log(array);
        let char = document.createElement('div');
        numOfSection.appendChild(char);
        char.className = "digit";
        array[i] = [];
            for(j=0; j < 35; j++) {
                let dot = document.createElement('div');
                char.appendChild(dot);
                dot.className = "dot";
                array[i][j] = dot;
            }
        }
    }
    
    function makeButton() {
        let button = document.createElement('div');
        buttonSection.appendChild(button);
        button.className = "button";
        buttonSection.setAttribute('id','button');
        for(it=0; it < 319; it++) {
                let dot = document.createElement('div');
                button.appendChild(dot);
                dot.className = "dot1";
                buttonChars[it] = dot;
        }
        
    }
    //  making first line of dives
    makeLine(firstSection,firstChars);
    //  making second line of dives
    makeLine(secondSection,secondChars);
    
    makeButton();
    
    // combinations of divs for charaters
    let T = [0,1,2,3,4,7,12,17,22,27,32];
    let h = [5,10,15,16,17,18,19,20,24,25,29,30,34];
    let e = [10,11,12,13,14,15,19,20,21,22,23,24,25,30,31,32,33,34];
    let d = [9,14,15,16,17,18,19,20,24,25,29,30,31,32,33,34];
    let a = [10,11,12,13,14,19,20,21,22,23,24,25,29,30,31,32,33,34];
    let y = [10,14,16,18,22,27,32];
    let o = [10,11,12,13,14,15,19,20,24,25,29,30,31,32,33,34];
    let f = [11,12,13,14,16,20,21,22,23,24,26,31];
    let w = [10,14,15,19,20,22,24,25,26,28,29,30,34];
    let k = [5,10,12,13,14,15,16,20,21,22,23,24,25,29,30,34];
    let colon = [12,27];
    let M = [0,4,5,6,8,9,10,12,14,15,19,20,24,25,29,30,34];
    let m = [10,11,12,13,14,15,17,19,20,22,24,25,27,29,30,32,34];
    let n = [10,11,12,13,14,15,19,20,24,25,29,30,34]; 
    let u = [10,14,15,19,20,24,25,29,30,31,32,33,34];
    let W = [0,4,5,9,10,14,15,17,19,20,22,24,25,26,28,29,30,34];
    let F = [0,1,2,3,4,5,10,11,12,13,14,15,20,25,30];
    let r = [5,10,15,17,18,19,20,21,24,25,30];
    let ii = [7,17,22,27,32];
    let S = [0,1,2,3,4,5,10,15,16,17,18,19,24,29,30,31,32,33,34];
    let t = [6,11,15,16,17,18,19,21,26,31,32,33,34];
    let s = [10,11,12,13,14,15,20,21,22,23,24,29,30,31,32,33,34];
    let A = [1,2,3,5,9,10,14,15,16,17,18,19,20,24,25,29,30,34];
    let P = [0,1,2,3,5,9,10,14,15,16,17,18,20,25,30];
    let one = [2,6,7,12,17,22,27,30,31,32,33,34];
    let two = [0,1,2,3,4,9,14,15,16,17,18,19,20,25,30,31,32,33,34];
    let three = [0,1,2,3,4,9,14,15,16,17,18,19,24,29,30,31,32,33,34];
    let four = [0,3,5,8,10,13,15,18,20,21,22,23,24,28,33];
    let five = [0,1,2,3,4,5,10,15,16,17,18,19,24,29,30,31,32,33,34];
    let six = [0,1,2,3,4,5,10,15,16,17,18,19,20,24,25,29,30,31,32,33,34];
    let seven = [0,1,2,3,4,9,14,19,24,29,34];
    let eight = [0,1,2,3,4,5,9,10,14,15,16,17,18,19,20,24,25,29,30,31,32,33,34];
    let nine = [0,1,2,3,4,5,9,10,14,15,16,17,18,19,24,29,30,31,32,33,34];
    let zero = [0,1,2,3,4,5,9,10,14,15,19,20,24,25,29,30,31,32,33,34];
    
    //this function assign the character(need lineNum(section),div's postion and charater)
    function change (lineNum,position, character) {
        let array = [];
        switch(character) {
            case "T": array = T; break; case "h": array = h; break; case "e": array = e; break;
            case "d": array = d; break; case "a": array = a; break; case "y": array = y; break; 
            case "o": array = o; break; case "f": array = f; break; case "w": array = w; break;
            case "k": array = k; break; case ":": array = colon; break; case "M": array = M; break;
            case "n": array = n; break; case "W": array = W; break; case "F": array = F; break;
            case "r": array = r; break; case "i": array = ii; break; case "S": array = S; break;
            case "t": array = t; break; case "s": array = s; break; case "A": array = A; break;
            case "P": array = P; break; case "m": array = m; break; case "1": array = one; break;
            case "u": array = u; break; case "2": array = two; break; case "3": array = three; break; 
            case "4": array = four; break; case "5": array = five; break; case "6": array = six; break; 
            case "7": array = seven; break; case "8": array = eight; break; case "9": array = nine; break; 
            case "0": array = zero; break;
        }
        
        if(lineNum == 1) {
            for(i = 0; i < array.length; i++ ) {
                if(position ==18 || position ==19||position ==20)
                    firstChars[position][array[i]].className = "black";
                else
                    firstChars[position][array[i]].className = "blue";
            }
        } else {
            for(i = 0; i < array.length; i++ ) {
                if(position ==12 || position ==13||position ==20 || position ==21|| position ==25 || position ==26) 
                    secondChars[position][array[i]].className = "red";
                else if(position ==15 ||position ==16)
                    secondChars[position][array[i]].className = "green";
                else
                   secondChars[position][array[i]].className = "blue"; 
            }       
        }

    }
    
    
    function digitClear(lineNum, position) {
        if(lineNum == 1) {
            for(i = 0; i < 35; i++ ) {
                firstChars[position][i].className = "dot";
            }
        } else {
            for(i = 0; i < 35; i++ ) {
                secondChars[position][i].className = "dot";
            }
        }
    }
    
    
    let printP = [60,61,62,63,64,89,93,118,122,147,148,149,150,151,176,205,234];
    let printR = [66,67,68,69,70,95,99,124,128,153,154,155,156,157,182,211,240,185,215,244];
    let printI = [72,73,74,102,131,160,189,218,247,246,248];
    let printN = [76,105,134,163,192,221,250,106,136,165,194,225,224,254,196,167,138,109,80];
    let printT = [81,82,83,84,85,112,141,170,199,228,257];
    let borderT = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    let borderL = [0,29,58,87,116,145,174,203,232,261,290];
    let borderR = [28,57,86,115,144,173,202,231,260,289,318];
    let borderB = [290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318];
    
    function buttonChange(array) {
//        console.log(array.length);
        for(i=0; i < array.length ; i++){
            if(buttonColor%5 == 0) {
                buttonChars[array[i]].className = "red";
            } else if(buttonColor%3 == 0) {
                buttonChars[array[i]].className = "green";
            } else {
                buttonChars[array[i]].className = "yellow";
            }
        }  
    }
    
    
    function borderChange(array) {
        for(i=0; i < array.length ; i++){
            if(buttonColor%2==0) {
                if(array[i]%2==0) {
                    buttonChars[array[i]].className = "red";  
                }
            } else {
                 if(array[i]%2!=0) {
                    buttonChars[array[i]].className = "red";
                 }      
            }    
        }
    }
    
    function clearButton() {
        for(i=0; i < 319 ; i++){
                buttonChars[i].className = "dot";          
        }
    }
    
     setInterval(function() {
        clearButton();
        buttonChange(printP);
        buttonChange(printR);
        buttonChange(printI);
        buttonChange(printN);
        buttonChange(printT);
        borderChange(borderT); 
        borderChange(borderL); 
        borderChange(borderR); 
        borderChange(borderB); 
    }, 500);
    
    
    //defulat characters
    //the
    change(1,0, "T"); change(1,1, "h"); change(1,2, "e");
    //day
    change(1,4, "d"); change(1,5, "a"); change(1,6, "y");
    //of
    change(1,8, "o"); change(1,9, "f");
    //week
    change(1,11, "w");change(1,12, "e"); change(1,13, "e"); change(1,14, "k");
    //colon
    change(1,16, ":");
    //mon
    change(1,18, "M"); change(1,19, "o"); change(1,20, "n");
    //the
    change(2,0, "T"); change(2,1, "h"); change(2,2, "e");
    //time
    change(2,4, "T"); change(2,5, "i"); change(2,6, "m"); change(2,7, "e");
    //is
    change(2,9, "i"); change(2,10, "s");
    //00
    change(2,12, "0"); change(2,13, "0");
    //AM
    change(2,15, "A"); change(2,16, "M");
    //colon
    change(2,18, ":");
    //00
    change(2,20, "0"); change(2,21, "0");
    //colon
    change(2,23, ":");
    //00
    change(2,25, "0"); change(2,26, "0");
    
    
   
    function timeOperate() {
        let today = new Date();
        let day = today.getDay();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        buttonColor = seconds;
//        console.log(day);
        // day settting
        switch(day) {
            case 1: change(1,18, "M"); change(1,19, "o"); change(1,20, "n"); break; 
            case 2: change(1,18, "T"); change(1,19, "u"); change(1,20, "e"); break; 
            case 3: change(1,18, "W"); change(1,19, "e"); change(1,20, "d"); break; 
            case 4: change(1,18, "T"); change(1,19, "h"); change(1,20, "u"); break; 
            case 5: change(1,18, "F"); change(1,19, "r"); change(1,20, "i"); break; 
            case 6: change(1,18, "S"); change(1,19, "a"); change(1,20, "t"); break; 
            case 0: change(1,18, "S"); change(1,19, "u"); change(1,20, "n"); break;
        }
        //hours setting
        hours >= 12 ? change(2,15, "P"): change(2,15, "A");
        let dividedTime = hours % 12;
        
        if(dividedTime >= 10) {
            change(2,12, dividedTime.toString().charAt(0));
            change(2,13, dividedTime.toString().charAt(1)); 
        } else {
            change(2,12,"0");
            change(2,13,dividedTime.toString().charAt(0));
        }
        
        //minutes setting
        if(minutes >= 10) {
            change(2,20, minutes.toString().charAt(0));
            change(2,21, minutes.toString().charAt(1)); 
        } else {
            change(2,20,"0");
            change(2,21,minutes.toString().charAt(0));
        }
        
        //seconds
        if(seconds >= 10) {
            change(2,25, seconds.toString().charAt(0));
            change(2,26, seconds.toString().charAt(1)); 
        } else {
            change(2,25,"0");
            change(2,26,seconds.toString().charAt(0));
        }
        
    }
    
    // clears previouse charcters before setting new characters(only for day and time)
    function clearAll(){
        digitClear(1,18);digitClear(1,19);digitClear(1,20);digitClear(2,12);digitClear(2,13);
        digitClear(2,15);digitClear(2,20);digitClear(2,21);digitClear(2,25);digitClear(2,26);
    }
    
    //operating the time changes
    setInterval(function() {
        clearAll();
        timeOperate(); 
    }, 500);
    
});


   