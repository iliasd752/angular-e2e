import {test, expect} from "@playwright/test";
import {players} from "../src/features/display-data/models/player-data";
import {locators} from "../src/features/display-data/locators/locators";


test('has title and displays a table', async ({page}) => {
    await page.goto('http://localhost:4200/display-data');

    const pageTitle = await page.title();

    expect(pageTitle).toBe('AngularE2e');

    const tableExists = await page.$('table');

    expect(tableExists).toBeTruthy();
  }
);

test('table displays team and player data', async ({page}) => {

  await page.goto('http://localhost:4200/display-data');

  const playerItems = await page.$$(locators.listPlayerItem(1));

  const displayedPlayerIds = await Promise.all(playerItems.map(item => item.textContent()));

  const expectedPlayerIds = players.filter(player => player.teamId === 1).map(player => player.id.toString());

  expect(displayedPlayerIds).toEqual(expectedPlayerIds);

});

