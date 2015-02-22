angular.module("MailClient", [
    'ui.router',

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
	
	'MailClient.app.emails.listDirective',
	
	'MailClient.app.deleteMail.delete.route',
	'MailClient.app.deleteMail.deleteMailCtrl'

]);