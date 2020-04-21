import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;

  beforeEach(() => {
    component = new BasicComponent();
  });

  test(`should initialized with 'initial text'`, () => {
    component.ngOnInit();
    expect(component.text).toEqual('initial text');
  });

  test('should reflect other text if replaceText input is present after component initiation', () => {
    const expectedText = 'text to replace';
    component.ngOnInit();

    component.replaceText = expectedText;

    expect(component.text).toEqual(expectedText);
  });

  test(`should change display text to 'button clicked' after process button pressed`, () => {
    component.ngOnInit();
    const expectedText = 'button clicked';

    component.processButton();

    expect(component.text).toEqual(expectedText);
  });

});
