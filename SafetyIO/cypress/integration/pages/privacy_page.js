// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

var header = 'Lei Geral de Proteção de Dados Pessoais (LGPD) Notice '
var text2 = "\n\tLei Geral de Proteção de Dados Pessoais (LGPD) Notice\n\n\tThe Lei 13.709/ 2018 (Lei Geral de Proteção de Dados Pessoais, “LGPD”) requires certain disclosures that already are covered in our Privacy Policy.\n\n\tIn addition, please note that for the purposes of LGPD, the data controller is TWC Product and Technology, LLC, doing business as The Weather Company, an IBM business, which may be contacted at the email or address listed in Section 11 How to Contact Us.\n\n\tThe relevant Data Protection Officer may be contacted at privacy@weather.com.\n\n\tData Rights: Under LGPD, you can request to access your personal data, receive confirmation of the existence of processing and be able to request to receive confirmation about the private and public entities with whom the controller shares the data, and obtain a portable copy of your data. These rights will be fulfilled when you choose to Request a Portable Copy of Data. You also have the right to object to the processing when data is processed unlawfully and to request correction, anonymization, blocking and deletion of unnecessary, excessive data or data processed unlawfully related to your stored preferences and your use of the Services. These rights will be fulfilled when you choose to Delete Data. You can exercise your data rights on weather.com by clicking here and on the iOS or Android app by navigating to “Data Rights” under “Settings” in the app menu. Please note that you must make any requests from each browser or device where you access the Services.\n\n\tInternational Transfers: If you are located where LGPD applies, information that we collect (including through cookies) will be processed and stored in the United States. The appropriate cross-border transfer method governing personal data included in such transfers is the EU Standard Contractual Clauses agreement pursuant to EC Decision 2010/87/EU.\n\n\tProcessing Basis: Our processing of your personal data in order to provide you with the Services will typically be based on one of the following processing bases (pursuant to Article 7 LGPD):\n\n\t\n\t\tBecause you have provided us with your specific, informed, freely-given, and unambiguous consent; or\n\t\tBecause the processing is necessary for the purposes of the legitimate interests pursued either by us or by a third party and such legitimate interests are not overridden by your privacy and related rights as an individual. Our legitimate interests include the provision of market-leading weather-related products and services, including the Services.\n\t\n\t"
class PrivacyPage {

	goToPrivacyPage(){

		cy.get('[data-testid^=privacyPolicy]').click()
		cy.url().should('eq', 'https://weather.com/en-US/twc/privacy-policy') // => true
	}

	goToPoint14(){

		cy.contains(header).click()
	}

	verifyPoint14UsingContains(){

		this.goToPoint14()
		cy.readFile('policy_data.json').then((policy) => {
			cy.get(Cypress.env('policy')).contains(policy.policyTextHeader)
			cy.get(Cypress.env('policy')).contains(policy.policyText1)
			cy.get(Cypress.env('policy')).contains(policy.policyText2)
			cy.get(Cypress.env('policy')).contains(policy.policyText3)
			cy.get(Cypress.env('policy')).contains(policy.policyRights)
			cy.get(Cypress.env('policy')).contains(policy.policyTransfers)
			cy.get(Cypress.env('policy')).contains(policy.policyBasis)
			cy.get(Cypress.env('policy')).contains(policy.policyBullet1)
			cy.get(Cypress.env('policy')).contains(policy.policyBullet2)
		})
	}

	verifyPoint14UsingEquals(){
		this.goToPoint14()
		cy.get(Cypress.env('policy')).invoke('text').then((text1)=>{
			console.log(text1)
			expect(text1).to.equal(text2)
		})
	}
}

export default new PrivacyPage
