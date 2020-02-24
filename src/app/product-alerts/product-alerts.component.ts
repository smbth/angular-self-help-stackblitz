import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // to pass data to child component from parent component
  @Input() product
  constructor() { }

  ngOnInit() {
    // console.log(product)
  }

}