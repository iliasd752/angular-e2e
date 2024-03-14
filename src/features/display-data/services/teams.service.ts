import {Injectable} from "@angular/core";
import {TEAM} from "../models/team-data";
import {players} from "../models/player-data";


@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  async getTeams() {
    await sleep(1000);
    return TEAM;
  }

  async getPlayers() {
    await sleep(1000);
    return players;
  }
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
