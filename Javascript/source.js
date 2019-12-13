
    var str1=prompt("Enter word");
    var len=str1.length;
    var str2=prompt("enter word with dash");
    var nlives=8;
    var comp;
    

    function Display(){ 
        document.getElementById("dash_word").innerHTML=str2;
        document.getElementById("lives").innerHTML=nlives;
        
    }

    Display();

    function guess(){

        var flag=0;
        
        while(nlives>0){
            
            var letter=prompt("Enter guess");
            flag=0;

            for(var i=0;i<len;i++){
                if(str1[i]==letter && str2[i]=="_"){
                    str2[i]=letter;
                    flag=1;                           
                }
            }

            comp=str1.localeCompare(str2);

            if(comp==0){
                alert("Found the Word!!!");
                break;
            }

            if(flag==0){
                alert("wrong guess");
                nlives--;
            }
            else{
                alert("Correct guess");
                
            }



            Display();

        }

        if(nlives==0){
            alert("GAME OVER,RELOAD PAGE");
        }

        else{
            alert("YOU WON!!!");
        }
               
    
}

   



