/**
 * @jest-environment jsdom
 */


import { render } from "@testing-library/react";
import Buscar from "../components/Buscar";




describe('Prueba en <App/>', () => {
  test('El componente debe renderizar correctamente', () => {
   render( <Buscar/>)
 
  });
});