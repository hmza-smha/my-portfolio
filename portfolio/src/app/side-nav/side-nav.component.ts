import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      let links = document.getElementsByClassName('links');

      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }

      let activeLink = document.getElementById(fragment);

      switch(fragment){
        case 'home':
          document.getElementById('homeLink').classList.add('active');
          break;
        case 'about':
          document.getElementById('aboutLink').classList.add('active');
          break;
        case 'education':
          document.getElementById('educationLink').classList.add('active');
          break;
        case 'projects':
          document.getElementById('projectsLink').classList.add('active');
          break;
        default :
          document.getElementById('homeLink').classList.add('active');
          break;
      }
    })
  }

}
