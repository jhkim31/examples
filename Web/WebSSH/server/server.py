import paramiko
import tornado.websocket
import tornado.web
import tornado.ioloop
import time

class SendWebSocket(tornado.websocket.WebSocketHandler):
    async def open(self):
        self.msgQue = []
        self.client = paramiko.SSHClient()
        self.client.load_system_host_keys()
        self.client.connect("hostname", username="username", password="password")
        self.ssh = self.client.invoke_shell(term="xterm-256color")
        print("SSH Session Open")

        time.sleep(1)
        self.write_message(self.ssh.recv(10000))

    def on_close(self):
        print("SSH Session Closed")

    def check_origin(self, origin):
        return True

    def on_message(self, message):
        self.ssh.send(message)
        time.sleep(0.1)
        if self.ssh.recv_ready():
            self.write_message(self.ssh.recv(10000))


app = tornado.web.Application([(r"/ssh", SendWebSocket)])

if __name__ == "__main__":
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
