import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPopulaireComponent } from './hero-populaire.component';

describe('HeroPopulaireComponent', () => {
  let component: HeroPopulaireComponent;
  let fixture: ComponentFixture<HeroPopulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPopulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPopulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
