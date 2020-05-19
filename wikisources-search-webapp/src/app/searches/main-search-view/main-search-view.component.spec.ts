import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchViewComponent } from './main-search-view.component';

describe('MainSearchViewComponent', () => {
  let component: MainSearchViewComponent;
  let fixture: ComponentFixture<MainSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
