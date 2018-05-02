import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = 'My first AGM project';
  lat: number = 6.2216297;
  lng: number = -75.5725023;
  shops: Array<any> = new Array();

  ngOnInit(): void {
    this.shops = [
      { active: true, name: 'Florería la Gardenia', distance: 1 },
      { active: true, name: 'Donas la pasadita', distance: 3 },
      { active: true, name: 'Veterinaria Huellitas Felices', distance: 1 },
      { active: false, name: 'Sushi Suhiroll', distance: 1 },
      { active: true, name: 'Hotel la Gracia', distance: 2 },
      { active: false, name: 'Zapatería el Clavo', distance: 3 }
    ]
  }
}
