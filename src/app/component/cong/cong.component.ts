import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cong',
  templateUrl: './cong.component.html',
  styleUrls: ['./cong.component.css']
})
export class CongComponent implements OnInit {

  searchText: string;
  patients: Observable <any> ;
  fileName = 'Bd-Medespoir.xlsx';
  headElements = ['Cin', 'Nom', 'Prenom', 'Age', 'Emails', 'Telephone', ''];

  constructor( private dataretrieve: AngularFirestore) {
  }

  ngOnInit() {
    this.patients = this.dataretrieve.collection('database').valueChanges();
    // .subscribe.(data => console.log(data));
  }


  exportexcel(): void {
    // passer tableau
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // generer le fichier
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // enregistrer
    XLSX.writeFile(wb, this.fileName);
    }
}
