import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMovieComponent } from './load-movie.component';

describe('LoadMovieComponent', () => {
  let component: LoadMovieComponent;
  let fixture: ComponentFixture<LoadMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
