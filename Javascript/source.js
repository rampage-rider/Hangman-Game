
    var str1=prompt("Enter word");
    var len=str1.length;
    var str2=prompt("enter word with dash");
    var nlives=7;
    var comp;
    var k=0;
    var loc=["images/0.png","images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png"];
    
    
    function changeImage()
    {
    var img = document.getElementById("image");
    
    img.src=loc[k];
    
    }


    function Display(){ 
        document.getElementById("dash_word").innerHTML=str2;
        document.getElementById("lives").innerHTML=nlives;
        changeImage();
               

        
    }

    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }

    Display();
    

    function guess(){

        var flag=0;
        
        while(nlives>0){
            
            var letter=prompt("Enter guess");
            flag=0;

            for(var i=0;i<len;i++){
                if(str1[i]==letter && str2[i]=="_"){
                    str2=str2.replaceAt(i,letter);
                    flag=1;                           
                }
            }

            comp=str1.localeCompare(str2);

            if(comp==0){
                alert("Found the Word!!!");
                Display();
                break;
            }

            if(flag==0){
                alert("wrong guess");
                nlives--;
                k++;
                              
                
            }
            else{
                alert("Correct guess");
                
            }



            Display();

        }

        if(nlives==0){
            alert("GAME OVER,HIT NEW GAME");
        }

        else{
            alert("YOU WON!!!,HIT NEW GAME");
        }
               
    
}

   



