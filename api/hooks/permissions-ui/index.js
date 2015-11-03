import Marlinspike from 'marlinspike'

class PermissionsUI extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }

  routes () {
    return {
      after: {
        'GET /permission/edit': function(req, res, next) {
          res.view('test');
        }
      }
    }
  }

}

export default Marlinspike.createSailsHook(PermissionsUI);
