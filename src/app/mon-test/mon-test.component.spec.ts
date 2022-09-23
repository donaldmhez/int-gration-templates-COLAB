import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonTestComponent } from './mon-test.component';

describe('MonTestComponent', () => {
  let component: MonTestComponent;
  let fixture: ComponentFixture<MonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
