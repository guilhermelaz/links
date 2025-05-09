document.addEventListener('DOMContentLoaded', function() {
    applyLinkConfig();
    
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        const localProfileImg = new Image();
        localProfileImg.src = 'img/profile.jpg';
        
        localProfileImg.onload = function() {
            profileImg.src = 'img/profile.jpg';
        };
    }
    
    document.querySelectorAll('.link-button').forEach(button => {
        const buttonId = button.getAttribute('data-id');
        if (buttonId) {
            const savedColor = localStorage.getItem('buttonColor_' + buttonId);
            if (savedColor) {
                button.style.backgroundColor = savedColor;
            }
        }
    });

    const shareBtn = document.getElementById('shareBtn');
    
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Guilherme Lazarotto - Links',
                text: 'Confira os links do Guilherme Lazarotto',
                url: window.location.href
            })
            .then(() => console.log('Compartilhado com sucesso!'))
            .catch((error) => console.log('Erro ao compartilhar:', error));
        } else {
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = window.location.href;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'Link copiado para a área de transferência!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }
    });


    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            z-index: 1000;
            opacity: 1;
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    window.customizeButton = function(buttonClass, color) {
        const buttons = document.querySelectorAll('.' + buttonClass);
        buttons.forEach(button => {
            button.style.backgroundColor = color;
        });
        
        localStorage.setItem('buttonColor_' + buttonClass, color);
    };
});


function applyLinkConfig() {
    if (!LINKS_CONFIG || !LINKS_CONFIG.sections) return;

    const container = document.querySelector('.container');
    const profile = document.querySelector('.profile');
    const shareButton = document.querySelector('.share-button');
    const footer = document.querySelector('footer');
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.remove());
    
    LINKS_CONFIG.sections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'section';
        sectionElement.setAttribute('data-section-id', section.id);
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = section.title;
        sectionElement.appendChild(titleElement);
        
        if (section.links && section.links.length > 0) {
            section.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.className = 'link-button';
                linkElement.setAttribute('data-id', link.id);

                const savedColor = localStorage.getItem('buttonColor_' + link.id);
                linkElement.style.backgroundColor = savedColor || link.color;

                if (link.icon) {
                    const iconElement = document.createElement('i');
                    iconElement.className = link.icon;
                    linkElement.appendChild(iconElement);
                }
                
                const textElement = document.createElement('span');
                textElement.textContent = link.text;
                linkElement.appendChild(textElement);

                sectionElement.appendChild(linkElement);
            });
        }
        
        container.insertBefore(sectionElement, shareButton);
    });
}

window.customizeButtonById = function(buttonId, color) {
    const button = document.querySelector(`[data-id="${buttonId}"]`);
    if (button) {
        button.style.backgroundColor = color;
        localStorage.setItem('buttonColor_' + buttonId, color);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        starsContainer.style.background = 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)';
    }
});