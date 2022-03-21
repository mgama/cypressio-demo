import creds from '../data/creds.json';

describe('Login and go to User profile', () => {

    const username = creds.emailAddress;
    const emailAddress = creds.emailAddress;
    const password = creds.password;

    //Sample solution for issue with waiting for the app to start or pate to load 
    //https://www.cypress.io/blog/2018/02/05/when-can-the-test-start/
    let appHasStarted
    function spyOnAddEventListener (win) {
        // win = window object in our application
        const addListener = win.EventTarget.prototype.addEventListener
        win.EventTarget.prototype.addEventListener = function (name) {
            if (name === 'change') {
            // web app added an event listener to the input box -
            // that means the web application has started
            appHasStarted = true
            // restore the original event listener
            win.EventTarget.prototype.addEventListener = addListener
            }
            return addListener.apply(this, arguments)
        }
    }

    function waitForAppStart() {
        // keeps rechecking "appHasStarted" variable
        return new Cypress.Promise((resolve, reject) => {
          const isReady = () => {
            if (appHasStarted) {
              return resolve()
            }
            setTimeout(isReady, 0)
          }
          isReady()
        })
      }

    beforeEach(() => {  
      //Tried different recipes for login described here: 
      //https://github.com/cypress-io/cypress-example-recipes#logging-in-recipes
        //This did not work
      // cy.visit('/account/login/', {
      //     auth: {
      //         username,
      //         password
      //     },
      // }).its('status').should('equal', 200);

    // This did not work neither 
        // cy.request({
        //     method: 'POST',
        //     url: '/account/login', // baseUrl will be prepended to this url
        //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        //     body: {
        //         username,
        //         password
        //     },
        // });
        
        // just to prove we have a session
        // cy.getCookie('cypress-session-cookie').should('exist')

        // cy.visit('/');
        
        // Old school method thru the UI
        // cy.visit('/account/login', {
        //     onBeforeLoad: spyOnAddEventListener
        //   }).then(waitForAppStart);

        // Having issues with cy.type. Found a public bug 
        // https://github.com/cypress-io/cypress/issues/3817

        cy.visit('/account/login');
        cy.intercept('/account/login/**');
        //login with the UI
        // cy.wait(500);
        cy.get('input#email')
          .should('be.enabled')
          .click()
          .text(username)
          .should('have.value', username)
        // cy.wait(1000);
        cy.get('input#password')
          .should('be.enabled')
          // .click()
          .text(password)
          .should('have.value', password)
        // cy.wait(1000);
        cy.get('button#form-submit-button')
          .should('be.enabled')
          // .trigger("click");
          .click();
        cy.intercept('/account#');
        // cy.waitUntil(() => cy.url().should('contain', 'account#/'));
    })
  
    it('logins properly and displays Automation user Pop-over', () => {
      cy.get('my-account-popover-name')
        .should('be.visible')
        .should('have.text', 'AUTOMATION');

    })
  
  })