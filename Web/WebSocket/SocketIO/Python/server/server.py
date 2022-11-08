from flask import Flask
from flask_socketio import SocketIO, emit, send
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return "this is http"

@socketio.on('my event')
def event_message(data):
    emit('my event', 'this is event')
    print(data)


# @socketio.on('message', namespace='/test') ws 경로 지정
@socketio.on('message')
def handle_message(data):
    send('this is message')
    print(data)

if __name__ == '__main__':
    socketio.run(app)