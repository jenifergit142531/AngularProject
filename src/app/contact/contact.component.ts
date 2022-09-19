import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <h2 > Contact </h2>
  <a routerLink="add">
    Add Contact
</a>
<br>
<a routerLink="edit/101">
   Edit Contact
</a>
<div>
  <router-outlet></router-outlet>
</div>
    <p>
    Please feel free to write to us at customerservice@bigbasket.com, or call us on 1860 123 1000 and we will do our best to incorporate your suggestions into our system.
    </p>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
