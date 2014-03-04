$(document).ready(function(){
//BXSLIDER
  $('.bxslider').bxSlider({
    mode: 'fade',
    auto: true
    });

//jQuery code which toggles mobile nav bar on click of a
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
        });
    });

//PACKAGES
  $('.section-five').hide();
  $('#bronze').click(function(){
    $('.section-five').fadeIn('fast');
    $('#package').replaceWith('<span id="package" style="color: #E87E04">Bronze</span>')
    $('#packagevalue').replaceWith('<input id="packagevalue" type="hidden" name="hosted_button_id" value="A93T7RRJXEJQW">')
  })
  $('#silver').click(function(){
    $('.section-five').fadeIn('fast');
    $('#package').replaceWith('<span id="package" style="color: #BFBFBF">Silver</span>')
    $('#packagevalue').replaceWith('<input id="packagevalue" type="hidden" name="hosted_button_id" value="UWTFREDMVCB8Y">')
  })
  $('#gold').click(function(){
    $('.section-five').fadeIn('fast');
    $('#package').replaceWith('<span id="package" style="color: #F4B350">Gold</span>')
    $('#packagevalue').replaceWith('<input id="packagevalue" type="hidden" name="hosted_button_id" value="M47AKHD7G7HK2">')
  })

//BUTTONS

    $('#formsubmit').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#formsubmit').focus().click();
        }
    });
  $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    });
  $("#about-but").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-two").offset().top},600);
        return false;
    });
  $("#packages-but").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-four").offset().top},600);
        return false;
    });
  $("#checkit").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-two").offset().top},600);
    });
  $(".package-select").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-five").offset().top},600);
    });
});

//CONTACT FORM - CUSTOM VALIDATION - MANDRILL
function purchase() {
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    
    var message = "<h2>New Lead from Cladcamp!</h2><p><strong>Name:</strong> "+name+"<br><strong>Company:</strong> "+company+"<br><strong>City:</strong> "+city+"<br><strong>State:</strong> "+state+"<br><strong>Zip Code:</strong> "+zip+"<br><strong>Phone:</strong> "+phone+"<br><strong>Email:</strong> "+email+"<br><strong>Website:</strong> "+website+"<br></p>"
    
    if (name.length > 1) {
        $('#name').removeClass('error')
        if (email.length > 1) {
            $('#email').removeClass('error')
            if (city.length > 1) {
                $('#city').removeClass('error')
                    if (state.length > 1) {
                        $('#state').removeClass('error')
                        if (zip.length > 1) {
                            $('#zip').removeClass('error')
                            if (phone.length > 1) {
                                $('#phone').removeClass('error')
                                if (email.length > 1) {
                                    $('#email').removeClass('error')
                                    var formData = {
                                        "key": "1-mhUdqJ5OFL3LXYxqyeFA",
                                        "message": {
                                            "html": message,
                                            "subject": "CladCamp Lead",
                                            "from_email": email,
                                            "from_name": name,
                                            "to": [
                                                {
                                                "email": "shawn@cladcamp.com",
                                                "name": "CladCamp",
                                                "type": "to"
                                                }
                                            ]
                                        }
                                    };
                        
                                    $.ajax({
                                        url : "https://mandrillapp.com/api/1.0/messages/send.json",
                                        type: "POST",
                                        data : formData,
                                        success: function(data, textStatus, jqXHR){
                                            $('#purchase-form').submit();
                                            $('#name').removeClass('error')
                                            $('#company').removeClass('error')
                                            $('#city').removeClass('error')
                                            $('#state').removeClass('error')
                                            $('#zip').removeClass('error')
                                            $('#phone').removeClass('error')
                                            $('#email').removeClass('error')
                                            
                                        },
                                        error: function (jqXHR, textStatus, errorThrown){
                                            $('#email').addClass('error')
                                            $('#email').focus()
                                        }
                                    });
                                        }
                                else {
                                    $('#email').addClass('error')
                                    $('#email').focus()
                                }
                                        }
                            else {
                                $('#phone').addClass('error')
                                $('#phone').focus()
                            }
                                        }
                        else {
                            $('#zip').addClass('error')
                            $('#zip').focus()
                        }
                    }
                else {
                    $('#state').addClass('error')
                    $('#state').focus()
                }
            }
            else {
                $('#city').addClass('error')
                $('#city').focus()
            }
            
        }
        else {
                $('#company').addClass('error')
                $('#company').focus()
        }
    }
    else {
                $('#name').addClass('error')
                $('#name').focus()
    }
    
    
}