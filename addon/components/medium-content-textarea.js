import Ember from 'ember';
import MediumBase from './medium-base';

export default MediumBase.extend({

	tagName: 'textarea',

	value: 'sfgfddfhdghghgfh',

  editableInput(data, editable) {
  	debugger;
		return this.sendAction('data', editable.textContent);
  }

});
