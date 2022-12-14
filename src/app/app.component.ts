import {
  Component,
  VERSION,
  OnInit,} from '@angular/core';
  

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
  name = 'pipe + search bar ' + VERSION.major;
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

  data = [
    { id: 1, name: 'angular' },
    { id: 2, name: 'react' },
    { id: 3, name: 'java' },
    { id: 4, name: 'python' },
  ];


 enterSerachValue: string = '';

  
  
}
