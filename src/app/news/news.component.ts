import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news = [
    {
      id: 1,
      title:
        'Tips for creating a digital product that can make you a tidy profit',
      subtitle:
        'It will continue many of the best deals from Black Friday and Cyber Monday',
      user: 'Earlene Monna',
      img: 'assets/img/avatar-3.jpg',
      date: '20 September 2020 ',
    },
    {
      id: 2,
      title:
        'Tips for creating a digital product that can make you a tidy profit',
      subtitle:
        'It will continue many of the best deals from Black Friday and Cyber Monday',
      user: 'Stella Smith',
      img: 'assets/img/avatar-2.jpg',
      date: '27 August 2020 ',
    },
    {
      id: 3,
      title:
        'Tips for creating a digital product that can make you a tidy profit',
      subtitle:
        'It will continue many of the best deals from Black Friday and Cyber Monday',
      user: 'Frenki Black',
      img: 'assets/img/avatar-1.jpg',
      date: '17 August 2019 ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
