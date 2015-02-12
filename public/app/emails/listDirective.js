angular.module('MailClient.app.emails.listDirective', [])

    .directive('listDirective', function () {
		return {            
			restrict: 'AE',
			replace: true,
			scope: {
				emails: '=',
				searchTerm: '='
			},
			template: '<ul id = "list"></ul>',
			link: function (scope, element, attrs) {
				var list = document.getElementById('list');
				scope.$watchGroup(['emails','searchTerm'], function(newValue) {
					list.innerHTML = "";
					console.log(newValue);
					var searchTerm = newValue[1];
					var searchBy = ["title", "content", "sender"];
					var display;
					var messageToDisplay;
					var reg = new RegExp("(" + searchTerm + ")","gim");
					if (newValue !== undefined) {
						newValue[0].forEach(function(message) {
							display = searchTerm==null;
							messageToDisplay = {};
							var li = document.createElement("li");
							if (message.read === false) {
								li.setAttribute("class", "unread");
							}
							for (var j in searchBy){
								var matches = reg.test(message[searchBy[j]]);
								console.log(matches)
								if (matches){
									display = true;
								}
								messageToDisplay[searchBy[j]] = message[searchBy[j]].replace(reg, '<strong>$1</strong>');
							}
							if (!display){
								li.classList.add("hidden");
							}
							li.innerHTML = messageToDisplay.title;
							list.appendChild(li);
						});
					}	
				});
			}
		};
			
	});