import {Component, inject} from '@angular/core';
import {TeamStore} from "../store/teams.store";
import {PlayerListComponent} from "./player-list/player-list.component";

@Component({
  selector: 'app-fc-player',
  standalone: true,
  imports: [
    PlayerListComponent
  ],
  templateUrl: './fc-player.component.html',
  styleUrl: './fc-player.component.scss'
})
export class FcPlayerComponent {

  store = inject(TeamStore);

  async onLoadAll() {
    await this.store.loadAll();
  }
}
