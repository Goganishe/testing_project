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
        cy.get('li')
            .should('have.class', 'rct-node-collapsed')
            .each(($li, index, $lis) => {
                return $li.click();
            })
            .then(($lis) => {
                expect($lis).to.have.class('rct-node-collapsed')
            })
    })
})