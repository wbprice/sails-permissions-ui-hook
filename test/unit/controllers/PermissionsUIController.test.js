var assert = require('assert');
var request = require('supertest');

var adminAuth = {
  Authorization: 'Basic YWRtaW5AZXhhbXBsZS5jb206YWRtaW4xMjM0'
};

var registeredAuth = {
  Authorization: 'Basic bmV3dXNlcjp1c2VyMTIzNA=='
};

describe('PermissionsUIController', function() {

  it('An admin should be able to open the PermissionsUI', function(done) {

    request(sails.hooks.http.app)
      .get('/permission/edit')
      .set('Authorization', adminAuth.Authorization)
      .expect(200, done);

  });

  it('A public user should not be able to open the PermissionsUI', function() {

  });

});
