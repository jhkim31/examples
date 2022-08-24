import tornado.websocket
import tornado.web
import tornado.ioloop

class SendWebSocket(tornado.websocket.WebSocketHandler):
    def open(self):
        print("Session Open")

    def on_close(self):
        print("Session Closed")

    def check_origin(self, origin):
        return True

    def on_message(self, message):
        print(message)
        self.write_message(message)


app = tornado.web.Application([(r"/ws", SendWebSocket)])

if __name__ == "__main__":
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
