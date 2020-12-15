import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products=[
  {
    id: 1,
    name: 'Alibaba',
    description: 'Crunchy Corn Chips',
    price: '₱6.00',
    image: 'https://commodityrepublic.com/wp-content/uploads/2019/05/ALIBABA-BBQ.jpg'
  },
  {
    id: 2,
    name: 'HawHaw',
    description: 'Best Milk candy',
    price: '₱1.00',
    image: 'https://i.pinimg.com/originals/c9/b5/58/c9b5580fb79765681b04a3ef2f57b815.jpg'
  },
  {
    id: 3,
    name: 'LUMPIA',
    description: 'Shanghai',
    price: '₱1.00',
    image: 'https://i.pinimg.com/originals/a1/0d/3e/a10d3ec08124e9d14c16e16462dd554c.jpg'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
