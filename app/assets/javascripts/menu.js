$(document).ready(function(){
  $(".navigation").mouseleave(function() {
    $(".sliding-line").hide()
  })

  $(".navigation > li").mouseenter(function() {
    sliding = $(".sliding-line")
    if (sliding.css("display") == "none") {
      sliding.show()
    }
    $(".open a.dropdown-toggle:first-child").blur();
    $(".open").removeClass("open");
    currPos = sliding.offset().left
    currWidth = $(this).css("width").replace("px", "")
    currWidth = parseInt(currWidth) - 30
    expectedPos = $(this).offset().left
    sliding.stop().animate({
      width: currWidth + "px",
      left: changePos(currPos, expectedPos)
    }, 300, function() {
      return
    })
  }).mouseleave(function() {
    return
  })
});
function changePos(currPos, expectedPos) {
  let diff = null;
  let sign = null;
  if (currPos > expectedPos) {
    diff = currPos - expectedPos
    sign = '-='
  } else {
    diff = expectedPos - currPos
    sign = '+='
  }
  return sign + diff;
}
