/**
 * Created by dujinqiao on 16-8-8.
 */
function getBarcode(input) {
    $.get('/zipcode?code=' + input, function (data, status) {
        if ((data.value) !== undefined) {
            $('#result-show').text(data.value).show();
            $("#mytable tr:last").after('<tr><td>' + input + '</td><td>' + data.value + '</td></tr>')
        }
        else {
            $('#error').text(data.error).show();
        }

    });
}

function getZipcode(input) {
    $.get('/barcode?code=' + input, function (data, status) {
        if((data.value)!==undefined){
            $('#result-show').text(data.value).show();
            $("#mytable tr:last").after('<tr><td>' + input + '</td><td>' + data.value + '</td></tr>')
        }
        else {
            $('#error').text(data.error).show();
        }

    })
}
