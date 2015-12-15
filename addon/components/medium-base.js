import Ember from 'ember';
import coreOptions from '../mixins/core-options';
import toolbarOptions from '../mixins/toolbar-options';
import keyboardOptions from '../mixins/keyboard-options';
import pasteOptions from '../mixins/paste-options';
import placeholderOptions from '../mixins/placeholder-options';
import anchorFromOptions from '../mixins/anchor-form-options';


export default Ember.Component.extend(
	coreOptions,
	toolbarOptions,
	keyboardOptions,
	pasteOptions,
	placeholderOptions,
	anchorFromOptions, {


	classNames: ['editable'],


	focusOut() {
		return this.sendAction('userTyping', false);
	},


	keyDown(event) {

		if(!event.metaKey) {
			return this.sendAction('userTyping', true);
		}
	},
	

  willDestroyElement() {
    return this.$().destroy();
  }, 	


  didInsertElement: function() {
  	var component = this;

    new window.MediumEditor(component.$(), {
	    activeButtonClass: component.get('activeButtonClass'),
	    buttonLabels: component.get('buttonLabels'),
	    contentWindow: component.get('contentWindow'),
	    delay: component.get('delay'),
	    disableReturn: component.get('disableReturn'),
	    disableDoubleReturn: component.get('disableDoubleReturn'),
	    disableExtraSpaces: component.get('disableExtraSpaces'),
	    disableEditing: component.get('disableEditing'),
	    elementsContainer: component.get('elementsContainer'),
	    ownerDocument: component.get('ownerDocument'),
	    spellcheck: component.get('spellcheck'),
	    targetBlank: component.get('targetBlank'),
	    toolbar: {

        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
		    allowMultiParagraphSelection: component.get('allowMultiParagraphSelection'),
        buttons: component.get('buttons'),
        diffLeft: component.get('diffLeft'),
        diffTop: component.get('diffTop'),
        firstButtonClass: component.get('firstButtonClass'),
        lastButtonClass: component.get('lastButtonClass'),
        standardizeSelectionStart: component.get('standardizeSelectionStart'),
        static: component.get('static'),

        /* options which only apply when static is true */
        align: component.get('align'),
        sticky: component.get('sticky'),
        updateOnEmptySelection: component.get('updateOnEmptySelection')
	    },
	    anchorPreview: {
        /* These are the default options for anchor preview,
           if nothing is passed this is what it used */
        hideDelay: component.get('hideDelay'),
        previewValueSelector: component.get('previewValueSelector')
	    },
	    placeholder: {
        /* This example includes the default options for placeholder,
           if nothing is passed this is what it used */
        text: component.get('text')
	    },
	    anchor: {
        /* These are the default options for anchor form,
           if nothing is passed this is what it used */
        customClassOption: component.get('customClassOption'),
        customClassOptionText: component.get('customClassOptionText'),
        linkValidation: component.get('linkValidation'),
        placeholderText: component.get('placeholderText'),
        targetCheckbox: component.get('targetCheckbox'),
        targetCheckboxText: component.get('targetCheckboxText')
	    },
	    paste: {
        /* This example includes the default options for paste,
           if nothing is passed this is what it used */
        forcePlainText: component.get('forcePlainText'),
        cleanPastedHTML: component.get('cleanPastedHTML'),
        cleanReplacements: component.get('cleanReplacements'),
        cleanAttrs: component.get('cleanAttrs'),
        cleanTags: component.get('cleanTags')
	    },
	    keyboardCommands: {
	        /* This example includes the default options for keyboardCommands,
	           if nothing is passed this is what it used */
	        commands: component.get('commands')
	    },
			autoLink: component.get('autoLink'),
			imageDragging: component.get('imageDragging')	    	    	    	    	    	    	        	
    });
  },		
});
