import { Injectable, PipeTransform } from "@angular/core";
import { AppModule } from "./app.module";
import { QUESTIONS } from './question';



@Injectable()

export class QuestionService {
    questions = QUESTIONS;
    constructor() {}
   
    getmaleQuestions(id) {
        return this.questions.filter(x => x.id === id);

    }
    getfemaleQuestions(id) {
        return this.questions.filter(x => x.id === id);

    }
    print(value){
    if(value==='male'){
    let male = this.getmaleQuestions(1);
    console.log(male);
    }
    else if(value==='female'){
    let female = this.getmaleQuestions(2);
    console.log(female);
    }
}
}   
    
   
     
