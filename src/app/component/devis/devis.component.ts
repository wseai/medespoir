import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  submitting = false;
  // define collection
  private submissionForm: AngularFirestoreCollection<any[]>;

  constructor(private firestore: AngularFirestore, private formBuilder: FormBuilder) {
  }


  ngOnInit() {

    this.submissionForm = this.firestore.collection('database');
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      region: ['', Validators.required],
      age: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telef: ['', Validators.required],
      textarea: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  // facilate access to fire base
  get f() { return this.registerForm.controls; }

  onSubmit(value: any) {

    let dateTime = new Date();

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.submitted);

    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
    ).finally(() => {
      this.submitting = false;
    });

    // display form values on success
    // alert('votre demande a ete enregistrer \n\n' + JSON.stringify(this.registerForm.value, null, 12));
    alert('votre demande a ete enregistrer le ' + dateTime);


  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
