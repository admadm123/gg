
        // Управление меню
        document.querySelectorAll('.menu-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.closest('.main-dropdown, .user-dropdown');
                parent.classList.toggle('active');
                
                const menu = parent.querySelector('.dropdown-menu-left, .dropdown-menu-right');
                menu.style.transform = parent.classList.contains('active') ? 
                    (menu.classList.contains('dropdown-menu-left') ? 'translateX(0)' : 'translateX(0)') : 
                    (menu.classList.contains('dropdown-menu-left') ? 'translateX(-100%)' : 'translateX(100%)');
            });
        });

        // Функция закрытия меню
        function closeDropdown(side) {
            const dropdown = document.querySelector(`.${side}-dropdown`);
            const menu = dropdown.querySelector(`.dropdown-menu-${side}`);
            dropdown.classList.remove('active');
            menu.style.transform = side === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
        }

        // Закрытие при клике вне меню
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-menu') && !e.target.closest('.menu-toggle')) {
                document.querySelectorAll('.dropdown-menu-left, .dropdown-menu-right').forEach(menu => {
                    menu.style.transform = menu.classList.contains('dropdown-menu-left') ? 
                        'translateX(-100%)' : 'translateX(100%)';
                });
                document.querySelectorAll('.main-dropdown, .user-dropdown').forEach(d => {
                    d.classList.remove('active');
                });
            }
        });

        // Оптимизация для тач-устройств
        let lastTap = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTap < 300) e.preventDefault();
            lastTap = now;
        }, { passive: false });

        // Управление дропдаунами
        document.querySelectorAll('.nav-link.has-dropdown > a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Предотвращаем переход по ссылке
                const dropdown = this.nextElementSibling; // Соседний элемент - дропдаун
                const isActive = dropdown.classList.contains('show'); // Проверяем, открыт ли дропдаун
                // Закрываем все дропдауны
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
                // Если дропдаун не был открыт, открываем его
                if (!isActive) {
                    dropdown.classList.add('show');
                }
            });
        });

// Отображение/скрытие кнопок действий пользователя в ПК-версии
document.addEventListener('DOMContentLoaded', () => {
    const userActions = document.querySelector('.user-actions');
    const userDropdown = document.querySelector('.user-dropdown');

    if (window.innerWidth >= 1485) {
        userActions.style.display = 'flex';
        userDropdown.style.display = 'none';
    } else {
        userActions.style.display = 'none';
        userDropdown.style.display = 'inline-block';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1485) {
            userActions.style.display = 'flex';
            userDropdown.style.display = 'none';
        } else {
            userActions.style.display = 'none';
            userDropdown.style.display = 'inline-block';
        }
    });
});

// Плавное открытие и закрытие мобильного меню
const mainDropdown = document.querySelector('.main-dropdown');
const mainMenu = document.querySelector('.dropdown-menu-left');
const closeBtn = document.querySelector('.close-btn.left');

mainDropdown.addEventListener('click', () => {
    mainDropdown.classList.add('active');
    mainMenu.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
    mainDropdown.classList.remove('active');
    mainMenu.style.transform = 'translateX(-100%)';
});

// Плавное открытие и закрытие меню пользователя
const userDropdown = document.querySelector('.user-dropdown');
const userMenu = document.querySelector('.dropdown-menu-right');
const userCloseBtn = document.querySelector('.close-btn.right');

userDropdown.addEventListener('click', () => {
    userDropdown.classList.add('active');
    userMenu.style.transform = 'translateX(0)';
});

userCloseBtn.addEventListener('click', () => {
    userDropdown.classList.remove('active');
    userMenu.style.transform = 'translateX(100%)';
});

// Закрытие меню при клике вне него
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('.menu-toggle')) {
        document.querySelectorAll('.dropdown-menu-left, .dropdown-menu-right').forEach(menu => {
            menu.style.transform = menu.classList.contains('dropdown-menu-left') ? 
                'translateX(-100%)' : 'translateX(100%)';
        });
        document.querySelectorAll('.main-dropdown, .user-dropdown').forEach(d => {
            d.classList.remove('active');
        });
    }
});


        // Управление меню пользователя
        document.querySelectorAll('.user-dropdown .menu-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.closest('.user-dropdown');
                parent.classList.toggle('active');
                
                const menu = parent.querySelector('.dropdown-menu-right');
                menu.style.transform = parent.classList.contains('active') ? 'translateX(0)' : 'translateX(100%)';
            });
        });

        // Закрытие меню пользователя при клике вне него
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-menu-right') && !e.target.closest('.user-dropdown .menu-toggle')) {
                const userDropdown = document.querySelector('.user-dropdown');
                const userMenu = userDropdown.querySelector('.dropdown-menu-right');
                userDropdown.classList.remove('active');
                userMenu.style.transform = 'translateX(100%)';
            }
        });
		
		        // Функция для закрытия дропдаунов
        function closeDropdown(side) {
            const dropdown = document.querySelector(`.dropdown-menu-${side}`);
            dropdown.classList.remove('show');
        }

        // Открытие/закрытие дропдаунов в мобильной версии
        document.querySelectorAll('.menu-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const side = toggle.closest('.main-dropdown') ? 'left' : 'right';
                const dropdown = document.querySelector(`.dropdown-menu-${side}`);
                dropdown.classList.toggle('show');
            });
        });
		
		        // Закрытие дропдаунов при клике вне меню
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-link')) {
                document.querySelectorAll('.dropdown-menu-left, .dropdown-menu-right').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });

        // Закрытие дропдаунов при загрузке страницы
        window.addEventListener('load', () => {
            document.querySelectorAll('.dropdown-menu-left, .dropdown-menu-right').forEach(menu => {
                menu.classList.remove('show');
            });
        });
// Управление дропдаунами в ПК-версии
document.querySelectorAll('.nav-link.has-dropdown').forEach(link => {
    const dropdown = link.querySelector('.dropdown-menu');

    // Показываем дропдаун при наведении на родительский элемент
    link.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    // Убираем дропдаун, если курсор покинул родительский элемент и дропдаун
    link.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!link.matches(':hover') && !dropdown.matches(':hover')) {
                dropdown.style.display = 'none';
            }
        }, 100); // Небольшая задержка для предотвращения мгновенного закрытия
    });

    // Оставляем дропдаун открытым, если курсор над ним
    dropdown.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    // Убираем дропдаун, если курсор покинул дропдаун
    dropdown.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
});


        // Закрытие дропдаунов при клике вне меню
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-link') && !e.target.closest('.navbar')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        });
		
// Активация ховер-меню только на десктопах
function initHoverDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-toggle');
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  function handleHover(e) {
    const dropdown = e.target.closest('.dropdown');
    if (!dropdown) return; // Add null check
    
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (!toggle || !menu) return; // Additional safety checks

    if (mediaQuery.matches) {
      if (e.type === 'mouseenter') {
        bootstrap.Dropdown.getOrCreateInstance(toggle).show();
      } else {
        bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
      }
    }
  }

  // Only add event listeners if elements exist
  if (dropdowns.length) {
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', handleHover);
      dropdown.addEventListener('mouseleave', handleHover);
    });
  }
}

// Make sure to call the function after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Your existing DOMContentLoaded code...
  
  // Initialize hover dropdowns
  initHoverDropdowns();
});

// Инициализация при загрузке и изменении размера окна
window.addEventListener('DOMContentLoaded', initHoverDropdowns);
window.addEventListener('resize', initHoverDropdowns);		
		
