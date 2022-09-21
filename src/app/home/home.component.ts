import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headername ="BIG CASKET";

  discount=0.5;

  minimum=100000;
  
  isdisabled=true;

  colorname="Purple";

  font="40px";

  orderno=101;

  classname="headclass";

  stylevalue={"color":"Orange","font-size":"20px"}

 orders=['Milk','Bread','Egg','Fruits','Jam'];

  ngOnInit(): void {
  }
  order(OrderId:any,Items:string,Total:Number)
  {
    alert("You purchased "+Items+" on your order Id " +OrderId +"and the total price to be paid is "+Total);

  }
  address(address:string)
  {
    
    alert("Deliver to my Home address at " +address);
   
  }
}
