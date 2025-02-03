from flask import Flask, render_template, request, redirect

app=Flask(__name__)

SPORTS=["BasketBall","Soccer","Ultimate Frisbee"]
REGISTRANTS={}


@app.route("/")
def index():
    return render_template("index.html",sports=SPORTS)

@app.route("/register",methods=["POST"])
def register():
    # Validation
    if not request.form.get("name"):
        return render_template("error.html",message="Name is required")
    for sport in request.form.getlist("sports"):
        if sport not in SPORTS:
            return render_template("error.html",message="Invalid sport")
    name=request.form.get("name")
    sport=request.form.getlist("sports")
    if(len(sport)==0):
        return render_template("error.html",message="Select at least one sport")
    # Remember registrant
    REGISTRANTS[name]=sport
    # Confirm registration
    return redirect("/registrants")


@app.route("/registrants")
def registrants():
    return render_template("registrants.html",registrants=REGISTRANTS)


