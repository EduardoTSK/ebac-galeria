$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#bttn-cancel').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const adressNimg = $('#adress-img-new').val()
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${adressNimg}"/>`).appendTo(newItem)
        $(`
        <div class="overlay-img-link">
            <a href="${adressNimg}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#adress-img-new').val('')
    })
})