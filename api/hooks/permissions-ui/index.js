import Marlinspike from 'marlinspike'

class PermissionsUI extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }

}

export default Marlinspike.createSailsHook(PermissionsUI);
