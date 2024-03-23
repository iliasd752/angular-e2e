import {test, expect} from "@playwright/test";
import {locators} from "../src/features/display-data/locators/locators";


test('has title and displays a table', async ({page}) => {
    await page.goto('http://localhost:4200/display-data');

    const pageTitle = await page.title();

    expect(pageTitle).toBe('AngularE2e');

    const tableExists = await page.$('table');

    expect(tableExists).toBeTruthy();
  }
);

/*test('table displays team and player data', async ({page}) => {

  await page.goto('http://localhost:4200/display-data');

  const playerItems = await page.$$(locators.listPlayerItem(1));

  const displayedPlayerIds = await Promise.all(playerItems.map(async item => {

    const playerIdElement = await item.$('[data-qa="player-id"]');

    return playerIdElement ? playerIdElement.textContent() : null;
    const expectedPlayerIds = players.filter(player => player.teamId === 1).map(player => player.id.toString());

  expect(displayedPlayerIds.filter(id => id !== null)).toEqual(expectedPlayerIds);

});
  }));*/

test('table displays team and player data', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:4200/display-data');

  // Find player items for team 1 using the data-qa attribute
  const playerItems = await page.$$(locators.listPlayerItem(1));

  // Extract displayed player IDs for team 1 only
  const displayedPlayerIds = await Promise.all(playerItems.map(async item => {
    // Check if the player item belongs to the correct team
    const teamIdElement = await item.$('[data-qa="team-id"]');
    const teamId = teamIdElement ? await teamIdElement.textContent() : null;

    if (teamId === '1') {
      // Extract player ID if the player belongs to Team 1
      const playerIdElement = await item.$('[data-qa="player-id"]');
      return playerIdElement ? await playerIdElement.textContent() : null;
    } else {
      return null; // Skip player items from other teams
    }
  }));

  // Filter out null values (player items from other teams) and verify displayed player IDs
  const expectedPlayerIds = displayedPlayerIds.filter(id => id !== null);
  expect(expectedPlayerIds).toMatchSnapshot();
});




