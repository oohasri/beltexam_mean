import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isError = false;
  errors: [];
  product = {name: '', qty: '', price: ''};
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // this.editAuthor.id = params.id;
    this.getProduct(params.id);
  });
  }
  getProduct(id) {
    const observable = this._httpService.retrieveById(id);
    observable.subscribe((data: any) => {
      console.log('Got data to edit');
      console.log(data);
      this.product = data;
    });
  }
  onDelete(id) {
    console.log(id);
    const observable = this._httpService.delete(id);
    observable.subscribe((data: any) => {
      console.log('Product removed');
      if ('errors' in data) {
        this.isError = true;
        this.errors = data.errors;
      } else {
      this._router.navigate(['/display']);
      }
    });
  }

}
