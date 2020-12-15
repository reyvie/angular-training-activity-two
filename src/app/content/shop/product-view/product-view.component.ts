import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  selectedProduct: any;

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

  constructor(private router: ActivatedRoute, private _globalService: GlobalService) {
    console.log(this.router.snapshot.params.id)
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );
        if (selected.length > 0) {
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    )
  }
  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }


}
