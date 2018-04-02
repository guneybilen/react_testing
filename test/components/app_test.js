import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App (this string is for documentation)' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target
  it('renders something', () => {
    //Use 'expect' to make an assertion about the target 
    //(App Component in this describe block)
    expect(component).to.exist;
  });

  /* 
  it('shows the correct text (this string is for documentation)', () => {    
    expect(component).to.contain('React simple starter');
   });  
  */

  it('shows a comment box', () => {    
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {    
    expect(component.find('.comment-list')).to.exist;
  });


});
