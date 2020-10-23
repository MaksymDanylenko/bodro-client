$('#emailForm').submit(function(e) {

    e.preventDefault()

    $('#emailInput').prop('disabled', true)
    $('#nameInput').prop('disabled', true)
    $('#subjectInput').prop('disabled', true)
    $('#messageInput').prop('disabled', true)
    $('#submitInput').prop('disabled', true)

    var emailMessage = {
        email: $('#emailInput').val(),
        name: $('#nameInput').val(),
        subject: $('#subjectInput').val(),
        message: $('#messageInput').val()
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/email',
        data: JSON.stringify(emailMessage),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            alert('Сообщение отправлено!')

            $('#emailInput').val('')
            $('#nameInput').val('')
            $('#subjectInput').val('')
            $('#messageInput').val('')
        },
        error: function(errMsg) {
            alert('Ошибка при отправке сообщения!')
        },
        complete: function() {
        	$('#emailInput').prop('disabled', false)
            $('#nameInput').prop('disabled', false)
            $('#subjectInput').prop('disabled', false)
            $('#messageInput').prop('disabled', false)
            $('#submitInput').prop('disabled', false)
        }
    })
});