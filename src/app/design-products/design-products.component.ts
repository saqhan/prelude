import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-products',
  templateUrl: './design-products.component.html',
  styleUrls: ['./design-products.component.css'],
})
export class DesignProductsComponent implements OnInit {
  products = [
    {
      id: 1,
      title: '1. Define the Audience',
      subtitle:
        'Great businesses are built on great experiences. We make those experiences happen.',
      img: 'assets/img/icons/6.png',
    },
    {
      id: 2,
      title: '2. Prototype & Test',
      subtitle:
        'Great businesses are built on great experiences. We make those experiences happen.',
      img: 'assets/img/icons/7.png',
    },
    {
      id: 3,
      title: '3. Detail & Present Findings',
      subtitle:
        'Great businesses are built on great experiences. We make those experiences happen.',
      img: 'assets/img/icons/8.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
