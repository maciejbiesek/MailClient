angular.module('MailClient.app.emails.listDirective', [])

    .directive('listDirective', function () {
		return {            
			restrict: 'AE',
			replace: true,
			scope: {
				emails: '=',
				searchTerm: '='
			},
			template: '<div id = "list"></div>',
			link: function (scope, element, attrs) {
				var list = document.getElementById('list');
				scope.$watchGroup(['emails','searchTerm'], function(newValue) {
					list.innerHTML = "";
					list.classList.add("ui", "segment");
					console.log(newValue);
					var searchTerm = newValue[1];
					var searchBy = ["title", "content"];
					var display;
					var messageToDisplay;
					var reg = new RegExp("(" + searchTerm + ")","gim");
					if (newValue[0] !== undefined) {
						newValue[0].forEach(function(message) {
							display = searchTerm === undefined;
							messageToDisplay = {};
							var li = document.createElement("div");
							li.classList.add("ui", "secondary", "segment", "mail-item");
							for (var j in searchBy){
								var matches = reg.test(message[searchBy[j]]);

								if (matches){
									display = true;
								}
								messageToDisplay[searchBy[j]] = message[searchBy[j]].replace(reg, '<strong>$1</strong>');
							}
							if (!display){
								li.classList.add("hidden");
							}
							var corespondent;
							if(message.sender !== undefined){
								corespondent = message.sender;
							}else if (message.receivers !== undefined){
								corespondent = message.receivers[0];
							}
							var message_html = '<a href="www.google.com"><div class="email-preview">';
							if (message.read === false){
								message_html += '<i class="mail-ico folder icon"></i>';
							}else{
								message_html += '<i class="mail-ico folder open outline icon"></i>';
							}
							message_html += '<a class="mail-sender">' + corespondent  + '</a>' +
                            '<a class="mail-vertical-separator"></a>' +
                            '<a href="#/view/' + message.id + '" class="mail-title">' + messageToDisplay.title + '</a>' +
                            '<a> - </a>' +
                            '<a>' + messageToDisplay.content + '</a>' +
                            '<i class="trash icon float-right"></i></div></a>';
                        	li.innerHTML = message_html;

							list.appendChild(li);
						});
					}	
				});
			}
		};
			
	});