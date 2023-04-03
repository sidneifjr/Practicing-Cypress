// Ignora erros do browser, do tipo "exception"; assim, o teste não é interrompido.
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});