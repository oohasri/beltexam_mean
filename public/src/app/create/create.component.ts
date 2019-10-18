import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: any;
  isError = false;
  errors: [];
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }
  ngOnInit() {
    this.product = { name: '', qty: '', price: ''};
  }
  onCreate() {
    const observable = this._httpService.create(this.product);
    observable.subscribe((data: any) => {
      console.log('data inserted');
      console.log(data);
      if ('errors' in data) {
        this.isError = true;
        this.errors = data.errors;
      } else {
        this._router.navigate(['/display']);
      }
    });
  }
}
