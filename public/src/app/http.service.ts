import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  create(productBody) {
    return this._http.post('/products/new', productBody);
  }
  getAll() {
    return this._http.get('/products');
  }
  retrieveById(id) {
    return this._http.get('/product/edit/' + id);
  }
  delete(id) {
    return this._http.delete('/product/delete/' + id);
  }
  update(id, editBody) {
    return this._http.put('/product/update/' + id, editBody);
  }
}
