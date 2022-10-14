import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  links = ['Home', 'About', 'Experince', 'Education', 'Projects', 'Contact'];

  ngOnInit(): void {
  }

}
