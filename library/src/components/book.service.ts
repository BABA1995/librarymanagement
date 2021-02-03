import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }
  get(queryField: string){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${queryField}`);
  }
}
