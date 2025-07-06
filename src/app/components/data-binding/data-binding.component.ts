import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName : string = "Angular_18";
  stateName: string = "Maharashtra";
  inputType = "radio";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isIndian : boolean = true;
  currentDate : Date = new Date();

  firstName = signal("Karan Rana");


  constructor(){
    this.courseName = "Angular_18";
    

  }

  showAlert(numb : string){
    alert(numb);
  }
  changeCourseName(){
    this.courseName = "Angular_UPDATED";
    this.firstName.set("Neeraj Rana")
  }
}
