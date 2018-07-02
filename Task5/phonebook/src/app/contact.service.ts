import { Injectable } from '@angular/core';
import { Contacts } from './fake-contacts';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}

  getContacts(): Person[]{
    return Contacts;
  }

  getContact(id: number): Person{
    return Contacts.find(c => c.id == id);
  }

  deleteContact(contact: Person){
    let index = Contacts.findIndex(c => c == contact);
    Contacts.splice(index, 1);
  }

  addContact(name:string, surname: string, number: string){
    let id = 1;
    if (Contacts.length > 0)
    {
     id = Math.max.apply(Math, Contacts.map(function (f){
      return f.id; })) + 1;
    }
    Contacts.push({id: id, name: name, surname: surname, number: number});
  }
}