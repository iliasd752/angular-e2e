import {TeamModel} from "../models/team.model";
import {PlayerModel} from "../models/player.model";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {inject} from "@angular/core";
import {TeamsService} from "../services/teams.service";


type TeamState = {
  team: TeamModel[];
  players: PlayerModel[];
}

const initialState: TeamState = {
  team: [],
  players: []
}

export const TeamStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (store, teamsService = inject(TeamsService)) => ({

      async loadAll() {
        patchState(store);

        const team = await teamsService.getTeams();
        const players = await teamsService.getPlayers();
        console.log(players);

        patchState(store, {team, players})
      },
    })
  )
);
