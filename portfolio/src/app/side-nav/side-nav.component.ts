import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sideNav') sideNav: ElementRef;
  sideNavExist = false;
  
  constructor(
      private route: ActivatedRoute,
      private renderer: Renderer2
      ) { }

  ngOnInit(): void {    
    this.route.fragment.subscribe((fragment: string) => {
      let links = document.getElementsByClassName('links');

      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }

      let screenWidth = window.innerWidth;

      // switch(fragment){
      //   case 'home':
      //     document.getElementById('homeLink').classList.add('active');
      //     break;
      //   case 'about':
      //     document.getElementById('aboutLink').classList.add('active');
      //     break;
      //   case 'education':
      //     document.getElementById('educationLink').classList.add('active');
      //     break;
      //   case 'projects':
      //     document.getElementById('projectsLink').classList.add('active');
      //     break;
      //   default :
      //     document.getElementById('homeLink').classList.add('active');
      //     break;
      // }

      setTimeout(()=>{
        if(screenWidth < 951){
          this.closeSideNav();
          this.toggleIconColor(false);
        }
      }, 0);

    });
  }

  toggleSideNav(){
    if(this.sideNavExist){
      this.closeSideNav();
      this.toggleIconColor(false)
    }else{
      this.openSideNav();
      this.toggleIconColor(true);
    }

  }

  closeSideNav(){
    this.renderer.setStyle(this.sideNav?.nativeElement, "left", "-999px");
    this.sideNavExist = false;
  }

  openSideNav(){
    this.renderer.setStyle(this.sideNav?.nativeElement, "left", "0px");
    this.sideNavExist = true;
  }

  toggleIconColor(condition: boolean){
    let lines = document.getElementsByClassName('line');
    if(!condition){
      for(let i = 0; i < lines.length; i++){
        (lines[i] as HTMLElement).style.backgroundColor = '#aaa';
      }
    }else{
      for(let i = 0; i < lines.length; i++){
        (lines[i] as HTMLElement).style.backgroundColor = 'red';
      }
    }
  }
  
}
