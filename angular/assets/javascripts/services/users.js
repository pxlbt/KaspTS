var getUsers = function($http) {
  return function(page) {
    return $http.get('/api/users', {params: { page: page}})
  }
}

module.exports = getUsers
