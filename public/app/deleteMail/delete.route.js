angular.module('MailClient.app.deleteMail.delete.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.deleteMail', {
                url: '/delete/:mailId',
                views: {
                    'content@': {
                        controller: 'deleteMailCtrl as deleteMailCtrl'
                    }
                }
            });
    });