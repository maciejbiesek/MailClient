angular.module('MailClient.app.viewMail.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.viewMail', {
                url: '/view/:mailId',
                views: {
                    'content@': {
                        templateUrl: 'app/viewMail/viewMail.html',
                        controller: 'ViewMailCtrl as ViewMailCtrl'
                    }
                }
            });
    });