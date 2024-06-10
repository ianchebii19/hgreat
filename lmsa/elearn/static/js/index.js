$(document).ready(function() {
    function handleMenuIconClick() {
        const $menuIcon = $('.menuIcon');
        const $sidebar = $('.sidebar');
        const $bxa = $('#bxa');
        const $far = $('#far');

        $menuIcon.on('click', function() {
            console.log('menu icon clicked');
            $sidebar.css('display', 'block');
            $bxa.css('display', 'block');
            $far.css('display', 'none');
        });
    }

    function handleBxaClick() {
        const $bxa = $('#bxa');
        const $far = $('#far');
        const $sidebar = $('.sidebar');

        $bxa.on('click', function() {
            console.log('bxa clicked');
            $far.css('display', 'block');
            $sidebar.css('display', 'none');
            $bxa.css('display', 'none');
        });
    }

    handleMenuIconClick();
    handleBxaClick();
});
