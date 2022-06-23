import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapRowComponent } from './face-snap-row.component';

describe('FaceSnapRowComponent', () => {
  let component: FaceSnapRowComponent;
  let fixture: ComponentFixture<FaceSnapRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
