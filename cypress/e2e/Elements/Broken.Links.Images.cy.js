Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Text Box', () => {
    it('Переход в нужный раздел', () => {
        cy.visit('/');
        cy.get('h5').contains('Elements').click();
        cy.contains('Broken Links - Images').click();
    })
    it('Проверка первого изображения', () => {
        cy.get('[src="/images/Toolsqa.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0);
    })
    it('Проверка второго изображения', () => {
        cy.get('[src="/images/Toolsqa_1.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').should('be.equal', 0);
    })
    it('Проверка первой ссылки', () => {
        cy.get('[href="http://demoqa.com"]').and('have.text', 'Click Here for Valid Link').click();
        cy.location('pathname').should('eq', '/')
        cy.go('back');
    })
    it('Проверка второй ссылки', () => {
        cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').and('have.text', 'Click Here for Broken Link').click();
        cy.location().should('eq', 'http://the-internet.herokuapp.com/status_codes/500');
        cy.go('back');
    })
})