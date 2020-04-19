import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-testing-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input()
  set replaceText(value: string) {
    if (value) {
      this.text = value;
    }
  }

  text = 'initial text';
  constructor() { }

  processButton() {
    this.text = 'button clicked';
  }

  ngOnInit() {}
}
