import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private contactService : ContactsService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.contactService.addNewContact(f.value).subscribe(res=>{
      if(res.name){
        this.modalService.open("Added Successfully",{
          size: 'lg'
        })
        this.modal.dismiss('Cross click');
      }else{
        this.modalService.open("Added Failed , Please Try Again",{
          size: 'lg'
        })
        this.modal.dismiss('Cross click');
      }
    })
  }
}
