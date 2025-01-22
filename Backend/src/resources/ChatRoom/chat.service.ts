import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private messages: { from: string; message: string }[] = [];

  addMessage(from: string, message: string) {
    this.messages.push({ from, message });
  }

  getMessages() {
    return this.messages;
  }
}
