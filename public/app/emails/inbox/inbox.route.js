angular.module('MailClient.app.emails.inbox.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.inbox', {
                url: '/inbox',
                views: {
                    'content@': {
                        templateUrl: 'app/emails/inbox/inbox.html',
                        controller: 'InboxCtrl as InboxCtrl'
                    }
                }

            });
    });