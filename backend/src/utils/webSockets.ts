


class WebSockets {
  users : any[] = [];
  connection(client: any) {
    // event fired when the chat room is disconnected
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== client.id);
    });
    // add identity of user mapped to the socket id
    client.on("identity", (userId: number) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });
    });
    // subscribe person to chat & other user as well
    client.on("subscribe", (room: any, otherUserId: number) => {
      this.subscribeOtherUser(room, otherUserId);
      client.join(room);
    });
    // mute a chat room
    client.on("unsubscribe", (room: any) => {
      client.leave(room);
    });
  }

  subscribeOtherUser(room: any, otherUserId: number) {
    const userSockets = this.users.filter(
      (user) => user.userId === otherUserId
    );
    userSockets.map((userInfo) => {
      const socketConn= global.io.sockets.connected(userInfo.socketId);
      if (socketConn) {
        socketConn.join(room);
      }
    });
  }
}
