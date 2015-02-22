angular.module('MailClient.app.common.viewComponents.panel.panelCtrl', [])

    .controller('PanelCtrl', ['$scope', 'colorsService',
    	function ($scope, colorsService) {

			$scope.colorsService = colorsService;

        }]);
