import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExsampleComponent } from './pipes-exsample.component';

describe('PipesExsampleComponent', () => {
  let component: PipesExsampleComponent;
  let fixture: ComponentFixture<PipesExsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
