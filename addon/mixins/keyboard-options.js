import Ember from 'ember';

export default Ember.Mixin.create({

	
  /* This example includes the default options for keyboardCommands,
     if nothing is passed this is what it used */
  commands: [
      {
          command: 'bold',
          key: 'b',
          meta: true,
          shift: false
      },
      {
          command: 'italic',
          key: 'i',
          meta: true,
          shift: false
      },
      {
          command: 'underline',
          key: 'u',
          meta: true,
          shift: false
      }
  ]

});
