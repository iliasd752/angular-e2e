

class TablePage {
  visit() {
    cy.visit('/display-data');
  }

  getTable() {
    return cy.get('app-root app-display-data');
  }

  getTableRows() {
    return this.getTable().find('tbody tr');
  }
}

export default new TablePage();
