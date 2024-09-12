window.addEventListener('scroll', function(){
    let header = document.querySelector(".header");
    header.classList.toggle("sticky" , window.scrollY > 0);
});

// Function to show Hmaburger
function showNavbar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}


// Function to hide Hmaburger
function hideNavbar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}