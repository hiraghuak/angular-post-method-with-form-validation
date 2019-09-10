import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherloginComponent } from './otherlogin.component';

describe('OtherloginComponent', () => {
  let component: OtherloginComponent;
  let fixture: ComponentFixture<OtherloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
