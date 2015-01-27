angular.module('MailClient.app.emails.sent.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.sent', {
                url: '/sent',
                views: {
                    'content@': {
                        templateUrl: 'app/emails/sent/sent.html',
                        controller: 'SentCtrl as SentCtrl'
                    }
                }
            });
    });