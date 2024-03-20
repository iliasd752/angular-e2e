import {Component, inject, OnInit} from '@angular/core';
import {FcHeaderComponent} from "./fc-header/fc-header.component";
import {FcPlayerComponent} from "./fc-player/fc-player.component";
import {TeamStore} from "./store/teams.store";

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [
    FcHeaderComponent,
    FcPlayerComponent
  ],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent implements OnInit {

  store = inject(TeamStore);

  ngOnInit() {
    this.getTeamsAndPlayers().then();
  }

  async getTeamsAndPlayers() {
    await this.store.loadAll();
  }
}
