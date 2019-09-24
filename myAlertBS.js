/**
 * myAlertBS('string to print', 'title (optional)', {array of options (optional)}):
 *	Options:
 *	- type: default|error|warning|info|success
 * 
 */
function myAlertBS(text, title, options) {
    if (typeof title === 'undefined'){
        title = '';
    }
	if (typeof options == 'undefined') {
		options = {type: 'default'};
	}	
	
	$('#myalertbs-modal-close-btn').removeClass();
	
	switch (options.type) {
		case 'error':
			$('#myalertbs-modal-content').attr('style', 'color: #a94442;background-color: #f2dede;border-color: #ebccd1;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-exclamation-triangle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#myalertbs-modal-close-btn').addClass('btn btn-danger');
			break;
		case 'warning':
			$('#myalertbs-modal-content').attr('style', 'color: #856404;background-color: #fff3cd;border-color: #ffeeba;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-exclamation-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#myalertbs-modal-close-btn').addClass('btn btn-warning');
			break;
		case 'info':
			$('#myalertbs-modal-content').attr('style', 'color: #0c5460;background-color: #d1ecf1;border-color: #bee5eb;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-info-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#myalertbs-modal-close-btn').addClass('btn btn-info');
			break;
		case 'success':
			$('#myalertbs-modal-content').attr('style', 'color: #155724;background-color: #d4edda;border-color: #c3e6cb;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-check-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#myalertbs-modal-close-btn').addClass('btn btn-success');
			break;
		default:
			$('#myalertbs-modal-content').attr('style', '');
			$('#myalertbs-modal-close-btn').addClass('btn btn-default');
			break;
	}			
	
    $('#myalertbs-modal-title').html(title);
    $('#myalertbs-modal-body').html(text);
    $('#myalertbs-modal').modal();
}
