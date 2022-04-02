import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExsamplesComponent } from './pipe-exsamples.component';

describe('PipeExsamplesComponent', () => {
  let component: PipeExsamplesComponent;
  let fixture: ComponentFixture<PipeExsamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeExsamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExsamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
