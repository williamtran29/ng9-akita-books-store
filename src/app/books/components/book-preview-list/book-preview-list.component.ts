import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../state/book.model';

@Component({
  selector: 'app-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.scss']
})
export class BookPreviewListComponent implements OnInit {

  @Input() books: Book[];
  @Output() scrolled = new EventEmitter();
  @Output() scrolledUp = new EventEmitter();

  scrollDistance = 2;
  scrollUpDistance = 1.5;
  throttle = 50;
  limit = 500;
  page = 1;

  constructor() { }

  ngOnInit() { }

  onScrollDown() {
     this.scrolled.emit();
  }

  onScrollUp() {
     this.scrolledUp.emit();
  }
}
