import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-navigation-top',
  templateUrl: './element-navigation-top.component.html',
  styleUrls: ['./element-navigation-top.component.scss']
})
export class ElementNavigationTopComponent implements OnInit {
  navItems: Array<any> = [
    { title: 'How it works', url: '' },
    { title: 'Support', url: 'support' },
    { title: 'Sign up', url: 'signup' },
    { title: 'Sign in', url: 'signin' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
