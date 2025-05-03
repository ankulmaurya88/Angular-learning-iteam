import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraactivityComponent } from './extraactivity.component';

describe('ExtraactivityComponent', () => {
  let component: ExtraactivityComponent;
  let fixture: ComponentFixture<ExtraactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraactivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
