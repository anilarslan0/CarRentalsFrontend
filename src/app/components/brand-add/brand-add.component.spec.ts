import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandrAddComponent } from './brandr-add.component';

describe('BrandrAddComponent', () => {
  let component: BrandrAddComponent;
  let fixture: ComponentFixture<BrandrAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandrAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
