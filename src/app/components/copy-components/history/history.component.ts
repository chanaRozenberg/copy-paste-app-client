import { Component, OnInit } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { textModel } from 'src/app/models/textModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{

  texts: Observable<textModel[]> = NEVER;

  constructor(
    private servise: ApiService
    ) { }

  ngOnInit(): void {
    this.texts = this.servise.getAllTexts().pipe();
  }
  
  refreshTexts(){
    this.texts = this.servise.getAllTexts().pipe();
  }

}
