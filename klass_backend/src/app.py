from flask import Flask, request, make_response

app = Flask(__name__)

@app.route("/<path:path>")
def main():
    return("main")

@app.route("/login", methods=["OPTIONS", "GET"])
def login():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()
    else:
        header = request.headers
        username = header.get('username', '')
        password = header.get('password', '')

        if username == "test":
            if password == "123":
                return _corsify_actual_response(make_response('{login: "successful"}', 200))
            else:
                return _corsify_actual_response(make_response('{login: "password incorrect"}', 401))
        else:
            return _corsify_actual_response(make_response('{login: "user not found"}', 401))

@app.route("/signup", methods=["OPTIONS", "POST"])
def signup():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()
    else:
        header = request.headers
        username = header.get('username', '')
        fname = header.get('firstname', '')
        sname = header.get('surname', '')
        password = header.get('password', '')

        success = True
        if success:
            return _corsify_actual_response(make_response('{signedup: "successful"}', 200))
        else:
            return _corsify_actual_response(make_response('{signedup: "unsuccessful"}', 401))

@app.route("/join", methods=["OPTIONS", "POST"])
def join():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()
    else:
        pass

@app.route("/create", methods=["OPTIONS", "POST"])
def create():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()
    else:
        pass

@app.route("/getdetails", methods=["OPTIONS", "GET"])
def getdetails():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()
    else:
        pass

@app.route("/getallgroups", methods=["OPTIONS", "GET"])
def getallgroups():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()
    else:
        pass


def _build_cors_prelight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)