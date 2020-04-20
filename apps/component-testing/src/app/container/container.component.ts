import { Component, OnInit } from '@angular/core';
import { of, BehaviorSubject, Subject, merge } from 'rxjs';
import { share, scan, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'component-testing-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private incSubj$ = new BehaviorSubject(null);
  clickNum$;

  constructor() {
    this.clickNum$ = this.incSubj$.asObservable()
      .pipe(
        scan((acc, curr) => acc + curr, 0),
        map(x => x > 3 ? 'more than 3' : x),
        share()
    );
  }

  onButtonClick() {
    this.incSubj$.next(1);
  }

  ngOnInit() {
  }

}
