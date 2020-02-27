import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoComponent } from './temo.component';

describe('TemoComponent', () => {
  let component: TemoComponent;
  let fixture: ComponentFixture<TemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
