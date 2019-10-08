import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'
import {Contact} from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'], 
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name:string;
  last_name: string;
  phone: string;
  
  constructor(private contactService: ContactService) { }

  addContact()
  {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact).subscribe(contact=>{
      this.contacts.push(contact);
    })
  }

  deleteContact(id: any)
  {
    var contacts = this.contacts;
    
    this.contactService.deleteContact(id).subscribe(data =>{
      console.log("0000000")
      if(data.n == 1)
      {
        console.log("111111")
        for(var i = 0; i < this.contacts.length; i++)
        {
          console.log("222222")
          if(contacts[i]._id == id)
          {
            console.log("33333")
            contacts.splice(i,1);
          }
        }
      }
    })
  }
  ngOnInit() {

    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts)

  }

}
