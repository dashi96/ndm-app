import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {AppService, Route} from "./app.service";
import {takeUntil} from "rxjs/operators";
import {DestroyService} from "./destroy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['address', 'gateway', 'interface'];
  dataSource: MatTableDataSource<Route>;
  @ViewChild(MatSort, { static: true }) private sort: MatSort;

  constructor(private srv: AppService, private destroy$: DestroyService) {}

  ngOnInit(): void {
    this.srv.getRoutes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(routes => {
        this.dataSource = new MatTableDataSource(routes || []);
        this.dataSource.sort = this.sort;
      })
  }
}
