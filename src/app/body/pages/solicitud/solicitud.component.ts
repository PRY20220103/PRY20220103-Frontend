import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SenderService } from 'src/app/sender.service';

export interface Soli {
  id: string;
  name: string;
  rol: string;
  desc: string;
  status: string;
  category: string;
  grade: string;
}

const NAME: string[] = [
  'Piramide',
  'Celula',
  'Marte',
  'Leon',
  'Araña',
  'Omori',
  'Tierra',
  'Saturno',
  'Celula',
  'Atomo',
  'Corazon',
  'Cerebro'
];

const STATUS: string[] = [
  'Aceptado',
  'Denegado',
  'Por confirmar'
];

const CATEGORY: string[] = [
  'Ciencias',
  'Biologia',
  'Quimica',
  'Anatomia',
  'Astrologia'
];

const ROLE: string[] = [
  'Administrador',
  'Profesor'
];

const GRADE: string[] = [
  '1ro',
  '2do',
  '3ro',
  '4to',
  '5to',
  '6to'
];

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'status','category', 'grade', 'actions'];
  dataSource: MatTableDataSource<Soli>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private service: SenderService) { 
    
    const users = Array.from({length: 100}, (_, k) => createNewSoli(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  testing(aux: Soli){
    if(aux.status == "Por confirmar"){
      this.service.data = aux;
      this.router.navigate(["/solicitud/details"])
    }
    else alert("Solo se puede detallar las solicitudes por confirmar")
  }

}

function createNewSoli(id: number): Soli {

  return {
    id: id.toString(),
    name: NAME[Math.round(Math.random() * (NAME.length - 1))],
    rol: ROLE[Math.floor(Math.random() * (NAME.length - 1))],
    desc: "Lorem Ipsum",
    status: STATUS[Math.floor(Math.random() * (NAME.length - 1))],
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
    grade: GRADE[Math.round(Math.random() * (GRADE.length - 1))],
  };
}
