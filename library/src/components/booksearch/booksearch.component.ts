import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.scss'],
})
export class BooksearchComponent implements OnInit {
  lendInfo: FormGroup = new FormGroup({
    userName: new FormControl(''),
    memebershipNo: new FormControl(''),
    rentalDuration: new FormControl(''),
    returnDate: new FormControl(''),
  });
  query: FormControl = new FormControl();
  items: any = [];
  lendItems: any;
  list = true;
  info = false;
  constructor(private book: BookService, private http: HttpClient) {}
  ngOnInit(): void {}
  OnClick() {
    this.book.get(this.query.value).subscribe((result: any) => {
      this.items = result.items.map((o: any) => {
        return {
          thumb: o.volumeInfo.imageLinks.smallThumbnail,
          title: o.volumeInfo.title,
          subtitle: o.volumeInfo.subtitle,
        };
      });
    });
  }
  onLend(a: any) {
    this.list = false;
    this.info = true;
    this.lendItems=a;
      
    
  }
  onRent() {
    console.log(this.lendItems);
    console.log(this.lendInfo.value);
this.http.post('http://localhost:4000/api/add',this.lendInfo.value).subscribe((res) => {
  console.log(res);
})
  }
}
