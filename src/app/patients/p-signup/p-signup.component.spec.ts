import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSignupComponent } from './p-signup.component';

describe('PSignupComponent', () => {
  let component: PSignupComponent;
  let fixture: ComponentFixture<PSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
