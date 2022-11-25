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
        cy.get('[for="gender-radio-3"]').click();
    })
    it('Вводим номер телефона', () => {
        cy.get('#userNumber').type('1212121212');
    })
    it('Указываем дату рождения', () => {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('February').should('have.value', '1');
        cy.get('.react-datepicker__year-select').select('1995').should('have.value', '1995');
        cy.get('[class*=day--019]').click();
    })
    it('Указываем субъекты', () => {
        cy.get('#subjectsInput').type('Comput').type('{enter}');
    })
    it('Указываем хобби', () => {
        cy.get('[for="hobbies-checkbox-1"]').click();
        cy.get('[for="hobbies-checkbox-2"]').click();
        cy.get('[for="hobbies-checkbox-3"]').click();
    })
    it('Загружаем пикчу', () => {
        cy.get('#uploadPicture').selectFile('cypress/fixtures/images.jpg');
    })
    it('Пишем адрес', () => {
        cy.get('#currentAddress').type('Адрес дом какой то на улице этого как его');
    })
    it('Выбираем штат и город', () => {
        cy.get('#state').click();
        cy.get('#react-select-3-option-1').type('{enter}');
        cy.get('#city').click();
        cy.get('#react-select-4-option-1').type('{enter}');
    })
    it('Отправляем форму', () => {
        cy.get('#submit').click({ force: true });
    })
    it('Закрываем форму', () => {
        cy.get('#closeLargeModal').click();
    })
})