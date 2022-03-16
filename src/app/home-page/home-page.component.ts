import { Component, OnInit } from '@angular/core';

import {  multi1, multi2, multi3 } from '../shared/database';
import { REGISTERED } from '../shared/database';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  registered: any[] = REGISTERED;
  multi1:any[] =multi1
  multi2:any[] =multi2
  multi3:any[] =multi3
  
  ngOnInit(): void {
    
  }
}
