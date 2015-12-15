import Ember from 'ember';

export default Ember.Mixin.create({

  /* This example includes the default options for paste,
     if nothing is passed this is what it used */
  forcePlainText: true,


  cleanPastedHTML: false,


  cleanReplacements: [],


  cleanAttrs: ['class', 'style', 'dir'],

  
  cleanTags: ['meta']	
});
