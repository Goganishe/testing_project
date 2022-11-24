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
    it('Проверка последовательного открытия и закрытия', () => {
        cy.get('svg').should('have.class', 'rct-icon-expand-close').each(($svg, index, $svgs) => {
                return $svg.click();
            })
            .then(($svgs) => {
                expect($svgs).to.have.class('rct-icon-expand-close');
            })
    })
})