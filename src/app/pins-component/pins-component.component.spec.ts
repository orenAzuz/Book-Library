import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsComponentComponent } from './pins-component.component';

describe('PinsComponentComponent', () => {
  let component: PinsComponentComponent;
  let fixture: ComponentFixture<PinsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
