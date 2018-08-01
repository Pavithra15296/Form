import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Form } from '../form';
import { QuestionService } from '../questions.service';


@Component({
    selector: 'app-question',
    templateUrl: './questions.component.html',
    styleUrls: ['questions.component.css']
})
export class QuestionsComponent implements OnChanges{
    @Input() objects: Form;    
    @Input() year: string;
    @Input() gender: string; 
    
    constructor(private questionService:QuestionService){}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        for (let objectName in changes) {
            console.log(objectName);
            let change = changes[objectName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            if(current === 'male'){
                return this.questionService.getmaleQuestions();   
                }
            else if(current==='female'){
                return this.questionService.getfemaleQuestions();
            }
            
        }

    }
    

    
}