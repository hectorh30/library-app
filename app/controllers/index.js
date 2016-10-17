import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Hola mundo',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {
        email: email,
        dateSent: new Date()
      });

      newInvitation.save().then((response) => {
        this.set(
          'responseMessage',
          `Thank you! We saved your email address with the following id: ${response.get('id')}`
        );
        this.set('emailAddress', '');
      });
    }
  }
});
