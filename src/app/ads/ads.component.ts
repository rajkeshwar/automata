import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ad-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  public activeAdd: any = {};
  public addName: string;

  public adsData = {
    main: {
      title: 'Explore our Designs <b>Inspired by Arabic Culture</b>',
      img: {
        imgUrl: 'assets/img/ads/jewel.png',
        alt: 'Joyalukas'
      }
    },
    one: {
      p: 'My Favourite',
      h3: 'Freetime Activity',
      buttonList: [
        'Exploring New Cafe',
        'Shopping',
        'Travelling',
        'Making a Statement'
      ]
    },
    two: {
      p: 'I normally',
      h3: 'Wear Jewellery',
      buttonList: [
        'For Weddings',
        'For New Job',
        'For Festivals',
        'For Parties'
      ]
    },
    three: {
      p: 'Wearing the jewellery',
      h3: 'I feel like',
      buttonList: [
        'Making a Statement',
        'Expressing Myself',
        'Confident',
        'Classy & Modern'
      ]
    }
  }
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.addName = String(param.addName);
      this.activeAdd = this.adsData[this.addName];
    })
  }

}
