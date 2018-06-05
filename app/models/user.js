import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  kudosGiven: DS.attr('number'),
  kudosAvailable: DS.attr('number'),
});
