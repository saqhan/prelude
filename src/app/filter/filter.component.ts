import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  caseBlocks = [
    {
      id: 1,
      title: 'Knowledge About Design',
      img: '../../assets/img/gallery-about-us-5.jpg',
    },
    {
      id: 2,
      title: 'Knowledge About Design',
      img: '../../assets/img/gallery-about-us-6.jpg',
    },
    {
      id: 3,
      title: 'Knowledge About Design',
      img: '../../assets/img/gallery-about-us-7.jpg',
    },
    {
      id: 4,
      title: 'Knowledge About Design',
      img: '../../assets/img/gallery-about-us-8.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
