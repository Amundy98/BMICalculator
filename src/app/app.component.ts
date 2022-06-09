import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMICalculatorTwo';



  public feet: number=0;
  public height: number=0;
  public inches: number=0;
 
  public weight: number=0;

  public result : any = "";

  constructor() { }

  ngOnInit(): void {
  }


  

 
  


 

  totalResults():void{


    this.height = (this.feet * 12) + this.inches;

  
   Math.round(this.result = 703 * (this.weight /(this.height * this.height)))/100;
 
 

 
}
}