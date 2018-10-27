import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ad-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class ChatComponent implements OnInit {

  @Input() activePane = 'left';
  
  public isLeftVisible:boolean;
  public model:string;
  public placeholder:string = 'Type your query here and start chatting…';
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
