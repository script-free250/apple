document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    // جلب البيانات من ملف json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                let mediaElement = '';

                if (item.type === 'image') {
                    mediaElement = `<img src="${item.src}" alt="${item.caption}">`;
                } else if (item.type === 'video') {
                    mediaElement = `
                        <video controls>
                            <source src="${item.src}" type="video/mp4">
                            متصفحك لا يدعم الفيديو.
                        </video>`;
                }

                card.innerHTML = `
                    ${mediaElement}
                    <div class="caption">${item.caption}</div>
                `;

                gallery.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading gallery data:', error));
});
