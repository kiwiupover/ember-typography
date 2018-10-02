import $ from 'jquery';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | font is loaded', function(hooks) {
  setupApplicationTest(hooks);

  test('font link is loaded with CSS_KEY', async function(assert) {
    let expectedUrl = 'https://cloud.typography.com/6000000/6000000/css/fonts.css';
    await visit('/');

    assert.equal($('[href^="https://cloud.typography.com"]').attr('href'), expectedUrl);
  });
});
