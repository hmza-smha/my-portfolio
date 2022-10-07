import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  typing = true;
  title1 = 'but never follow a routine';
  title2 = 'but never leave myself behind'
  cursor1 = true;
  cursor2 = false;

  ngOnInit(): void {

    var options = {
      strings: ['Committed,'],
      typeSpeed: 70,
      showCursor: false,
      onComplete: () => {
        this.typing = false;
        setTimeout(() => {
          document.getElementById('title1').style.opacity = '1';
        }, 2000)
      }
    };

    var typed = new Typed('.header1', options);

    setTimeout(() => {
      this.typing = true;
      this.cursor1 = false;
      this.cursor2 = true;
      var options = {
        strings: ['Hardworker,'],
        typeSpeed: 70,
        showCursor: false,
        onComplete: () => {
          this.typing = false;
          setTimeout(() => {
            document.getElementById('title2').style.opacity = '1';
          }, 2000)
        }
      };

      var typed = new Typed('.header2', options);
    }, 5000)

  }
}
