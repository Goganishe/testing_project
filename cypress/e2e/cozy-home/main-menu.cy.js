Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Practice Form', () => {
    it('Переход в нужный раздел', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://cozyhome-stage-omni.dclouds.ru/', {
            auth: 
            {
                username: 'admin',
                password: 'admin'
            },
        });
        cy.get('script[src*="metrika"]').invoke('remove');
        cy.get('[data-role="city-confirm-accept-btn"]').click();
        /*cy.get('ul>li').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.someMethod() === 'something') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } else {
              // do something else
            }
          })*/
    })
})