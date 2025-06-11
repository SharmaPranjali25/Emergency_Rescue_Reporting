import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueListComponent } from './rescue-list.component';

describe('RescueListComponent', () => {
  let component: RescueListComponent;
  let fixture: ComponentFixture<RescueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RescueListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
