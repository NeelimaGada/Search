import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  hide:boolean=false;
  data: any;

  constructor() { }
  fn(e) {
    this.data = e;
  }
  enable(){
    this.hide=true;
  }
  
  ngOnInit() {
  }

}
