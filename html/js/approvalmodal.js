$(document).ready(function() {
    var $submit = $('#submit_btn').hide(),
        $cbs = $('input[name="approval"]').click(function() {
            $submit.toggle( $cbs.is(":checked") );
        });
        $('#approvalmodal').on('hidden.bs.modal', function () {
            $("#approval").trigger("reset"),
            $('#submit_btn').hide();
          }) 
      
         
});