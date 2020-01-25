
(function ($) {

    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.input100').focusout(function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });


    function validate (input) {
        if($(input).attr('name') == 'username') {
            if($(input).val().trim().match(/^([A-z_\-]{3,15})$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'first_name') {
            if($(input).val().trim().match(/^([A-z]+[- ]*[A-z]*)$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'last_name') {
            if($(input).val().trim().match(/^([A-z]+[- ]*[A-z]*)$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'age') {
            if($(input).val() == '' || $(input).val() > 25) {
                return false;
            }
        }
        else if($(input).attr('name') == 'work_place') {
            if($(input).val().trim().match(/^([A-z_\- ]+)$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'password1') {
            if($(input).val().trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) == null) {
                return false;
            }
        }
        else if( $(input).attr('name') == 'password2') {
            if($(input).val() != $('.pass').val()) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*Validate terms*/
    $('#accept-terms').click(function(){    
        if ($('#accept-terms').is(':checked')){
            $('.btn-register').prop('disabled', false);
        } else {
            $('.btn-register').prop('disabled', true);
        }
    })
    

})(jQuery);