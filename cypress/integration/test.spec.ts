describe("Full reload", () => {
  it("test to reproduce full reload", () => {
    // Simulate slow network
    cy.intercept({ method: "GET" }, (req) => {
      req.continue((res) => {
        res.setThrottle(0.05);
      });
    });
    cy.visit("http://localhost:3000");
    cy.get(".NoParamsButton").click();
    cy.get("body").should("contain.text", "NoParams Page");
  });
});
