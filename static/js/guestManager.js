document.addEventListener('DOMContentLoaded', function() {
    const guestSummary = document.getElementById('guest-summary');
    const guestDropdown = document.querySelector('.guest-dropdown');

    guestSummary.addEventListener('click', function(event) {
        toggleGuestDropdown();
        event.stopPropagation();
    });

    function toggleGuestDropdown() {
        if (guestDropdown.style.display === 'block') {
            guestDropdown.style.display = 'none';
        } else {
            guestDropdown.style.display = 'block';
        }
    }

    document.addEventListener('click', function(event) {
        if (!guestDropdown.contains(event.target) && !guestSummary.contains(event.target)) {
            guestDropdown.style.display = 'none';
        }
    });

    // Evento para incrementar o disminuir el número de invitados
    document.querySelectorAll('.guest-controls button').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const delta = parseInt(this.getAttribute('data-delta'));
            changeGuestCount(type, delta);
        });
    });

    function changeGuestCount(type, delta) {
        const countElement = document.getElementById(`${type}-count`);
        let currentCount = parseInt(countElement.textContent);

        // Evitar números negativos
        if (currentCount + delta >= 0) {
            currentCount += delta;
            countElement.textContent = currentCount;
        }

        updateGuestSummary();
        updateTotalPrice();  // Asegúrarse de que se llama después de cambiar los invitados
    }

    function updateGuestSummary() {
        const adults = document.getElementById('adults-count').textContent;
        const children = document.getElementById('children-count').textContent;
        const infants = document.getElementById('infants-count').textContent;

        let summaryText = `${adults} Adultos`;

        if (children > 0) {
            summaryText += `, ${children} Niños`;
        }

        if (infants > 0) {
            summaryText += `, ${infants} Bebes`;
        }

        document.getElementById('guest-summary').textContent = summaryText;
    }

    document.querySelector('.guest-done-btn').addEventListener('click', function() {
        guestDropdown.style.display = 'none';
    });
});
