import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-testing-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  clickNum;
  clickLimitMessage;

  constructor() { }

  onButtonClick() {
    this.clickNum = !this.clickNum ? 1 : this.clickNum + 1;

    if (this.clickNum > 3) {
      this.clickLimitMessage = 'more than 3';
    }
  }

  ngOnInit() {
  }

}
