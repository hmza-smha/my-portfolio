import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-experince',
  templateUrl: './experince.component.html',
  styleUrls: ['./experince.component.css']
})
export class ExperinceComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    this.pagesService.page.next(2);
  }

}
