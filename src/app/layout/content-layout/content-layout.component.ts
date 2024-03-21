import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [
    NavComponent,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss'
})
export class ContentLayoutComponent {

}
