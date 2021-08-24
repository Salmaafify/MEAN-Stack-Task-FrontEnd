import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  @Input() contact: any;

  constructor(public modal: NgbActiveModal,
     private contactService : ContactsService,
      private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  onSubmit(f: NgForm){
    this.contactService.editContact(this.contact._id,f.value).subscribe(res=>{
      if(res.name){
        this.modalService.open("Updated Successfully",{
          size: 'lg'
        })
        this.modal.dismiss('Cross click');
      }else{
        this.modalService.open("Updated Failed , Please Try Again",{
          size: 'lg'
        })
        this.modal.dismiss('Cross click');
      }
    })
  }

}
