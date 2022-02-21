import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IMovies } from 'src/app/interfaces/movies.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IMovies>;
  displayedColumns: string[] = ['id', 'title', 'year', 'averageRating', 'releaseDate'];

  constructor(private http: HttpClient){}

  
  ngAfterViewInit() {
      this.http.get('assets/data/movies.json').subscribe((result: IMovies[]) => {
      this.dataSource = new MatTableDataSource(result)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    })
  }

  searchFuction(searchPhrase: string){
    this.dataSource.filter = searchPhrase;
  }

}
