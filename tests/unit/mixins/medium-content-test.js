import Ember from 'ember';
import MediumContentMixin from '../../../mixins/medium-content';
import { module, test } from 'qunit';

module('Unit | Mixin | medium content');

// Replace this with your real tests.
test('it works', function(assert) {
  let MediumContentObject = Ember.Object.extend(MediumContentMixin);
  let subject = MediumContentObject.create();
  assert.ok(subject);
});
