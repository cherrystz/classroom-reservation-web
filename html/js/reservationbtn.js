$(document).ready(function() {
    
    var $submit = $('#submit_btn').hide(),
        $cbs = $('#purpose').keyup (function() {
            if ($('#purpose').val().length > 0) {
                if ($("#subject_drop").val() != "") {
                    $submit.show();
                    return  
                    }
                } 
            else {
                $submit.hide(); 
                return
            }
        });

        var $submit = $('#submit_btn').hide(),
        $cbs = $('#subject_drop').change (function() {
            if ($('#purpose').val().length > 0) {
                if ($("subject_drop").val() != "") {
                    $submit.show();
                    return  
                    }
                } 
            else {
                $submit.hide(); 
                return
            }
        });
});