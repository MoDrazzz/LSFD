console.log('Działa');

$(document).ready(function() {
    $('.wyslij').click(function () {
        console.log('Clicked button')

        var name = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length >= 5 && name.includes(' ')) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>Nieprawidłowe dane!</div>')
        }

        if(message.length >= 10) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>Twoja wiadomość ma mniej niż 10 znaków!</div>')
        }
    })
})