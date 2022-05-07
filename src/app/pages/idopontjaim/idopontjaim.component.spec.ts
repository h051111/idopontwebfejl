import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdopontjaimComponent } from './idopontjaim.component';

describe('IdopontjaimComponent', () => {
  let component: IdopontjaimComponent;
  let fixture: ComponentFixture<IdopontjaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdopontjaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdopontjaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
