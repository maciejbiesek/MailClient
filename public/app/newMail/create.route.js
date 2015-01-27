angular.module('MailClient.app.newMail.create.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.create', {
                url: '/create',
                views: {
                    'content@': {
                        templateUrl: 'app/newMail/create.html',
                        controller: 'CreateCtrl as CreateCtrl'
                    }
                }
            });
    });