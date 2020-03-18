console.log('Działa');

$(document).ready(function() {
    $('.contact_submit').click(function () {
        console.log('Clicked button')

        var name = $('.contact_name_input').val()
        var message = $('.contact_textarea').val()
        var discord = $('.contact_discord_input').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length >= 5 && name.includes(' ')) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>Nieprawidłowe imię lub nazwisko!</div>')
        }

        if(message.length >= 10) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>Twoja wiadomość ma mniej niż 10 znaków!</div>')
        }

        if(discord.length >= 6 && discord.includes('#') ) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>Nieprawidłowy discord!</div>')
        }
    })
})