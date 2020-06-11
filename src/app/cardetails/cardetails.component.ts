import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

  car = 
  {
    Marquevoiture: "",
      N_immatriculation: "",
      NBsiege: "",
      Color: "",
      image: ""
  };

constructor(private activetedRoute:ActivatedRoute) { }

ngOnInit(): void {
  this.car = JSON.parse(this.activetedRoute.snapshot.params.car);
}
}
