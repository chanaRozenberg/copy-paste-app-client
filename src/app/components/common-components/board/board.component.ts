import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { textModel } from 'src/app/models/textModel';
import { ApiService } from 'src/app/services/api.service';
import { NEVER, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
    @Output() refresh = new EventEmitter();
    textById: Observable<textModel[]> = NEVER;
    id: number;
    formGroup: FormGroup;
    isPasteToSave: boolean = false;

    constructor( 
      private formBuilder: FormBuilder,
      private servise: ApiService,
      private router: Router,
    ) { }    
    
    ngOnInit() {      
      this.initForm('');
      this.getMaxId();
      this.isPaste();
    }

    isPaste(){
        const id: number = parseInt(this.router.url.split('/')[2]);
        if(id) {
          this.textById = this.servise.getText(id).pipe(
            tap(text => this.initForm(text[0].text))
          )
          this.isPasteToSave = true;
        }
        else
          this.isPasteToSave = false;
    }

    initForm(text: string) {
      this.formGroup=this.formBuilder.group({
        text:this.formBuilder.control(text)   
      }) 
    }

    getMaxId(){      
        this.servise.getMaxId().pipe(
        tap(text => text[0] ? this.id=text[0].id : this.id=1000),
        tap(_ => this.id++),
        tap(_=>console.log(this.id))
      ).subscribe()      
    }

    saveText(id?: number){     
      if(this.formGroup.value.text.trim()!=""){
        if(!id)
          id = this.id;
        const text: textModel = {
          "id": id,
          "text": this.formGroup.value.text
        }
        if(!this.isPasteToSave){
          console.log(this.formGroup.value.text);  
          alert(`localhost:4200/controlc/${this.id}`)
          this.servise.addText(text).subscribe();
        }
        else{
            this.servise.editText(text).subscribe();
          } 
        }        
        else
          alert('the text is empty...');               
        this.refresh.emit(); 
        this.id++;      
        this.initForm('');
    }

    refreshTexts(id: number){
      this.textById = this.servise.getText(id).pipe()
    }
}