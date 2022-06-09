import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eng-bmi',
  templateUrl: './eng-bmi.component.html',
  styleUrls: ['./eng-bmi.component.css']
})
export class EngBMIComponent implements OnInit {



  public feet: number=0;
  public height: number=0;
  public inches: number=0;
  public BMI : number=0;
  public weight: number=0;

  public result : number=0;

  constructor() { }

  ngOnInit(): void {
  }


  engBMI = [
    {
      "weight":0 ,
      "feet": 0,
      "inches":0,
      obese: 'People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol. Try reducing your calorie intake and exercising. One day at a time!',
      overweight: 'People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol. Try reducing your calorie intake and exercising. One day at a time!',
      healthy: 'Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.',
      underweight: 'Talk with your healthvare provider to determine possible causes of underweight and if you need to gain weight.'
    }
  ]

 
  


 

  totalResults():void{


    this.height = (this.feet * 12) + this.inches;

    // let BMI;
   this.result = 703 * (this.weight /(this.height * this.height));
 
  //  let message;


  //   if(this.BMI >= 30.0){
  //     console.log('Your BMI is ' + this.BMI + ', indicating your weight is in the Obesity category for adults of your height.')
  //   }
  //   else if(this.BMI >= 25 && this.BMI <= 29.9){
  //     console.log('Your BMI is ' +this.BMI+ ', indicating your weight is in the Overweight category for adults of your height.' )
  //   }
  //   else if(this.BMI >= 18.5 && this.BMI <= 24.9){
  //     console.log('Your BMI is ' + this.BMI + ', indicating your weight is in the Healthy category for adults of your height.')
  //   }
  //   else if(this.BMI<= 18.5){
  //     console.log( 'Your BMI is ' + this.BMI+ ', indicating your weight is in the Underweight category for adultsof your height.')
  //   }
  

  }
 
}
