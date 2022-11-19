import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private pagesService: PagesService) { }
  company = {
    name: 'Alt Shift Creative',
    position: 'Full Stack Developer',
    startingDate: '8/2022'
  }
  ngOnInit(): void {
    this.pagesService.page.next(1);
  }

}
