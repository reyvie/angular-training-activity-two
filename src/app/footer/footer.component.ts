import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  color: any;
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.color.subscribe(
      (color: any) => {
        console.log('colorr',color);
        this.color = color
      }
    )
  }



}
