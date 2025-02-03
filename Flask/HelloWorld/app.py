from flask import Flask, render_template, request

app=Flask(__name__)

# @app.route("/")
# def index():
#     return render_template("index.html")
# def index():
#     # if("name" in request.args):
#     #     name=request.args.get("name")
#     # else:
#     #     name="World"
#     # return render_template("index.html",placeholder=name)
#     name=request.args.get("name","World")
#     return render_template("index.html",name=name)


# @app.route("/greet",methods=["GET"])
# def greet():
#     name=request.args.get("name","world")
#     return render_template("greet.html",name=name)
# @app.route("/greet",methods=["POST"])
# def greet():
#     name=request.form.get("name","world")
#     return render_template("greet.html",name=name)


@app.route("/",methods=["GET","POST"])
def index():
    if request.method=="POST":
        name=request.form.get("name")
        # if len(name)==0:
        #     name="World"
        return render_template("greet.html",name=name)
    return render_template("index.html")
