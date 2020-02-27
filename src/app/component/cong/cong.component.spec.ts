import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongComponent } from './cong.component';

describe('CongComponent', () => {
  let component: CongComponent;
  let fixture: ComponentFixture<CongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
