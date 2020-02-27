import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleComponent } from './tele.component';

describe('TeleComponent', () => {
  let component: TeleComponent;
  let fixture: ComponentFixture<TeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
