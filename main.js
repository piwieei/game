/**
 * GameLift Website - Main JavaScript
 * 包含网站的主要交互功能
 */

// 移动菜单切换功能
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('nav-links');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 响应式设计 - 窗口大小变化处理
function handleResponsiveness() {
    window.addEventListener('resize', () => {
        const mobileMenu = document.getElementById('nav-links');
        if (mobileMenu) {
            if (window.innerWidth >= 768) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    handleResponsiveness();
}); 