import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookService } from '../book.service';


@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.scss']
})
export class BooksearchComponent implements OnInit {
query : FormControl= new FormControl();
items: any;
  constructor(private book: BookService) { }

  ngOnInit(): void {
    

  }
  OnClick(){
  this.book.get(this.query.value).subscribe((result:any) => {
    console.log(result);
  })
}
}
