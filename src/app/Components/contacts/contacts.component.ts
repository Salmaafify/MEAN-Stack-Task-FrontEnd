import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from 'src/app/Services/contacts.service';
import { AddNewContactComponent } from '../add-new-contact/add-new-contact.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  data:any;
  constructor(private modalService:NgbModal,private contactService: ContactsService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    this.contactService.getContacts().subscribe(res=>{
      console.log(res)
      this.data = res;
    })
  }

  onAdd(){
    this.modalService.open(AddNewContactComponent,{
      size: 'lg'
    })
  }

  onEdit(item: any){
    const modalRef = this.modalService.open(EditContactComponent, {
      size: 'lg', // size: 'xs' | 'sm' | 'lg' | 'xl'
    });
    modalRef.componentInstance.contact = item;
  }

  onDelete(item: any){
    this.contactService.deleteContact(item._id).subscribe(res=>{
      if(res){
        this.modalService.open("Deleted Successfully",{
          size: 'lg'
        })
      }else{
        this.modalService.open("Deleted Failed , Please Try Again",{
          size: 'lg'
        })
      }
    })
  }
  

}
