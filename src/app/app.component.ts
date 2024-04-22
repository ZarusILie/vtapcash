import { Component } from '@angular/core';
// import { OnInit } from '@angular/core';
// import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
// export class AppComponent implements OnInit {
//   title = 'tapcash';

//   ngOnInit(): void {
//     initFlowbite();
//   }
// }

export class AppComponent{
  title = 'tapcash';
}