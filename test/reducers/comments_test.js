import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';
import { equal } from 'assert';

describe('Comments Reducer', () => {

  it('handles action with unkown type', () => {

    // The default returning state is being tested
    // in this spec.

    // the result of calling commentReducer will be an Array
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);

    // for strings or number we use .to.equal()
    // for our case .to.eql([]) is the better one b/c
    // it clearly states the returning array is empty.

    // we are passing {} for action parameter and in the
    // comments reducer in switch {}.type will be undefined.
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(commentReducer([], action)).to.eql(['new comment'])

  });

});