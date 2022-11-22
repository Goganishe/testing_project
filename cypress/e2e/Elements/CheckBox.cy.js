Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Check Box', () => {
    it('Проверка массового открытия и закрытия', () => {
        cy.visit('https://demoqa.com/');
        cy.get('h5').contains('Elements').click();
        cy.contains('Check Box').click();
        cy.get('[title="Expand all"]').click();
        cy.get('[title="Collapse all"]').click();
    })
    it('Проверка последовательного открытия и закрытия', () => {
        while (cy.get('have.class', 'rct-node-collapsed')) {
            cy.get('[class="rct-node rct-node-parent rct-node-collapsed"]').click();
        }
    })
})