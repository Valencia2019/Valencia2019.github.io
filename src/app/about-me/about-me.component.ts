import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
styleUrls: ['./about-me.component.css'],
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule]
})
export class AboutMeComponent {

}
