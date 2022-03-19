import creds from '../data/creds.json';

describe('example to-do app', () => {

    const username = creds.emailAddress;
    const password = creds.password;

    beforeEach(() => {  
        //This did not work
    //   cy.visit('/', {
    //       auth: {
    //           username,
    //           password
    //       },
    //   }).its('status').should('equal', 200);

    // This did not work neither 
        // cy.request({
        //     method: 'POST',
        //     url: '/account/login', // baseUrl will be prepended to this url
        //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        //     body: {
        //         username,
        //         password
        //     },
        // })
        // just to prove we have a session
        // cy.getCookie('cypress-session-cookie').should('exist')
        
        // Old school method thru the UI
        cy.visit('/account/login');
        //login with the UI
        cy.wait(500);
        cy.get('input#email').should('be.enabled');
        cy.get('input#email').type(username);
        cy.wait(500);
        cy.get('input#password').should('be.enabled');
        cy.get('input#password').type(password);
        cy.wait(500);
        cy.get('button#form-submit-button').should('be.enabled').click();
    })
  
    it('displays two todo items by default', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('my-account-popover-name').should('have.text', 'AUTOMATION')
  
    //   // We can go even further and check that the default todos each contain
    //   // the correct text. We use the `first` and `last` functions
    //   // to get just the first and last matched elements individually,
    //   // and then perform an assertion with `should`.
    //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
  
    // it('can add new todo items', () => {
    //   // We'll store our item text in a variable so we can reuse it
    //   const newItem = 'Feed the cat'
  
    //   // Let's get the input element and use the `type` command to
    //   // input our new list item. After typing the content of our item,
    //   // we need to type the enter key as well in order to submit the input.
    //   // This input has a data-test attribute so we'll use that to select the
    //   // element in accordance with best practices:
    //   // https://on.cypress.io/selecting-elements
    //   cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
  
    //   // Now that we've typed our new item, let's check that it actually was added to the list.
    //   // Since it's the newest item, it should exist as the last element in the list.
    //   // In addition, with the two default items, we should have a total of 3 elements in the list.
    //   // Since assertions yield the element that was asserted on,
    //   // we can chain both of these assertions together into a single statement.
    //   cy.get('.todo-list li')
    //     .should('have.length', 3)
    //     .last()
    //     .should('have.text', newItem)
    // })
  
  })