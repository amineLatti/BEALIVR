import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSouscatComponent } from './hero-souscat.component';

describe('HeroSouscatComponent', () => {
  let component: HeroSouscatComponent;
  let fixture: ComponentFixture<HeroSouscatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSouscatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSouscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
