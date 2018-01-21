// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// app/assets/javascripts/tasks.js
// $(document).on('turbolinks:load', function() {
//   console.log('document is ready!', new Date()); // this logging is optional
//   $('#task_name').focus();
// });
//
// // app/assets/javascripts/tasks.js
// $(document).on('turbolinks:load', function() {
//   $('#task_name').focus();
//
//   $('.modal-footer .btn-primary').click(function() {
//     console.log('save the changes!');
//   });
// });
//
// // app/assets/javascripts/tasks.js
// $(document).on('turbolinks:load', function() {
//   $('#task_name').focus();
//
//   $('.modal-footer .btn-primary').click(function() {
//     console.log($('.modal-body form'));
//   });
// });

$(document).on('turbolinks:load', function() {
  $('#task_name').focus();

  $('.modal-footer .btn-primary').click(function() {
    $('.modal-body form').submit();
  });
});
