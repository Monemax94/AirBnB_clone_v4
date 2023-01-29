$(document).ready(function () {
    $('input[type=checkbox]').change(function () {
        if ($(this).prop('checked')) {
          selected.push($(this).attr('data-name'))
        } else {
          let unchecked = $(this).attr('data-name')
          let idx = selected.indexOf(unchecked)
          selected.splice(idx, 1)
        }
      
      if (selected.length !== 0) {
        let seleced_in_txt = selected.join(", ")
        $("#selected").text(seleced_in_txt)
      }
    //task 3
    $.ajax('http://0.0.0.0:5001/api/v1/status').done(function(data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('availalbe');
        }
    })
})
})
