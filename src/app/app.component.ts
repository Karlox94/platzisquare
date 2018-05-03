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
      { active: true, name: 'Florería la Gardenia', distance: 10, close: 1, plan: 'free' },
      { active: true, name: 'Donas la pasadita', distance: 25, close: 3, plan: 'premium' },
      { active: true, name: 'Veterinaria Huellitas Felices', distance: 54, close: 1, plan: 'free' },
      { active: false, name: 'Sushi Suhiroll', distance: 29, close: 1, plan: 'premium' },
      { active: true, name: 'Hotel la Gracia', distance: 18, close: 2, plan: 'premium' },
      { active: false, name: 'Zapatería el Clavo', distance: 5, close: 3, plan: 'free' }
    ]
  }
}
