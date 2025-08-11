describe('OrangeHRM Login Test', () => {
    it('should log in with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Enter username
        cy.get('input[name="username"]').type('Admin');

        // Enter password
        cy.get('input[name="password"]').type('admin123');

        // Click login button
        cy.get('button[type="submit"]').click();

        // Assert successful login by checking for dashboard element
        cy.url().should('include', '/dashboard');
        cy.get('h6').contains('Dashboard').should('be.visible');
    });
});