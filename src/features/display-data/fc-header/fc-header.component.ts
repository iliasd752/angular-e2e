import {Component, inject} from '@angular/core';
import {TeamStore} from "../store/teams.store";
import {TeamInfoComponent} from "./team-info/team-info.component";

@Component({
  selector: 'app-fc-header',
  standalone: true,
  imports: [
    TeamInfoComponent
  ],
  templateUrl: './fc-header.component.html',
  styleUrl: './fc-header.component.scss'
})
export class FcHeaderComponent {

  store = inject(TeamStore);

  async onLoadAll() {
    await this.store.loadAll();
  }


}
