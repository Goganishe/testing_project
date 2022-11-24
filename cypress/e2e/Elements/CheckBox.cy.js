Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Check Box', () => {
    it('Проверка массового открытия и закрытия', () => {
        cy.visit('/');
        cy.get('h5').contains('Elements').click();
        cy.contains('Check Box').click();
        cy.get('[title="Expand all"]').click();
        cy.get('[title="Collapse all"]').click();
    })
    //ГОВНО
    it('Проверка последовательного открытия и закрытия', () => {
        cy.get('button svg:first-child').contains('.rct-icon-expand-close').click();
    })
})