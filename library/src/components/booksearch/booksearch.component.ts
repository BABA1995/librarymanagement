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
items: any = [];
img: any;
title: any;
subtitle: any;
thumb:any;
  constructor(private book: BookService) { }

  ngOnInit(): void {
    

  }
  OnClick(){
  this.book.get(this.query.value).subscribe((result:any) => {
    console.log(result.items);
    result.items.filter((o:any) => {
      let itemlist = [];
      let volumeInfo = o.volumeInfo;
      this.title = volumeInfo.title;
      itemlist.push(this.title);
      this.subtitle = volumeInfo.subtitle;
      itemlist.push(this.subtitle);
      this.img = volumeInfo.imageLinks;
      this.thumb =this.img.thumbnail;
      itemlist.push(this.thumb);
      return this.items.push(itemlist);
    })
    
  })
  
  console.log(this.items);
}
}
