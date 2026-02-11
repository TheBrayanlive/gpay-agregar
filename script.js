// Contador de intentos
let attempts = 0;

// Función para validar número de tarjeta usando algoritmo de Luhn
function validateCardNumber(cardNumber) {
    // Remover espacios
    const number = cardNumber.replace(/\s/g, '');
    
    // Verificar que solo contenga números y tenga longitud válida
    if (!/^\d{13,19}$/.test(number)) {
        return false;
    }
    
    // Algoritmo de Luhn
    let sum = 0;
    let isEven = false;
    
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i), 10);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return (sum % 10) === 0;
}

// Función para validar fecha de expiración
function validateExpiry(expiry) {
    const parts = expiry.split('/');
    if (parts.length !== 2) return false;
    
    const month = parseInt(parts[0], 10);
    const year = parseInt('20' + parts[1], 10);
    
    if (month < 1 || month > 12) return false;
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }
    
    return true;
}

// Elementos del DOM
const form = document.getElementById('paymentForm');
const cardNumberInput = document.getElementById('cardNumber');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');
const cardTypeDiv = document.getElementById('cardType');
const payButton = document.getElementById('payButton');
const modal = document.getElementById('modal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalButton = document.getElementById('modalButton');
const attemptCounter = document.getElementById('attemptCounter');

// Formatear número de tarjeta
cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
    
    // Detectar tipo de tarjeta
    detectCardType(value);
});

// Detectar tipo de tarjeta
function detectCardType(number) {
    const firstDigit = number.charAt(0);
    const firstTwo = number.substring(0, 2);
    
    if (firstDigit === '4') {
        cardTypeDiv.textContent = '💳';
        cardTypeDiv.title = 'VISA';
    } else if (firstTwo >= '51' && firstTwo <= '55') {
        cardTypeDiv.textContent = '💳';
        cardTypeDiv.title = 'Mastercard';
    } else if (firstTwo === '34' || firstTwo === '37') {
        cardTypeDiv.textContent = '💳';
        cardTypeDiv.title = 'American Express';
    } else {
        cardTypeDiv.textContent = '';
    }
}

// Formatear fecha de expiración
expiryInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
});

// Solo números en CVV
cvvInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Convertir nombre a mayúsculas
document.getElementById('cardName').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});

// Manejar envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const cardNumber = cardNumberInput.value;
    const cardName = document.getElementById('cardName').value;
    const expiry = expiryInput.value;
    
    // Incrementar intentos
    attempts++;
    
    // Agregar clase de carga al botón
    payButton.classList.add('loading');
    
    // Simular procesamiento
    setTimeout(() => {
        payButton.classList.remove('loading');
        
        // Validar tarjeta
        const isCardValid = validateCardNumber(cardNumber);
        const isExpiryValid = validateExpiry(expiry);
        
        if (isCardValid && isExpiryValid) {
            showSuccessMessage();
        } else {
            showErrorMessage();
        }
        
        updateAttemptCounter();
    }, 2000);
});

// Mostrar mensaje de éxito
function showSuccessMessage() {
    modalIcon.textContent = '✓';
    modalIcon.style.color = '#00ff41';
    modalTitle.textContent = '[VALIDACIÓN EXITOSA]';
    modalMessage.textContent = 'agregada exitosamente';
    
    modal.classList.add('show');
    
    // Efecto de éxito en el formulario
    document.querySelector('.payment-card').style.borderColor = '#00ff41';
    document.querySelector('.payment-card').style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.6)';
    
    setTimeout(() => {
        document.querySelector('.payment-card').style.borderColor = '';
        document.querySelector('.payment-card').style.boxShadow = '';
    }, 2000);
}

// Mostrar mensaje de error
function showErrorMessage() {
    modalIcon.textContent = '✗';
    modalIcon.style.color = '#ff0055';
    modalTitle.textContent = '[ERROR DE VALIDACIÓN]';
    modalMessage.textContent = 'no se agrego vota ese puto bin';
    
    modal.classList.add('show');
    
    // Agregar animación de shake al formulario
    document.querySelector('.payment-card').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.payment-card').classList.remove('shake');
    }, 500);
}

// Actualizar contador de intentos
function updateAttemptCounter() {
    if (attempts > 0) {
        attemptCounter.textContent = `// Intentos: ${attempts} | Status: MONITORING`;
        
        if (attempts >= 3) {
            attemptCounter.textContent = `// Intentos: ${attempts} | Status: SUSPICIOUS_ACTIVITY`;
        }
        
        if (attempts >= 5) {
            attemptCounter.textContent = `// Intentos: ${attempts} | Status: ALERT_LEVEL_HIGH`;
        }
    }
}

// Cerrar modal
modalButton.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Cerrar modal al hacer clic fuera
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Mensaje de bienvenida en consola
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('%c[SYSTEM_ACCESS]', 'color: #00ff41; font-size: 20px; font-weight: bold;');
        console.log('%cCard Validator v2.0 - Iniciado', 'color: #00ffff; font-size: 14px;');
        console.log('%cStatus: ONLINE | Security: ACTIVE', 'color: #00ff41; font-size: 12px;');
    }, 1000);
});

// Efecto de typing en el terminal
let terminalLines = document.querySelectorAll('.terminal-line');
terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
        line.style.transition = 'opacity 0.3s ease';
        line.style.opacity = '1';
    }, index * 200);
});
