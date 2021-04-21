import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBugComponent } from './select-bug.component';

describe('SelectBugComponent', () => {
  let component: SelectBugComponent;
  let fixture: ComponentFixture<SelectBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
