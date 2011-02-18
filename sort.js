	$(function() {
		
		//turn on all js enabled fancy dropdowns
		$(".hidden").show();
		
		//initiate tooltips
		$('.tip').tipsy({trigger: 'focus', gravity: 'n', opacity:1});
		
		//-------- populate form options
		$('#title li a.selected, a.trigger').live('click', function() {
			//check if the options are visible
			if( $('#title li a.option:visible').length > 1) {
				//hide the options if currently displaying
				$('#title li a.option:not(.selected)').hide();			
			} else {
				//show the options if hidden
				$('#title li a.option:not(.selected)').show();			
			}
			return false;
		}); 
		
		//check for selecting a new option
		$('#title li a.option:not(.selected)').live('click', function() {
			//change over the selected class
			$('#title li a').removeClass('selected');
			//apply this to the new selection
			$(this).addClass('selected');
			//shuffle the new selection to the top of the page
			$(this).parent().remove().prependTo('#title');
			//update the select option
			$("input[name='option']").val( $(this).attr('title') );
			//slide up the selected option
			$('#title li a.option:not(.selected)').hide();			
			return false;
		});		
		
	});
