angular.module('MailClient.app.common.settings.colorsService', [])

	.service('colorsService', function(){

		var colors = {
            'blue': true,
            'red': false,
            'teal': false,
            'black': false
        	},
        	labels = [
        		{
        			'id': 1,
        			'name': 'blue'
        		},
        		{
        			'id': 2,
        			'name': 'red'
        		},
        		{
        			'id': 3,
        			'name': 'teal'
        		},
        		{
        			'id': 4,
        			'name': 'black'
        		}
        	],
        	changeColor = function (color) {
	            for(var col in colors) { 
	                colors[col] = false; 
	            }
	            colors[color] = true;
	        };

	    return {
	    	changeColor: changeColor,
	    	labels: labels,
	    	get colors() {
	    		return colors;
	    	}
	    };

	});

