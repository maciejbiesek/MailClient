angular.module("MailClient", [
    'ui.router',

    'MailClient.route',

    'MailClient.pageComponents.common.viewComponents.panel.panelCtrl',

    'MailClient.pageComponents.newMail.create.route',
    'MailClient.pageComponents.newMail.CreateCtrl',

    'MailClient.pageComponents.mailLists.sent.route',
    'MailClient.pageComponents.mailLists.sent.SentCtrl',

    'MailClient.pageComponents.mailLists.inbox.route',
    'MailClient.pageComponents.mailLists.inbox.InboxCtrl'

]);