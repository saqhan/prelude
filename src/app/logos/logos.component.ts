import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css'],
})
export class LogosComponent implements OnInit {
  logos = [
    { id: 1, img: '../../assets/img/logos/1.png' },
    { id: 2, img: '../../assets/img/logos/2.png' },
    { id: 3, img: '../../assets/img/logos/3.png' },
    { id: 4, img: '../../assets/img/logos/4.png' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
