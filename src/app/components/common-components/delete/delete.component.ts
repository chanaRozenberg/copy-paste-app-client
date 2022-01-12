import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() id: number;
  @Input() text: string;
  @Output() refresh = new EventEmitter();

  constructor(private servise: ApiService) { }

  ngOnInit(): void {
  }

  deleteText(){
    this.servise.deleteText(this.id).subscribe();
    this.refresh.emit();
  } 

}
