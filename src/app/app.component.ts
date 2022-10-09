import { Component, VERSION, OnInit } from '@angular/core';
interface Employee {
  name: string;
  salary: number;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  searchText: string;

  employeeList: Employee[] = [
    {
      name: 'raagu',
      salary: 50000,
    },
    {
      name: 'baagu',
      salary: 40000,
    },
  ];

  ngOnInit(): void {
    this.search();
  }

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    this.employeeList =
      this.searchText === ''
        ? this.employeeList
        : this.employeeList.filter((element) => {
            return element.name.toLowerCase();
          });
  }
}
