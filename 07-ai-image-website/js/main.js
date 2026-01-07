const gallerySlide = document.getElementById('gallerySlide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');
const imageTitle = document.getElementById('imageTitle');
const currentIndexSpan = document.getElementById('currentIndex');
const totalImagesSpan = document.getElementById('totalImages');

const images = [
    { title: 'Gemini' },
    { title: 'Claude' },
    { title: 'Codex' },
    { title: 'DeepSeek' }
];

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// 初始化指示器
function initIndicators() {
    images.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = 'indicator' + (index === 0 ? ' active' : '');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    totalImagesSpan.textContent = images.length;
}

// 更新指示器
function updateIndicators() {
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// 更新图片信息
function updateImageInfo() {
    imageTitle.textContent = images[currentIndex].title;
    currentIndexSpan.textContent = currentIndex + 1;
}

// 移动到指定幻灯片
function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    gallerySlide.style.transform = `translateX(${offset}%)`;

    updateIndicators();
    updateImageInfo();
}

// 下一张
function nextSlide() {
    goToSlide((currentIndex + 1) % images.length);
}

// 上一张
function prevSlide() {
    goToSlide((currentIndex - 1 + images.length) % images.length);
}

// 事件监听
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// 键盘事件
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// 触摸事件
gallerySlide.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

gallerySlide.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

// 处理滑动
function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// 鼠标拖动支持
let isMouseDown = false;
let mouseStartX = 0;

gallerySlide.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
    gallerySlide.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    const diff = mouseStartX - e.clientX;
    if (Math.abs(diff) > 50) {
        isMouseDown = false;
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// 初始化
initIndicators();
updateImageInfo();
