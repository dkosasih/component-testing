import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-testing-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  @Input()
  replaceText: string;

  text = 'initial text';
  constructor() { }

  processButton() {
    this.text = 'button clicked';
  }

  ngOnInit() {
    if (this.replaceText) {
      this.text = this.replaceText;
    }
  }
}
