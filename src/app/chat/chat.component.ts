import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public model:string = 'Type your query here and start chatting…';
  public isChatNow: boolean;
  public chatList: string[];
  public newMsg: string;

  constructor() { }

  ngOnInit() {
    this.chatList = [];
  }

  public chatNow() {
    this.isChatNow = true;
  }

  public sendNew() {
    this.chatList.push(this.newMsg);
    this.newMsg = '';
  }
}
