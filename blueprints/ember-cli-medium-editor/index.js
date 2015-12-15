/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('medium-editor', '5.11.0');
  }
};
