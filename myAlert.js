/**
 * myAlert('string to print', 'title (optional)', {array of options (opcional)}):
 *	Options:
 *	- type: default|error|warning|info|success
 *  - size: size in px
 * 
 */
function myAlert(text, title, options) {
    if (typeof title === 'undefined'){
        title = '';
    }
	if (typeof options == 'undefined') {
		options = {type: 'default', size: 0};
	}	
	
	$('#alert-modal-close-btn').removeClass();
	
	switch (options.type) {
		case 'error':
			$('#alert-modal-content').attr('style', 'color: #a94442;background-color: #f2dede;border-color: #ebccd1;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-exclamation-triangle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#alert-modal-close-btn').addClass('btn btn-danger');
			break;
		case 'warning':
			$('#alert-modal-content').attr('style', 'color: #856404;background-color: #fff3cd;border-color: #ffeeba;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-exclamation-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#alert-modal-close-btn').addClass('btn btn-warning');
			break;
		case 'info':
			$('#alert-modal-content').attr('style', 'color: #0c5460;background-color: #d1ecf1;border-color: #bee5eb;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-info-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#alert-modal-close-btn').addClass('btn btn-info');
			break;
		case 'success':
			$('#alert-modal-content').attr('style', 'color: #155724;background-color: #d4edda;border-color: #c3e6cb;');		
			text = '<div class="row"><div class="col-sm-2"><i class="fas fa-check-circle fa-2x"></i></div><div class="col-sm-10">' + text + '</div></div>';
			$('#alert-modal-close-btn').addClass('btn btn-success');
			break;
		default:
			$('#alert-modal-content').attr('style', '');
			$('#alert-modal-close-btn').addClass('btn btn-default');
			break;
	}
		
	if (options.size && !isNaN(options.size) && options.size > 0) {
		$('#alert-modal-dialog').attr('style', 'width: ' + options.size + 'px !important');		
	}
	
    $('#modal-title-alert').html(title);
    $('#alert-modal-body').html(text);
    $('#alertmodal').modal();
}
