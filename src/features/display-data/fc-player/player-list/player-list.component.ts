import {Component, inject, Input} from '@angular/core';
import {players} from "../../models/player-data";
import {TeamStore} from "../../store/teams.store";
import {name} from "express";

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {

  @Input() teamId!: number;
  players = players;

  store = inject(TeamStore);
    protected readonly name = name;
}
