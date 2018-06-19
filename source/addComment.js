$(document).ready(function(){
  $("#new_comment_button").on( "click", function() {
    $(this).hide();
    $("#new_comment").show();
  });

  $("#new_comment").submit(function() {
    event.preventDefault()
    let commentBody = $('textarea[name="comment"]').val()
    let commentAuthor = $('input[id="authorName"]').val()
    $("#comment_list").append("<li>" + commentBody + "<span class='author'>" + commentAuthor +
    "</span></li>")
    $('#new_comment').hide()
  })
});
