import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('medium-content-editable', 'Integration | Component | medium content editable', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{medium-content-editable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#medium-content-editable}}
      template block text
    {{/medium-content-editable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
