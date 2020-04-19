import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';
import { By } from '@angular/platform-browser';

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
  });

  test(`should initialized with 'initial text'`, () => {
    fixture.detectChanges();
    expect(component.text).toEqual('initial text');
  });

  test('should reflect other text if replaceText input is present after component initiation', () => {
    const expectedText = 'text to replace';
    component.replaceText = expectedText;

    fixture.detectChanges();

    const pSut = fixture.debugElement.query(By.css('[data-testId="pContext"]'));
    expect(pSut.nativeElement.textContent.trim())
      .toEqual(`Click button below to change the following text: ${expectedText}`);
  });

  test(`should change display text to 'button clicked' after process button pressed`, () => {
    const expectedText = 'button clicked';

    component.processButton();

    fixture.detectChanges();

    const pSut = fixture.debugElement.query(By.css('[data-testId="pContext"]'));
    expect(pSut.nativeElement.textContent.trim())
      .toEqual(`Click button below to change the following text: ${expectedText}`);
  });
});
