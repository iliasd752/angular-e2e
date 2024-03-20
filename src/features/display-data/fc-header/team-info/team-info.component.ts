import {Component, inject, Input} from '@angular/core';
import {TeamStore} from "../../store/teams.store";

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss'
})
export class TeamInfoComponent {

  @Input() id!: number;

  store = inject(TeamStore);
}
