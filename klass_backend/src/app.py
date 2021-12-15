from flask import Flask, request, make_response

app = Flask(__name__)

@app.route("/<path:path>")
def main():
    return("main")

@app.route("/login", methods=["OPTIONS", "GET"])
def login():
    if request.method == "OPTIONS":  # CORS preflight
        return _build_cors_prelight_response()


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