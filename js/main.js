// Make the main contents fade in when page is loaded
$(document).ready(()=> {
  $('.mainContents').hide().fadeIn(1000);
});

// Message appears when contact form is submitted
$('button[type="button"]').click(()=> {
        $('button[type="button"]').next().remove()
        $('<div>', {
            id: 'thanksBox',
            text: 'Thank you for your message!'
        }).appendTo('#submitButton').hide().fadeIn(1000);
        $('div#thanksBox').css({
            'background-color': 'PaleGreen',
            'height': '50px',
            'line-height': '50px',
            'width': '400px',
            'margin': '30px auto'
        });
})