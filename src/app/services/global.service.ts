import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Angular Training';
  appSubtitle = 'Cloudstaff day two of Angular training';
  subjectName = new Subject();
  color = new Subject();

  constructor() { }

  toUpperCase(text: any): any {
    return text.toUpperCase();
  }
}
