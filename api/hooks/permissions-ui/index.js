import Marlinspike from 'marlinspike'

class PermissionsUI extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }

  routes () {
    return {
      'GET /permissions/edit': 'PermissionsUIController.foo'

    }
  }

}

export default Marlinspike.createSailsHook(PermissionsUI);
