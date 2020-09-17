/**
 * myAlertBs('string to print', 'title (optional)', {options arrray (opcional)}): 
 *	Options parameters:
 *	- type: default|error|warning|info|success
 *  - size: size in px
 *  - link: Adds a link button, to the left of the cancel one, customizable:
 *		- label: Label to print on the button
 *		- uri: Where the button links
 *		- type: default|error|warning|info|success
 *	- cancel: Customizes the cancel button:
 *		- label: Label to print on the cancel button
 *		- type: default|error|warning|info|success
 * 
 */
function myAlertBS(text, title, options) {
    if (typeof title === 'undefined'){
        title = '';
    }
	if (typeof options == 'undefined') {
		options = {type: 'default', size: 0};
	}	
	
	if (typeof options.link == 'undefined') {
		$('#myalertbs-modal-link-btn').hide();
	} else {
		$('#myalertbs-modal-link-btn').attr('href', '#');
		$('#myalertbs-modal-link-btn').html('Link');
		$('#myalertbs-modal-link-btn').removeClass();
		if (typeof options.link.label != 'undefined') {
			$('#myalertbs-modal-link-btn').html(options.link.label);
		}
		if (typeof options.link.uri != 'undefined') {
			$('#myalertbs-modal-link-btn').attr('href', options.link.uri);
		}
		if (typeof options.link.type != 'undefined') {			
			$('#myalertbs-modal-link-btn').addClass('btn btn-' + options.link.type);
		} else {
			$('#myalertbs-modal-link-btn').addClass('btn btn-default');
		}
		$('#myalertbs-modal-link-btn').show();
	}
	
	$('#myalertbs-modal-close-btn').removeClass();
	$('#myalertbs-modal-close-btn').addClass('btn btn-danger');
	if (typeof options.cancel == 'undefined') {
		$('#myalertbs-modal-close-btn').html('<i class="fa fa-times"></i> Close');		
	} else {						
		if (typeof options.cancel.label != 'undefined') {
			$('#myalertbs-modal-close-btn').html(options.cancel.label);
		}		
		if (typeof options.cancel.type != 'undefined') {			
			$('#myalertbs-modal-close-btn').addClass('btn btn-' + options.cancel.type);
		}
	}
			
	switch (options.type) {
		case 'error':
			$('#myalertbs-modal-content').attr('style', 'color: #a94442;background-color: #f2dede;border-color: #ebccd1;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-exclamation-triangle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';			
			break;
		case 'warning':
			$('#myalertbs-modal-content').attr('style', 'color: #856404;background-color: #fff3cd;border-color: #ffeeba;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-exclamation-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';			
			break;
		case 'info':
			$('#myalertbs-modal-content').attr('style', 'color: #0c5460;background-color: #d1ecf1;border-color: #bee5eb;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-info-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';			
			break;
		case 'success':
			$('#myalertbs-modal-content').attr('style', 'color: #155724;background-color: #d4edda;border-color: #c3e6cb;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-check-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';			
			break;
		default:
			$('#myalertbs-modal-content').attr('style', '');			
			break;
	}
		
	if (options.size && !isNaN(options.size) && options.size > 0) {
		$('#myalertbs-modal-dialog').attr('style', 'width: ' + options.size + 'px !important');		
	}
	
    $('#myalertbs-title-alert').html(title);
    $('#myalertbs-modal-body').html(text);
    $('#myalertbs-modal').modal();
}
