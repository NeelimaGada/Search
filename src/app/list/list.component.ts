import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:{};
  @Input()list;
  constructor(private service:ProductsService) { }
  @Input() searchText;
  getData() {
    this.service.GetProduct().subscribe(response=>{
      this.products=response;
      console.log(this.products)
    })
  }

  ngOnInit() {
    this.getData();
  }

}
