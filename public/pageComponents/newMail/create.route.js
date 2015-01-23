angular.module('MailClient.pageComponents.newMail.create.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.create', {
                url: '/create',
                views: {
                    'content@': {
                        templateUrl: 'pageComponents/newMail/create.html',
                        controller: 'CreateCtrl as CreateCtrl'
                    }
                }
            });
    });