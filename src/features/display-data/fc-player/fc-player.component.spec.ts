import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcPlayerComponent } from './fc-player.component';

describe('FcPlayerComponent', () => {
  let component: FcPlayerComponent;
  let fixture: ComponentFixture<FcPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FcPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FcPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
