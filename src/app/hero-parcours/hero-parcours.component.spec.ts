import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParcoursComponent } from './hero-parcours.component';

describe('HeroParcoursComponent', () => {
  let component: HeroParcoursComponent;
  let fixture: ComponentFixture<HeroParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
