import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss']
})
export class PageLandingComponent implements OnInit {

  constructor(
    private _titleService: Title
  ) { }

  ngOnInit() {
    this._titleService.setTitle('Engine 101 | Home');
  }

}
