import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor() { }
  private commandSource = new Subject<string>();
  commandHandler = this.commandSource.asObservable();

  sendCommand(command: string) {
    this.commandSource.next(command);
  }

  sendResponse(response: string) {
    console.log(response);  // Handle the response (e.g., display it in the terminal)
  }
}
