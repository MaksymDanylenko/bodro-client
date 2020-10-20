$('#emailForm').submit(function(e) {

    e.preventDefault()

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
        }
    })
});
