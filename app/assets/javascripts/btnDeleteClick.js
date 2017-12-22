jQuery(function($) {

    $("#btnDelete").click(function () {
        var current_task = $(this).parent();
        console.log($(current_task).attr('data-task-id'))
        if(confirm("Delete")){
            $.ajax({
                url: 'tasks/delete/:id' + $(current_task).attr('data-task-id'),
                type: 'POST',
                data: { _method: 'DELETE'},
                success: function (result) {
                    $(current_task).fadeOut(400)
                    console.log(result)
                }
            })
        }
    });

});