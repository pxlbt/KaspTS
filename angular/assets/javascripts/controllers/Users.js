var angular = require('angular');

var UsersController = function($scope, $http, $location, hashParam, getUsers) {
  var tmpUserData;
  var page = 1;

  var getUserList = function(page) {
    getUsers(page)
    .then(function successCallback(response) {
      $scope.users = tmpUserData = response.data
      viewTypeChange()
    })
  }

  var setListTemplate = function() {
    $scope.listTemplate = 'partials/users_list' + ($scope.form.viewType) + '.html'
  }

  var viewTypeChange = function() {
    if (+$scope.form.viewType === 3) {
      $scope.users = _.groupBy($scope.users.filter((item) => item.group), 'group')
    } else {
      $scope.users = tmpUserData
    }
    window.location.hash = "type:" + $scope.form.viewType
    setListTemplate()
  }

  $scope.loadNextPage = function() {
    getUserList(++page)
  }

  $scope.typeOptions = [
    { name: 'Список', value: 1 },
    { name: 'Панель плиток', value: 2 },
    { name: 'а-ля trello', value: 3}
  ];

  $scope.form = {viewType : hashParam('type', $location.hash()) || $scope.typeOptions[0].value};
  $scope.viewTypeChange = viewTypeChange

  getUserList()
}

module.exports = UsersController;
