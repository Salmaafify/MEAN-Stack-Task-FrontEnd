import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-errordata',
  templateUrl: './errordata.component.html',
  styleUrls: ['./errordata.component.css']
})
export class ErrordataComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
