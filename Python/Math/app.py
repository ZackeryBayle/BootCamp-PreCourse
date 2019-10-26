from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    h_World = "Hello World!"
    return render_template("index.html", world=h_World)

if __name__ == "__main__":
    app.run()