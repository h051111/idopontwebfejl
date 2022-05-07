import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdopontFoglalasComponent } from './idopont-foglalas.component';

describe('IdopontFoglalasComponent', () => {
  let component: IdopontFoglalasComponent;
  let fixture: ComponentFixture<IdopontFoglalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdopontFoglalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdopontFoglalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
