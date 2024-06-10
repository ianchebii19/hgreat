$(document).ready(function(){   
    function handleMenuIconClick(){
        const menuIcon = document.querySelector('.menuIcon');
        const sidebar = document.querySelector('.sidebar');
        const bxa = document.querySelector('#bxa');
        const far = document.querySelector('#far');
        console.log('clicked')
    
        menuIcon.addEventListener('click', function() {
            sidebar.style.display = 'block';
            bxa.style.display = 'block';
            far.style.display = 'none';
        });
    }
    
    function handleBxaClick() {
        const bxa = document.querySelector('#bxa');
        const far = document.querySelector('#far');
        const sidebar = document.querySelector('.sidebar');
    
        bxa.addEventListener('click', function() {
            far.style.display = 'block';
            sidebar.style.display = 'none';
            bxa.style.display = 'none';
        });
    }
    
    handleBxaClick();
    handleMenuIconClick();
});