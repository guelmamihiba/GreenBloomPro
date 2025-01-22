import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins (update for production)
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users = new Map<string, string>(); // Map of socket IDs to usernames

  // Handle user connection
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Handle user disconnection
  handleDisconnect(client: Socket) {
    const username = this.users.get(client.id);
    this.users.delete(client.id);
    if (username) {
      this.server.emit('userDisconnected', username);
    }
    console.log(`Client disconnected: ${client.id}`);
  }

  // Handle user joining the chat
  @SubscribeMessage('joinChat')
  handleJoinChat(
    @MessageBody() username: string,
    @ConnectedSocket() client: Socket,
  ) {
    this.users.set(client.id, username);
    this.server.emit('userJoined', username);
  }

  // Handle sending and broadcasting messages
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: { from: string; message: string }) {
    this.server.emit('receiveMessage', data);
  }
}
