
              /* Toggle between adding and removing the "responsive" class to navbar when responsive icon is clicked */
              document.addEventListener('DOMContentLoaded', function() {
                const navbarMenu = document.querySelector('.navbar-menu');
                
                navbarMenu.addEventListener('click', function() {
                  navbarMenu.classList.toggle('collapsed');
                });
              });
          