import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('medium-content-textarea', 'Integration | Component | medium content textarea', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{medium-content-textarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#medium-content-textarea}}
      template block text
    {{/medium-content-textarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
