Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Buttons', () => {
    it('Переход в нужный раздел', () => {
        cy.visit('/');
        cy.get('h5').contains('Elements').click();
        cy.contains('Buttons').click();
    })
    it('Дабл клик', () => {
        cy.get('[id="doubleClickBtn"]').dblclick();
        cy.get('[id="doubleClickMessage"]').should('have.text', 'You have done a double click');
    })
    it('Райт клик', () => {
        cy.get('[id="rightClickBtn"]').rightclick();
        cy.get('[id="rightClickMessage"]').should('have.text', 'You have done a right click');
    })
    //ГОВНО
    it('Лефт клик', () => {
        cy.get('button').contains('Click Me').and('not.have.id', 'doubleClickBtn').and('not.have.id', 'rightClickBtn').click();
        cy.get('[id="dynamicClickMessage"]').should('have.text', 'You have done a dynamic click');
    })
})