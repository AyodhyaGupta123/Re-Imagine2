document.addEventListener("click", function() {
    var headers = document.querySelectorAll('.accordion-header');
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var currentlyActive = document.querySelector('.accordion-content.active');
            if (currentlyActive && currentlyActive !== content) {
                currentlyActive.classList.remove('active');
                currentlyActive.style.display = 'none';
            }
            if (content.style.display === 'block') {
                content.style.display = 'none';
                content.classList.remove('active');
            } else {
                content.style.display = 'block';
                content.classList.add('active');
            }
        });   
    });
});
