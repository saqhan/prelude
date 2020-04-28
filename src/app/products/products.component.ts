import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  blocks = [
    {
      id: 1,
      name: 'Photography & Video',
      info: 'We work with you to get your brand out there and drive traffic & enquiries to help the sales team convert',
      img: 'assets/img/icons/1.png',
    },
    {
      id: 2,
      name: 'Branding & Positioning',
      info: 'We work with you to get your brand out there and drive traffic & enquiries to help the sales team convert',
      img: 'assets/img/icons/2.png',
    },
    {
      id: 3,
      name: 'User Research & Design',
      info: 'We work with you to get your brand out there and drive traffic & enquiries to help the sales team convert',
      img: 'assets/img/icons/3.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
