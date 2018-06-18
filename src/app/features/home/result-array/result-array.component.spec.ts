import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultArrayComponent } from './result-array.component';

describe('ResultArrayComponent', () => {
  let component: ResultArrayComponent;
  let fixture: ComponentFixture<ResultArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
