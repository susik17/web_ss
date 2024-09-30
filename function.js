document.addEventListener('DOMContentLoaded', function() {
    const showBannerButton = document.getElementById('show-banner');
    const bannerImage = document.getElementById('banner');

    showBannerButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Toggle the banner display
        if (bannerImage.style.display === 'none' || bannerImage.style.display === '') {
            bannerImage.style.display = 'block';
        } else {
            bannerImage.style.display = 'none';
        }
    });
});
