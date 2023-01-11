import { Component, OnInit } from '@angular/core';
import { ApiEmployeeService } from '../shared/api-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  //ebben a változoba vannak az adatok
  employees !: any; 
  constructor(private api: ApiEmployeeService) { }

  ngOnInit(): void {
    //ha betöltödik akkor meghivja
    this.getEmployees();
  }
  getEmployees(){
    //meghivjuk
    this.api.getEmployees().subscribe(
      res => {
        console.log(res);
        this.employees = res;
      }
    )
  }

}
