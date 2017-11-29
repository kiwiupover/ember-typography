import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | font is loaded');

test('font link is loaded with CSS_KEY', function(assert) {
  let expectedUrl = 'https://cloud.typography.com/6000000/6000000/css/fonts.css';
  visit('/');

  andThen(() => {
    assert.equal($('[href^="https://cloud.typography.com"]').attr('href'), expectedUrl);
  });
});
