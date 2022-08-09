import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formvalidator',
  templateUrl: './formvalidator.component.html',
  styleUrls: ['./formvalidator.component.css']
})
export class FormvalidatorComponent implements OnInit {

  @ViewChild('f') form: NgForm | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  // onCheckPasswordMatch() {
  //   if (this.form?.value.password !== this.form?.value.password2) {
  //     console.log('passwords dont match');
  //   }
  // }

}
