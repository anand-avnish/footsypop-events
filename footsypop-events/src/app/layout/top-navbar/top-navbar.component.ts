import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router:Router,
  ){}

  ngOnInit(): void {
  }

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
