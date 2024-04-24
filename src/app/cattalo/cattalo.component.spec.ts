import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattaloComponent } from './cattalo.component';

describe('CattaloComponent', () => {
  let component: CattaloComponent;
  let fixture: ComponentFixture<CattaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CattaloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CattaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
