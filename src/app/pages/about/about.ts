import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {
  verInfo = false;
  myName: string = 'camila';
  information = {
    age: 20,
    email: 'camila@gmail.com',
    phone: 123456789,
    nationality: 'mexican',
    favorite_framework: 'angular',
  };
  verInformacion() {
    this.verInfo = !this.verInfo;
  }
  favoriteArtists: string[] = [
    'Charli XCX',
    'Gracie Abrahams',
    'Taylor Swift',
    'Lana Del Rey',
    'Billie Eilish',
  ];
}
