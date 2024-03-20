import {beforeEach} from "node:test";
import TablePage from "./support/table-page";


describe('Table Display', () => {
  beforeEach(() => {
    TablePage.visit();
  });

  it('should display the table', () => {
    TablePage.getTable().should('exist');
    TablePage.getTable().find('table').should('exist');
    TablePage.getTable().find('thead').should('exist');
    TablePage.getTable().find('tbody').should('exist');

  });
})
