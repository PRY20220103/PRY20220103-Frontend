import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface Log {
  id: string;
  role: string
  name: string;
  category: string;
  grade: string;
  last_date: Date
}

const ROLE: string[] = [
  'Alumno',
  'Administrador',
  'Profesor',
  'Alumno',
  'Administrador',
  'Profesor',
  'Alumno',
  'Administrador',
  'Profesor',
];
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
const CATEGORY: string[] = [
  'Ciencias',
  'Biologia',
  'Quimica',
  'Anatomia',
  'Astrologia'
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
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'role','name', 'category', 'grade', 'last_seen'];
  dataSource: MatTableDataSource<Log>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewLog(k + 1));

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

}

function createNewLog(id: number): Log {

  return {
    id: id.toString(),
    role: ROLE[Math.round(Math.random() * (NAME.length ))],
    name: NAME[Math.round(Math.random() * (NAME.length - 1))],
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
    grade: GRADE[Math.round(Math.random() * (GRADE.length - 1))],
    last_date: randomDate(new Date(2021, 0, 1), new Date())
  };
}

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}