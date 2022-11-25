Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Practice Form', () => {
    it('Переход в нужный раздел', () => {
        cy.visit('/');
        cy.get('h5').contains('Alerts, Frame & Windows').click();
        cy.get('li[id="item-1"]').contains('Alerts').click();
    })
    it('Работа с алертом', () => {
        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.get('#alertButton').click().then(stub.getCall(0)).to.be.calledWith('You clicked a button');
    })
})