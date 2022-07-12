import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

class TabModel {
  constructor(
      public displayName: string,
      public routerPath: string,
      public isActive: boolean
  ){}
}

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  navTabs: TabModel[] = [
    new TabModel('Home', '/home', true),
    new TabModel('About Us', '/about', false),
    new TabModel('Services', '/service', false),
    new TabModel('Gallery', '/gallery', false),
    new TabModel('Contact', '/contact', false)
  ];

  iserr=false;
  parsedURL: any;

  constructor(
    private router:Router,
    private actRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params: Params) => {
      this.parsedURL = this.router.url.split('/');
      console.log(`/${this.parsedURL[1]}`);
      if(`${this.parsedURL[1]}`=="404")this.iserr=true;
      else this.iserr=false;
    });
    for(let tab of this.navTabs){
      if(tab.routerPath == `/${this.parsedURL[1]}`){
          tab.isActive = true;
      } else {
          tab.isActive = false;
      }
    }
  }

  // fixHeader(){
  //   console.log("In func");

  //   if(window.scrollX>116){
  //     let r=document.getElementById("routes");
  //     // r.style.position="fixed";
  //     console.log(r);
  //   }
  // }

  linkClicked(link: string){
    console.log(link)
    for(let tab of this.navTabs){
        if(tab.routerPath == link){
            tab.isActive = true;
        } else {
            tab.isActive = false;
        }
    }
    this.router.navigate([link]);
  }

}
