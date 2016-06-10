var api_key = 'JtoxDiquvu-dUkASg_s2w-zrOvqpN_K6';

function getCategories() {
  $.get('https://api.mlab.com/api/1/databases/task_manager/collections/categories?apiKey=' + api_key, function(data) {
    var output = '<ul class="list-group">';
    $.each(data, function(key, data) {
      output += '<li class="list-group-item category">' + data.category_name + '<div class="pull-right"><a class="btn btn-primary btn-edit-category" data-category-id="' + data._id.$oid + '">Edit</a></div></li>';
    });

    output += '</ul>';
    $('#categories').html(output);
  });
}
