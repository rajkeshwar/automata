import { Component, OnInit, Input } from '@angular/core';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';

type PaneType = 'left' | 'right';

@Component({
  selector: 'ad-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class SlidePanelComponent implements OnInit {

  @Input() activePane: PaneType = 'left';

  constructor() { }

  ngOnInit() {
  }

}