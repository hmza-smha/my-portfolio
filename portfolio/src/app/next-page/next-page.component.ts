import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent implements OnInit {

  constructor(private pagesService: PagesService, private activaedRoute: ActivatedRoute, private router: Router) { }
  pageNo: number;
  next = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.next = true;
    }, 10000)

    this.pagesService.page.subscribe(pageNo => {
      this.pageNo = pageNo;
    })
  }

  onMove() {
    let page = '';
    switch (this.pageNo == 6 ? 0 : this.pageNo + 1) {
      case 0:
        page = 'home';
        break;

      case 1:
        page = 'about';
        break;

      case 2:
        page = 'experince';
        break;

      case 3:
        page = 'education';
        break;

      case 4:
        page = 'projects';
        break;

      case 5:
        page = 'services';
        break;

      case 6:
        page = 'contact';
        break;
    }

    this.router.navigate([`/${page}`]);
  }

}
