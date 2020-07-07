import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
export const router: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  }
]
