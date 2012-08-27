/**
 * User: ryuone
 * Date: 2012/08/26
 * Time: 21:44
 * License: MIT License
 */
function getTodos(listId, callback) {
    jQuery.ajax({
        url: "/todo/" + listId + "/items",
        success: function (data) {
            // Node-style CPS: callback(err, data)
            callback(null, data);
        }
    });
}
