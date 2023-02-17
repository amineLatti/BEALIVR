import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRecentComponent } from './hero-recent.component';

describe('HeroRecentComponent', () => {
  let component: HeroRecentComponent;
  let fixture: ComponentFixture<HeroRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
