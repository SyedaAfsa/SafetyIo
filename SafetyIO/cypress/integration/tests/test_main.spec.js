// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import menu from '../pages/main_page'
import privacy from '../pages/privacy_page'

describe('Main Screen tests', () =>{

	before(()=>{
		menu.launchWebsite()
		menu.changeLocation()
	})

	it ('Open main menu',() =>{		
		menu.goToMainMenu()
	})

	it('Go To Privacy Policy Page', () =>{
		privacy.goToPrivacyPage()
	})

	it('Verify Point 14 using Contains' , () => {
		privacy.verifyPoint14UsingContains()
	})

	it('Verify Point 14 using Equals' , () => {
		privacy.verifyPoint14UsingEquals()
	})
})