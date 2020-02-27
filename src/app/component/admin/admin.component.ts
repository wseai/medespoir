import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'medespoir admin';
  confirmation: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.confirmation = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('resMedespoir2020conf')]]
    });
  }

  ngOnInit() {
  }

}
