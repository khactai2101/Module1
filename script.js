$(document).ready(function () {
  //   alert("hello jquery");
  $("#btn-1").click(() => {
    alert("I'm JQUERY");
  });

  // Làm việc với toggle

  const pElement = $("#result-1");
  $("#btn-toggle").click(() => {
    $("#result-1").toggle();
  });

  //   ví dụ keydown
  $("#input-1").keydown(() => {
    // su dung random mau sac
    $("#result-2").css("color", "green");
  });
  // bat su kien change

  $(window).scroll(() => {
    console.log("scroll");
  });
});
