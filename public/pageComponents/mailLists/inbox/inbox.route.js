angular.module('MailClient.pageComponents.mailLists.inbox.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.inbox', {
                url: '/inbox',
                views: {
                    'content@': {
                        templateUrl: 'pageComponents/mailLists/inbox/inbox.html',
                        controller: 'InboxCtrl as InboxCtrl'
                    }
                }
            });
    });