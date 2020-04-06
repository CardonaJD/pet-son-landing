import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBackOfficeComponent } from './menu-back-office.component';

describe('MenuBackOfficeComponent', () => {
  let component: MenuBackOfficeComponent;
  let fixture: ComponentFixture<MenuBackOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBackOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
