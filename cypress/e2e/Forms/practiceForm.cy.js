Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Practice Form', () => {
    it('Переход в нужный раздел', () => {
        cy.visit('/');
        cy.get('h5').contains('Forms').click();
        cy.contains('Practice Form').click();
    })
    it('Заполнение имени, фамилии и почты', () => {
        cy.get('[placeholder="First Name"]').type('Бомжиха');
        cy.get('[placeholder="Last Name"]').type('Викторовна');
        cy.get('[placeholder="name@example.com"]').type('bomzh@vik.com');
    })
    it('Тыкаем радиокнопку', () => {
        cy.get('#gender-radio-3').click();
    })
    it('Вводим номер телефона', () => {
        cy.get('#userNumber').type('1212121212');
    })
    it('Указываем субъекты', () => {
        cy.get('#subjectsInput').type('Первый и второй объекты');
    })
    it('Указываем хобби', () => {
        cy.get('#hobbies-checkbox-1').click();
        cy.get('#hobbies-checkbox-2').click();
        cy.get('#hobbies-checkbox-3').click();
    })
    it('Загружаем пикчу', () => {
        cy.get('#uploadPicture').selectFile('cypress/fixtures/images.jpg');
    })
    it('Пишем адрес', () => {
        cy.get('#currentAddress').type('Адрес дом какой то на улице этого как его');
    })
    it('Пишем адрес', () => {
        cy.get('#currentAddress').type('Адрес дом какой то на улице этого как его');
    })
})