import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  cartStat = [
    {
      id: 1,
      count: 80,
      countType: '+',
      title: 'Launched startups',
      subtitle: 'We define behaviour, looks and personality for your product.',
    },
    {
      id: 2,
      count: 1.2,
      countType: 'k',
      title: 'Completed projects',
      subtitle: 'We define behaviour, looks and personality for your product.',
    },
    {
      id: 3,
      count: 2.4,
      countType: 'm',
      title: 'Total downloads',
      subtitle: 'We define behaviour, looks and personality for your product.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
