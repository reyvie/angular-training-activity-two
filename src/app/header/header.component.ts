import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular';
  subtitle = 'Angular subtitle';
  color: any;
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.toUpperCase(this._globalService.appSubtitle);
    this._globalService.subjectName.subscribe(
      (name: any) => {
        console.log('name',name);
        this.title=name || this._globalService.toUpperCase(this._globalService.appTitle);
      }
    )

    this._globalService.color.subscribe(
      (color: any) => {
        console.log('colorr',color);
        this.color = color
      }
    )
  }

}
