import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
     Order will be delivered in 10 Minutes
</h4>
  `,
  styles: [
    "h4{ color:Green }"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
