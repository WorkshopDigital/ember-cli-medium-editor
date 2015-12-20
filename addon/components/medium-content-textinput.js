import Ember from 'ember';
import MediumContent from '../mixins/medium-content';

export default Ember.Component.extend(MediumContent, {

	didInsertElement: function() {
		this._super();

		return this.get('editor')
		.setContent(this.get('value'));
	}
});