from flask import Flask
from flask import render_template 
from flask import request, url_for

app = Flask(__name__)

word="none"
dashed="none"
guess="none"
life = 0

app.static_folder = 'static'

@app.route("/")
def get_details():
    return render_template('get_details.html')

    
@app.route("/details", methods=["POST"])
def details():
    global word
    global dashed
    global life
    
    word = request.form.get("word")
    dashed = request.form.get("dashed")
    life= request.form.get("life")
    life=int(life)

    if not word or not dashed:
        return "failure, enter word and dashed word"
    else:
         return render_template("guess.html",word=word,dashed=dashed,life=life)
        

@app.route("/guess", methods=["POST"])
def guess():
    global guess
    global life
    guess= request.form.get("guess")
    return game()

def game():
    global word
    global dashed
    global guess
    global life
    l=len(word)
    flag=0

    for i in range(l):
        if word[i]==guess:
            dashed = dashed[:i] + guess + dashed[i+1:]
            flag=1
            if word == dashed:
                 return render_template("success.html",word=word)
    if flag==0:
        life=life-1
        if life==0:
            return render_template("failure.html",word=word)

                
           
            
    return render_template("guess.html",word=word,dashed=dashed,life=life)



if __name__ == "__main__":
    app.run(debug=True)   