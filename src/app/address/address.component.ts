import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    const routeid=this.route.snapshot.paramMap.get('id');
    console.log(routeid);
  
  }

}
