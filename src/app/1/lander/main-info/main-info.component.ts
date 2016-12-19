import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { MainFormComponent } from '../main-form/main-form.component';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {
  constructor (public echos: GlobalDirective) {}

  getData() {
    this.echos.getData();
    // .subscribe(data => this.data = vars.json());
  }

  ngOnInit() {
    this.getData();
  }
}
