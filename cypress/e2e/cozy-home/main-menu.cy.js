Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Practice Form', () => {
  it('Переход по случайным разделам', () => {
    // Выбор нужного разрешения экрана
    cy.viewport(1920, 1080)

    // Вход на стейдж и авторизация
    cy.visit('https://cozyhome-stage-omni.dclouds.ru/', {
      auth:
      {
        username: 'admin',
        password: 'admin'
      }
    });

    // Выбор города
    cy.get('[data-role="city-confirm-accept-btn"]').click();

    // Клик по случайному разделу и возврат обратно
    cy.get('a[class*="js-menu-link"]')
      .should('be.visible')
      .then((_$a) => {
        const items = _$a.toArray()
        return Cypress._.sample(items)
      }).click()
    cy.go('back')

    // Наведение на случайный элемент верхнего меню
    cy.get('a[class*="js-menu-link"]')
      .then((_$a) => {
        const items = _$a.toArray()
        return Cypress._.sample(items)
      }).rightclick({ force: true })

    // Клик на случайный элемент выбранного элемента верхнего меню
    cy.get('li[itemprop="itemListElement"] a')
      .then((_$li) => {
        const items = _$li.toArray()
        return Cypress._.sample(items)
      }).click({ force: true })
    cy.go('back')

    // Наведение на случайный элемент верхнего меню
    cy.get('a[class*="js-menu-link"]')
      .then((_$a) => {
        const items = _$a.toArray()
        return Cypress._.sample(items)
      }).rightclick({ force: true })

    // Клик на случайный элемент выбранного элемента верхнего меню
    cy.get('li[itemprop="itemListElement"] a')
      .then((_$li) => {
        const items = _$li.toArray()
        return Cypress._.sample(items)
      }).click({ force: true })

    // Тыкаем по стрелочке в блоке пагинации несколько раз
    
  })
})