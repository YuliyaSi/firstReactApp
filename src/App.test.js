// import { render, screen } from '@testing-library/react';
import {SamuraiJSApp} from './App';
import ReactDOM from "react-dom";

// test('renders learn react link', () => {
//   render(<SamuraiJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('render withour crashing', function () {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
