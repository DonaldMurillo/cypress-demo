import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicOverlayComponent } from './magic-overlay.component';

describe('MagicOverlayComponent', () => {
  let component: MagicOverlayComponent;
  let fixture: ComponentFixture<MagicOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicOverlayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
