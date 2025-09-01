import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeApiComponent } from './practice-api.component';

describe('PracticeApiComponent', () => {
  let component: PracticeApiComponent;
  let fixture: ComponentFixture<PracticeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
