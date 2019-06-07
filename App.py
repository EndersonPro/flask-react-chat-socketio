from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = "SECRET!"

socketio = SocketIO(app)


@socketio.on('connect')
def handle_connect():
    print('connect success')


@socketio.on('new message')
def handle_new_message(message):
    print(message)


if __name__ == '__main__':
    socketio.run(app)
