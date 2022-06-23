/* eslint-disabled import/export */
import { cleanup, render, RenderOptions } from "@testing-library/react";
import React from "react";
import { afterEach } from "vitest";

// Depois de cada teste limpar o contexto de fn, componentes e variaveis
afterEach(() => {
  cleanup();
});

const customRender = (
  ui: React.ReactElement,
  options: RenderOptions | {} = {}
) => {
  render(ui, {
    //caso haja algum contexto especifico que o componente tenha de acessar //durante o teste ele e exposto aqui
    wrapper: ({ children }) => children,
    ...options,
  });
};

// re exporta a biblioteca com as modificacoes, para ser que o metodo possa ser // acessado globalmente
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// overriding o render
export { customRender as render };
