angular.module('MailClient.app.emails.inbox.InboxCtrl', [])

    .controller('InboxCtrl', ['$scope', 'httpService', 'contentService',
        function ($scope, httpService, contentService) {

            this.contentService = contentService;
            httpService.loadData('/emails', this, this.contentService.loadList, 'inbox');

            $scope.in = contentService.inbox;
        }]);