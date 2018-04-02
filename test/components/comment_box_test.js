import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
import { Z_BLOCK } from 'zlib';

describe('CommentBox', () => {
 
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    // const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    // const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });


  // closely related tests should be in their own describe block.
  // beforeEach on top still going to run before the each it block
  // in the following describe blocks. After the top beforeEach
  // Mocha will run the following describe's child beforeEach.
  describe('entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });
  
    it('shows that text is in the textarea', () => {
      // const component = renderComponent(CommentBox);
      expect(component.find('textarea')).to.have.value('new comment');
    });
  
    it('when submitted clears the input', () => {
      // const component = renderComponent(CommentBox);
      // console.log(component);   // you will see the form is our component.
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  
  })
  
});