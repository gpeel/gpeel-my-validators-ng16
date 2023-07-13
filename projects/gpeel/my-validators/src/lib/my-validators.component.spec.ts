import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyValidatorsComponent } from './my-validators.component';

describe('MyValidatorsComponent', () => {
  let component: MyValidatorsComponent;
  let fixture: ComponentFixture<MyValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyValidatorsComponent]
    });
    fixture = TestBed.createComponent(MyValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
