var app = angular.module("MailClient", [
    'ui.router',
    'LocalStorageModule',

    'MailClient.route',

    'MailClient.app.common.viewComponents.panel.panelCtrl',

    'MailClient.app.newMail.create.route',
    'MailClient.app.newMail.CreateCtrl',

    'MailClient.app.emails.sent.route',
    'MailClient.app.emails.sent.SentCtrl',

    'MailClient.app.emails.inbox.route',
    'MailClient.app.emails.inbox.InboxCtrl',

    'MailClient.app.viewMail.route',
    'MailClient.app.viewMail.viewMailCtrl', 

    'MailClient.app.settings.SettingsCtrl',
    'MailClient.app.settings.route',

    'MailClient.app.common.settings.colorsService',
    'MailClient.app.common.settings.reloadingTimeService',
	
	'MailClient.app.emails.listDirective',
	
	'MailClient.app.deleteMail.delete.route',
	'MailClient.app.deleteMail.deleteMailCtrl'

]);