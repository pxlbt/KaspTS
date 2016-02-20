var hashParam = function() {
  return function(type, hash) {
    var hashParam = hash.split(':');
    return hashParam[0] === type && hashParam[1] ? +hashParam[1] : false;
  }
}

module.exports = hashParam
