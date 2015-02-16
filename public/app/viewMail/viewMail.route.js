angular.module('MailClient.app.viewMail.route', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/viewMail/:mailId', {
        templateUrl: 'app/viewMail/viewMail.html',
        controller: 'ViewMailCtrl'
      })
  }]);