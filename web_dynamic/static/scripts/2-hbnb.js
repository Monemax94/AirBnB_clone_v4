<<<<<<< HEAD
$(function () {
    const inputCheckboxes = $("input[type='checkbox']");
    let activeAmenities = {};
    const h4Amenities = $(".amenities h4");
    const apiStatus = $("#api_status");
    $.get("http://0.0.0.0:5001/api/v1/status/", function(apiResponse){
       if (apiResponse.status == "OK") {
            $(apiStatus).addClass("available")
       }
       else {
            $(apiStatus).removeClass("available")
       }
    })
    $(inputCheckboxes).each(function(index, el) {
        $(el).change(function(){
            const id = $(this).attr("data-id");
            const name = $(this).attr("data-name")
            let text = ""
            if ($(this)[0].checked) {
                activeAmenities[id] = name
            } else {
                if (id in activeAmenities) delete activeAmenities[id]
            }
            $.each(activeAmenities, function(amenityId, amenityName){
                text += amenityName + ", "
            })
            text = text.slice(0, -2);
            text += "&nbsp;"

            $(h4Amenities).html(text)
        })
    })
})
=======
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
>>>>>>> main
