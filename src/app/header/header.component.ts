import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  menu = [
    {class: 'active', title: 'Home'},
    {class: '', title: 'About'},
    {class: '', title: 'Services'},
    {class: '', title: 'Pricing'},
    {class: '', title: 'Servis'},
    {class: '', title: 'Products'},
    {class: 'material-icons', title: 'shopping_cart'},
    {class: 'material-icons', title: 'search'},
    {class: 'btn-theme', title: 'Get Started'}
  ]

  constructor() {}

  ngOnInit(): void {}
}
