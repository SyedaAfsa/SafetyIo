// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

class MainPage {

	launchWebsite(){
		cy.visit('/',{
			onBeforeLoad(win){
				Object.defineProperty(win.navigator, 'language', { value: 'de-EN' });
      			Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
      			Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
      		},
      		headers: {
      			'Accept-Language': 'en',
      		}
      	});
	}

	changeLocation(){
		cy.wait(3000)
		cy.get('[data-testid^=languageSelectorStatus]').click({ force : true })
  		cy.get('[class^=Disclosure--SummaryDefault--3xAWB]').contains('Americas').click({ force : true})
		cy.get('[class^=LanguageSelector--Content--YveVL]').contains('United States | English').click({ force : true})
	}

	goToMainMenu(){
		cy.wait(3000)
		cy.get('[id^=MainMenuTrigger]').click({ force : true })
		cy.get('[id^=MainMenuTrigger').should('have.attr','aria-expanded','true')
	}
}

export default new MainPage
