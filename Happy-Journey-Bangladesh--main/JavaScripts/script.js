function aA(){
window.location.href = "https://eticket.railway.gov.bd";
            }
function b(){
window.location.href = "HTMLs/bus.html"
            }
function c(){
window.location.href = "https://www.biman-airlines.com/"
            }
function d(){
window.location.href = "https://www.bdtickets.com/launch"
            }
function e(){
window.location.href = "HTMLs/ads.html"
            }
function f(){
window.location.href = "HTMLs/help.html"
            }
function i() {
    window.location.href = "HTMLs/exploreBD.html"
}
function j() {
window.location.href = "HTMLs/help&support.html"    
}

function about() {
    window.location.href = "HTMLs/about.html"
}
// script.js

function toggleMenu() {
    var menu = document.getElementById('main-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    // Toggle the 'active' class for smooth opening and closing
    menu.classList.toggle('active');

    // Check if the menu is open or closed
    var isOpen = menu.classList.contains('active');

    // Set the max-height based on whether the menu is open or closed
    menu.style.maxHeight = isOpen ? menu.scrollHeight + 'px' : '0';
}
