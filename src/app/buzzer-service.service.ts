import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class BuzzerService {

  private socket: io.Socket;


  constructor() {

      this.socket = io('http://localhost:3000');

   }

   // EMITTER
  sendMessage(msg: string) {
    this.socket.emit("CH01", "abu", "i am abu");
  }


}
