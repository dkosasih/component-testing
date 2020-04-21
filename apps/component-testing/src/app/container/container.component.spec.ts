import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BasicComponent } from '../basic/basic.component';
import { By } from '@angular/platform-browser';
import { doesNotThrow } from 'assert';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        BasicComponent
      ],
      // schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
  });

  test('should start with empty button click message', () => {
    fixture.detectChanges();

    const sut = fixture.debugElement.query(By.css('[data-testId="clickMessage"]'));

    expect(sut.nativeElement.textContent.trim()).toEqual('');
  });

  test('should display number of clicks up to 3 times', () => {
    fixture.detectChanges();

    const btnNum = fixture.debugElement.query(By.css('[data-testId="btnNum"]'));
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    fixture.detectChanges();

    const sut = fixture.debugElement.query(By.css('[data-testId="clickMessage"]'));

    expect(sut.nativeElement.textContent.trim()).toEqual('3 times');
  });

  // also test DOM color
  test('should display message specifying button has been clicked more than 3 times in red', () => {
    fixture.detectChanges();

    const btnNum = fixture.debugElement.query(By.css('[data-testId="btnNum"]'));
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    fixture.detectChanges();

    const sut = fixture.debugElement.query(By.css('[data-testId="clickMessage"]'));

    expect(sut.nativeElement.style.color).toEqual('red');
    expect(sut.nativeElement.textContent.trim()).toEqual('more than 3 times');
  });

  // seems redundant - but the SUT is actually a property that will be passed on to child element
  // we will later decide if we are going to component integration test or stop here.
  test('should set click limit message when click is more than 3 times', (done) => {
    const expectedText = 'more than 3';
    fixture.detectChanges();

    let rxjsCount = 0;
    component.clickNum$.subscribe(x => {
      rxjsCount++;

      if (rxjsCount > 3) {
        expect(x).toEqual(expectedText);
        done();
      }
    });

    const btnNum = fixture.debugElement.query(By.css('[data-testId="btnNum"]'));
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    btnNum.nativeElement.click();
    fixture.detectChanges();

    const pSut = fixture.debugElement.query(By.css('[data-testId="pContext"]'));
    expect(pSut.nativeElement.textContent.trim())
      .toEqual(`Click button below to change the following text: ${expectedText}`);
  });
});
