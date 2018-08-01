import { Injectable, PipeTransform } from "@angular/core";
import { AppModule } from "./app.module";
import { QUESTIONS } from './question';



@Injectable()
    
export class QuestionService{
    questions= QUESTIONS;
    constructor(){}
    getmaleQuestions(){
        return this.questions.filter(questions.id==='1')

    }
    getfemaleQuestions(){
        return this.questions.filter(questions.id==='2')

    }

}