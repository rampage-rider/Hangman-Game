str1=("alphabet");
str2=("--------");
print("HANGMAN")
print("Word has 8 letters");

chance=5;
flag=0;
while chance>0:
    print(str2);
    print("You have",chance,"chances left");

    print("1.Guess Word \n2.Guess letter");
    n=input("Enter option: ")
    n=int(n)
    if n==1:
        word=input("Enter word: ");
        word=str(word);
        print(word);
        if word==str1 :
            flag=1
            break;
        else:
            chance=chance-1;
            print("Incorrect guess");
    if n==2:
        x=input("Enter Letter: ");
        h=0;
        for i in range(0,len(str1)):
            if str1[i]==x:
                h=1
                str2 = str2[:i] + x + str2[i+1:]
        if h==0:
            chance=chance-1;



if(flag==1):
    print("YOU WON,GAMEOVER");
else:
    print("YOU LOST,GAMEOVER");
