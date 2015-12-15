import Ember from 'ember';

export default Ember.Mixin.create({


  allowMultiParagraphSelection: true,


  buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],

  
  diffLeft: 0,


  diffTop: -10,


  firstButtonClass: 'medium-editor-button-first',


  lastButtonClass: 'medium-editor-button-last',


  standardizeSelectionStart: false,


  static: false,

  /* options which only apply when static is true */
  align: 'center',


  sticky: false,


  updateOnEmptySelection: false
});
