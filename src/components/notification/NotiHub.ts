import { Noti, NotiListener } from './types';
import { v4 as uuidv4 } from 'uuid';

class AkNotiHub {
  private static _instance: AkNotiHub;
  private subscribers: NotiListener[];
  private messages: Noti[];

  private constructor() {
    this.subscribers = [];
    this.messages = [];
  }

  public static getInstance() {
    if (!AkNotiHub._instance) {
      AkNotiHub._instance = new AkNotiHub();
    }
    return AkNotiHub._instance;
  }

  sendMessage(msg: Noti) {
    const id: string = uuidv4();
    this.messages = [...this.messages, { ...msg, id }];
    this.subscribers.map((s: NotiListener) => s.callback(this.messages));
    setTimeout(() => {
      const list: Noti[] = this.messages.filter((n: Noti) => n.id !== id);
      this.messages = list;
      this.subscribers.map((s: NotiListener) => s.callback(this.messages));
    }, 3000);
  }

  subscribe(callback: (list: Noti[]) => void): string {
    const id: string = `${new Date().getMilliseconds()}`;
    this.subscribers.push({ id, callback });
    return id;
  }

  unsubscribe(id: string): void {
    this.subscribers = this.subscribers.filter(
      (s: NotiListener) => s.id !== id
    );
  }
}

export default AkNotiHub;
