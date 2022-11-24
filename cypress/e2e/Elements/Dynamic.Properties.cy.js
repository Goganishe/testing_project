Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Dynamic Properties', () => {
    it('Переход в нужный раздел', () => {
        cy.visit('/');
        cy.get('h5').contains('Elements').click();
        cy.contains('Buttons').click();
    })
})