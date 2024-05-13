import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  standalone: true,
  imports: [MatCardModule, MatTooltipModule, MatButtonModule]
})
export class AboutMeComponent {
  showAboutMeCard = true;

  //text for the about me card
  aboutMeText = `I appreciate you taking the time to learn more about me. My name is Valencia,
but I prefer V or Wolf. My pronouns are she/her and they/them. I received my
Bachelor's degree in Computer Science and I have been working professionally
in tech for 9 years. I live and work in the NYC metro area. When I'm not working,
you will find me gaming, hanging out with friends and family, writing creatively
or working on my personal growth. I love animals, laughter, and listening to people
talk about what they're passionate about. I prefer to work alone in my typical
day-to-day, but I welcome collaboration within my team and across teams,
the opportunity to mentor Jr. QA Engineers, and I'm never afraid to ask for help
or clarification when I need it.`;

//text for the my philosophy card
myPhilosophyText = `In my QA philosophy, I emphasize integrating quality measures from the project's outset.
It's not just about defect identification but active prevention through early collaboration, comprehensive
testing strategies, and adaptability. I advocate for a holistic approach, encompassing manual and automated
testing, performance testing, and clear documentation. Collaboration and open communication are crucial,
fostering a quality-driven culture across teams. Quality, to me, is not just defect absence but a reflection
of a well-crafted, user-centric solution.`;


  toggleCards() {
    this.showAboutMeCard = !this.showAboutMeCard;
  }
}
