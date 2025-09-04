import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloanComponent } from './bankloan.component';

describe('BankloanComponent', () => {
  let component: BankloanComponent;
  let fixture: ComponentFixture<BankloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
