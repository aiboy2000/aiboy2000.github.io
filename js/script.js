// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 当页面滚动时改变导航栏样式
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1a252f';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#2c3e50';
        header.style.boxShadow = 'none';
    }
});

// 页面加载完成后的动画
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hero h2').style.opacity = '0';
    document.querySelector('.hero p').style.opacity = '0';
    document.querySelector('.hero .btn').style.opacity = '0';
    
    setTimeout(() => {
        document.querySelector('.hero h2').style.transition = 'opacity 1s ease-in-out';
        document.querySelector('.hero h2').style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.hero p').style.transition = 'opacity 1s ease-in-out';
        document.querySelector('.hero p').style.opacity = '1';
    }, 800);
    
    setTimeout(() => {
        document.querySelector('.hero .btn').style.transition = 'opacity 1s ease-in-out';
        document.querySelector('.hero .btn').style.opacity = '1';
    }, 1300);
});
