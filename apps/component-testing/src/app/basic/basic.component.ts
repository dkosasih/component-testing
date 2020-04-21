import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-testing-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  text;
  @Input()
  set replaceText(value: string) {
    if (value) {
      this.text = value;
    }
  }
  constructor() { }

  processButton() {
    this.text = 'button clicked';
  }

  ngOnInit() {
    this.text = 'initial text';
  }
}
