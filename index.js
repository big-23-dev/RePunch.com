// Auto-redirect after 3 seconds
window.onload = function () {
    setTimeout(() => {
        window.location.href = "/home";
    }, 3000); // 2-second delay for effect
};

// Button click redirect
document.getElementById('shopNow').addEventListener('click', () => {
    window.location.href = "/home";
});

