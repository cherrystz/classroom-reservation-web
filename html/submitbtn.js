$(document).ready(function() {
    
    var $submit = $('#submit_btn').hide(),
        $cbs = $('input[name="approval"]').click(function() {
            $submit.toggle( $cbs.is(":checked") );
        });

});