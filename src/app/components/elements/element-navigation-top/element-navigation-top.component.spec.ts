import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNavigationTopComponent } from './element-navigation-top.component';

describe('ElementNavigationTopComponent', () => {
  let component: ElementNavigationTopComponent;
  let fixture: ComponentFixture<ElementNavigationTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementNavigationTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNavigationTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
