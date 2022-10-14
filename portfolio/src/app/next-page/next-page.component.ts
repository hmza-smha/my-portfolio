import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../shared/pages.service';

enum Page {
  HOME = 'home',
  ABOUT = 'about',
  EXPERINCE = 'experince',
  EDUCATION = 'education',
  PROJECTS = 'projects',
  CONTACT = 'contact' 
}

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})

export class NextPageComponent implements OnInit {

  constructor(private pagesService: PagesService, private router: Router) { }
  
  pageNo: number;
  totalPages = 4;
  next = false;

  ngOnInit(): void {

    // setTimeout(() => {
    //   this.next = true;
    // }, 10000)

    this.pagesService.page.subscribe(pageNo => {
      this.pageNo = pageNo;
      if (pageNo == 0) {
        setTimeout(() => {
          this.next = true;
        }, 10000)
      }
      else {
        this.next = true;
      }
    })
  }

  onMove() {
    console.log(this.pageNo);
    let page = '';
    switch (this.pageNo == this.totalPages ? 0 : this.pageNo+1) {
      case 0:
        page = Page.HOME;
        break;

      case 1:
        page = Page.ABOUT;
        break;

      case 2:
        page = Page.EDUCATION;
        break;

      case 3:
        page = Page.PROJECTS;
        break;

      case 4:
        page = Page.CONTACT;
        break;
    }

    this.router.navigate([`/${page}`]);
  }

}
