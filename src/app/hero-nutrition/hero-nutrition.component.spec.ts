import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNutritionComponent } from './hero-nutrition.component';

describe('HeroNutritionComponent', () => {
  let component: HeroNutritionComponent;
  let fixture: ComponentFixture<HeroNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
