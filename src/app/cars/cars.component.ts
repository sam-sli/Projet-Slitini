import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  
  cars = [
    {
       Marquevoiture: "bmw",
      N_immatriculation: "908456 Ma",
      NBsiege: "4",
      Color: "red",
      image: "./assets/1.jpg",
    },
    {
   
      Marquevoiture: "mercedes",
      N_immatriculation: "5465464 D",
      NBsiege: "5",
      Color: "bleu",
      image: "./assets/2.jpg",
    },
    {
    
      Marquevoiture: "rang-rover",
      N_immatriculation: "465465 S",
      NBsiege: "4",
      Color: "orange",
      image: "./assets/3.jpg",
    },
    {
    
      Marquevoiture: "mclaren",
      N_immatriculation: "366262 S",
      NBsiege: "4",
      Color: "white",
      image: "./assets/4.jpg",
    }
    ];
    i=0;
    constructor(private router: Router) {}

  ngOnInit(): void {
  }
  
  goToCarsDetail(car){

    let ca = 
    {
      Marquevoiture: "",
      N_immatriculation: "",
      NBsiege: "",
      Color: "",
      image: ""
    };

    ca=car;

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.cars[i].N_immatriculation === car.N_immatriculation){
        ca = this.cars[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.cars.length)
    
    this.router.navigate(["Cardetails", JSON.stringify(ca)]);

  }
}


