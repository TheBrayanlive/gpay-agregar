# 💳 GPAY KBRA - Sistema de Asociación de Tarjetas para Google Pay

![Version](https://img.shields.io/badge/version-2.0.1-brightgreen)
![Status](https://img.shields.io/badge/status-stable-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 Descripción

Sistema para asociar y validar tarjetas de crédito/débito a Google Pay (GPay). Interfaz moderna con tema hacker/matrix y validación real usando el algoritmo de Luhn. Permite vincular tu tarjeta al sistema GPay de forma rápida y segura.

## ✨ Características

- 💳 **Asociación a Google Pay**: Vincula tu tarjeta al sistema GPay
- 🔐 **Validación Real**: Algoritmo de Luhn para verificar números de tarjeta
- 🎨 **Tema Hacker**: Diseño matrix con colores verde neón (#00ff41) y cyan (#00ffff)
- 📱 **Responsive**: Optimizado para todos los dispositivos móviles
- ⚡ **Rápido**: Sin animaciones pesadas, rendimiento optimizado
- 🔒 **Seguro**: Meta tags de seguridad implementados
- 💳 **Campos Opcionales**: CVV y nombre del titular son opcionales
- ✅ **Fácil de Usar**: Interfaz intuitiva para agregar tarjetas a GPay

## 🚀 Características Técnicas

### Asociación a Google Pay
- 💳 Vincula tarjetas de crédito y débito a tu cuenta GPay
- 🔄 Proceso rápido y sencillo de asociación
- ✅ Confirmación inmediata de tarjeta agregada

### Validación de Tarjetas
- ✅ Algoritmo de Luhn implementado
- ✅ Detección automática de tipo de tarjeta (Visa, Mastercard, Amex, Discover)
- ✅ Validación de fecha de vencimiento
- ✅ Formateo automático de números

### Campos del Formulario
- **Número de tarjeta** (requerido) - Para asociar a GPay
- **Nombre del titular** (opcional)
- **Fecha de vencimiento** (requerido)
- **CVV** (opcional)

### Mensajes Personalizados
- ✅ Éxito: "agregada exitosamente" - Tu tarjeta fue asociada a GPay
- ❌ Error: "no se agrego vota ese puto bin" - La tarjeta no pudo ser asociada

## 📱 Responsive Design

- **Desktop**: Diseño completo con todos los efectos
- **Tablet** (≤600px): Adaptado con padding optimizado
- **Mobile** (≤400px): Interfaz compacta y táctil

## 🛠️ Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- Fuentes: Courier New, Consolas, Monaco (monospace)

## 📦 Estructura del Proyecto

```
gpay/
├── index.html          # Página principal
├── styles.css          # Estilos con tema hacker
├── script.js           # Lógica de validación
└── README.md          # Este archivo
```

## 🎨 Paleta de Colores

- **Verde Matrix**: `#00ff41` - Color principal
- **Cyan**: `#00ffff` - Color secundario
- **Fondo Oscuro**: `#0a0e27` - Background
- **Negro**: `rgba(0, 0, 0, 0.5)` - Inputs

## 📞 Contacto

### 👨‍💻 Desarrollador: TheBrayan

- 💬 **Telegram**: [@TheBrayan_live](https://t.me/TheBrayan_live)
- ⚡ **GitHub**: [TheBrayanlive](https://github.com/TheBrayanlive)

### 🆘 Soporte Técnico

¿Necesitas ayuda? Contáctame por:
- **Telegram**: https://t.me/TheBrayan_live
- **GitHub Issues**: https://github.com/TheBrayanlive

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🔄 Versiones

### v2.0.1 (Actual)
- ✅ CVV y nombre opcionales
- ✅ Tema hacker completo
- ✅ Validación real con Luhn
- ✅ Botones de soporte y GitHub
- ✅ Meta tags de seguridad
- ✅ Optimización móvil completa

### v1.0.0
- Versión inicial

## 🚀 Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/TheBrayanlive/gpay-kbra.git
```

2. Abre `index.html` en tu navegador

3. Ingresa los datos de tu tarjeta para asociarla a Google Pay

4. ¡Listo! Tu tarjeta será validada y asociada a GPay

## ⚠️ Nota Importante

Para evitar advertencias del navegador sobre "página peligrosa", se recomienda:
- Hospedar en un servidor con HTTPS
- Usar servicios como Netlify, Vercel o GitHub Pages
- Obtener certificado SSL gratuito

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💡 Características Futuras

- [ ] Integración directa con API de Google Pay
- [ ] Sincronización automática con cuenta GPay
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas
- [ ] Historial de tarjetas asociadas
- [ ] Gestión de múltiples tarjetas en GPay
- [ ] Notificaciones de transacciones

---

**Desarrollado con 💚 por [TheBrayan](https://github.com/TheBrayanlive)**

**¿Te gusta el proyecto? ⭐ Dale una estrella en GitHub!**
