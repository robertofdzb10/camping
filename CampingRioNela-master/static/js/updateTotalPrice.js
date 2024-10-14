function updateTotalPrice() {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    const adults = parseInt(document.getElementById('adults-count').textContent) || 0;
    const children = parseInt(document.getElementById('children-count').textContent) || 0;
    const infants = parseInt(document.getElementById('infants-count').textContent) || 0;

    const adultPricePerNight = 50;
    const childPricePerNight = 25;
    const infantPricePerNight = 10;

    // Calcular la diferencia de días entre check-in y check-out
    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);
    const differenceInTime = checkoutDate - checkinDate;
    const differenceInDays = Math.max(differenceInTime / (1000 * 3600 * 24), 1); // Asegura al menos 1 día

    // Calcular el costo base en función del número de invitados y noches
    let total = (adults * adultPricePerNight + children * childPricePerNight + infants * infantPricePerNight) * differenceInDays;

    // Añadir los costos adicionales de servicios extra por noche
    const checkboxes = document.querySelectorAll('.extra-service-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.getAttribute('data-price')) * differenceInDays;
        }
    });

    // Actualizar el precio en el DOM
    const totalPriceElement = document.querySelector('.price-total');
    totalPriceElement.textContent = `${total.toFixed(2)}€`;

    // Sacar por consola cada variable
    console.log('adults:', adults);
    console.log('children:', children);
    console.log('infants:', infants);
    console.log('checkinDate:', checkinDate);
    console.log('checkoutDate:', checkoutDate);
    console.log('differenceInDays:', differenceInDays);
    console.log('total:', total);
    
}
