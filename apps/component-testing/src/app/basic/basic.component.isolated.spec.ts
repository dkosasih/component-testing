import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should initialized with 'initial text'`, () => {
    component.ngOnInit();
    expect(component.text).toEqual('initial text');
  });

  test('should reflect other text if replaceText input is present after component initiation', () => {
    const expectedText = 'text to replace';
    component.replaceText = expectedText;
    component.ngOnInit();

    expect(component.text).toEqual(expectedText);
  });

  test(`should change display text to 'button clicked' after process button pressed`, () => {
    const expectedText = 'button clicked';

    component.processButton();

    expect(component.text).toEqual(expectedText);
  });

});
