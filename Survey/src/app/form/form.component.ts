import { Component } from '@angular/core';
import { Form } from '../form';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    submitted= false;
    selectedGender:string = 'male';
    selectedYear:string = '1994';
    years:string[] = ['1994','1995','1996'];
    firstName: string;
    lastName: string;
    gender: string[] = ['male','female'];
    object= new Form('','');
   
    onClick() {
        this.submitted= true;
        console.log(this.submitted);
    }
    onSubmit(){
        this.submitted=true;
    }


}