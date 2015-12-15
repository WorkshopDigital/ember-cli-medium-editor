import Ember from 'ember';

export default Ember.Mixin.create({


	activeButtonClass: 'medium-editor-button-active',


	allowMultiParagraphSelection: true,


	buttonLabels: false,


	contentWindow: window,


	delay: 0,


	disableReturn: false,


	disableDoubleReturn: false,


	disableExtraSpaces: false,


	disableEditing: false,


	elementsContainer: false,


	extensions: {},


	ownerDocument: document,


	spellcheck: true,


	targetBlank: false,


	autoLink: false,


	imageDragging: false	

});
