import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    this.pagesService.page.next(6);
  }

}
