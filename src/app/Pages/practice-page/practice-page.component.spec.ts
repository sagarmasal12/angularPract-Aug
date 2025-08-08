import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePageComponent } from './practice-page.component';

describe('PracticePageComponent', () => {
  let component: PracticePageComponent;
  let fixture: ComponentFixture<PracticePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
