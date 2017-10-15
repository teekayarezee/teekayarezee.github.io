$(document).ready(function() {
  $('#tDisplay3').hide();
  $('#tDisplay2').hide();
  $(".row1").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row1').toggleClass('coloured2');
  });
  $(".row2").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row2').toggleClass('coloured2');
  });
  $(".row3").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row3').toggleClass('coloured2');
  });
  $(".row4").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row4').toggleClass('coloured2');
  });
  $(".row5").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row5').toggleClass('coloured2');
  });
  $(".row6").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row6').toggleClass('coloured2');
  });
  $(".row7").click(function() {
    $(this).toggleClass("coloured");
    $('.div-table-row7').toggleClass('coloured2');
  });
  $('.row1').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row1').toggleClass('coloured');
      $('.div-table-row1').toggleClass('coloured2');
    }
  });
  $('.div-table-col1').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row1').toggleClass('coloured');
      $('.div-table-row1').toggleClass('coloured2');
    }
  });
  $('.row2').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row2').toggleClass('coloured');
      $('.div-table-row2').toggleClass('coloured2');
    }
  });
  $('.div-table-col2').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row2').toggleClass('coloured');
      $('.div-table-row2').toggleClass('coloured2');
    }
  });
  $('.row3').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row3').toggleClass('coloured');
      $('.div-table-row3').toggleClass('coloured2');
    }
  });
  $('.div-table-col3').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row3').toggleClass('coloured');
      $('.div-table-row3').toggleClass('coloured2');
    }
  });
  $('.row4').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row4').toggleClass('coloured');
      $('.div-table-row4').toggleClass('coloured2');
    }
  });
  $('.div-table-col4').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row4').toggleClass('coloured');
      $('.div-table-row4').toggleClass('coloured2');
    }
  });
  $('.row5').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row5').toggleClass('coloured');
      $('.div-table-row5').toggleClass('coloured2');
    }
  });
  $('.div-table-col5').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row5').toggleClass('coloured');
      $('.div-table-row5').toggleClass('coloured2');
    }
  });
  $('.row6').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row6').toggleClass('coloured');
      $('.div-table-row6').toggleClass('coloured2');
    }
  });
  $('.div-table-col6').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row6').toggleClass('coloured');
      $('.div-table-row6').toggleClass('coloured2');
    }
  });
  $('.row7').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row7').toggleClass('coloured');
      $('.div-table-row7').toggleClass('coloured2');
    }
  });
  $('.div-table-col7').hover(function() {
    if ($('#chkSelect').is(":checked")) {
      $('.row7').toggleClass('coloured');
      $('.div-table-row7').toggleClass('coloured2');
    }
  });
})
