import { Injectable, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Injectable()
export class ProjectsTranslateService {
  private lang = inject(LangService);

  private dict: Record<string, Record<string, string>> = {
    es: {
      // ---------- Títulos y encabezados de la página ----------
      'projects.title': 'Proyectos Personales',
      'projects.subtitle': 'Soluciones Desarrolladas',
      'projects.intro': 'Conoce algunos de los proyectos en los que he trabajado. Cada uno refleja mi interés por transformar ideas en soluciones funcionales, aplicando buenas prácticas de desarrollo y un enfoque orientado a la mejora continua.',
      'projects.deployed': 'Proyectos Desplegados',
      'projects.not_deployed': 'Proyectos No Desplegados',
      'projects.in_development': 'Proyectos en Desarrollo',
      // ---------- Descripciones de proyectos: [D]=Desplegado, [ND]=No desplegado, [DEV]=En desarrollo ----------
      'projects.securescan_description': 'Plataforma de auditoría automatizada de seguridad web que analiza HTTPS/TLS, headers, cookies, tecnologías e información expuesta, clasificando los hallazgos por riesgo y generando un Security Score e informes PDF con referencias a estándares internacionales.', // [D] SecureScan
      'projects.lexia_colombia': '    Asistente legal con inteligencia artificial especializado en legislación colombiana. Implementa arquitectura RAG para consultar artículos de la ley, búsqueda semántica mediante embeddings y generación de respuestas con citas verificables utilizando múltiples proveedores de IA.', // [D] LexIA Colombia
      'projects.contacts': 'Aplicación web full stack para gestión de contactos personales con autenticación de usuarios mediante Firebase Auth. Permite crear, editar, eliminar y buscar contactos con almacenamiento en tiempo real en Firestore Database. Incluye validaciones de formularios, diseño responsive y persistencia de datos en la nube con sincronización automática entre dispositivos.', // [D] Contacts
      'projects.sigr': 'Sistema Integral de Gestión de Restaurante - Aplicación web para la administración integral de un restaurante, permitiendo gestionar pedidos, reservas, menú, usuarios y operaciones de caja desde una única plataforma. Incluye autenticación con control de acceso por roles, dashboard con indicadores de gestión y módulos administrativos para optimizar la operación diaria del negocio.', // [D] SIGR
      'projects.world_pizza': 'Página web responsive estilo restaurante, moderna y rápida.', // [D] World Pizza
      'projects.spotify': 'Aplicación de streaming de música tipo Spotify con autenticación mediante JWT y reproducción de audio local. Permite a los usuarios iniciar sesión y reproducir canciones almacenadas en el servidor.', // [D] Spotify Web
      'projects.mis_nota': 'Aplicación Angular monorepo para gestión pública y privada.', // [ND] Mis Nota Web
      'projects.admin_app': 'Aplicación web y móvil para gestión de productos y ventas. Calcula ganancias y muestra datos en tiempo real.', // [ND] AdminApp
      'projects.portfolio': 'Mi portafolio web responsive.', // [D] Mi Portafolio Web
      'projects.flappy_bird': 'Proyecto de videojuego 2D desarrollado para reforzar conceptos de programación orientada a objetos, control de físicas, colisiones y lógica de juego.', // [D] Flappy Bird
      'projects.banquesoft_client': 'Aplicación web orientada al cliente para la gestión de eventos, que permite autenticación de usuarios, agendamiento de citas, generación de cotizaciones con descarga en PDF, visualización de promociones y envío automático de confirmaciones por correo electrónico.', // [ND] BanqueSoft Cliente
      'projects.banquesoft_admin': 'Aplicación web administrativa para la organización de eventos, con gestión de clientes y administradores, control de citas y notificaciones, manejo de proveedores y menaje, definición de servicios y precios, creación de contratos y generación de recibos en PDF.', // [ND] BanqueSoft Administrador
      'projects.flask_crud': 'Aplicación web full stack con autenticación de usuarios y gestión de datos. Desarrollada como prueba técnica para posición Frontend, implementando un sistema CRUD completo con base de datos local SQLite, validaciones frontend/backend y empaquetado como ejecutable .exe para distribución sin dependencias.', // [D] Flask Web CRUD
      'projects.separatas_pos': 'Sistema full stack para gestión de promociones dinámicas en sistemas POS. Desarrollado como prueba técnica avanzada, implementando arquitectura extensible para diferentes tipos de descuentos, validación de traslape de fechas, containerización completa con Docker y pipeline CI/CD automatizado con GitHub Actions para despliegue.', // [ND] Separatas POS
      'projects.calculadora': 'Calculadora web con operaciones básicas.', // [D] Calculadora
      'projects.monetary_control': 'Aplicación para llevar el control monetario de gastos, ganancias y pérdidas. Permite gestionar todo lo financiero con registro de transacciones, cálculo de balances, reportes de ingresos y egresos, y seguimiento del estado financiero personal.', // [DEV] Monetary Control
      'projects.control_tiempo': 'Aplicación para llevar un orden de las tareas que se asignan a uno. Permite gestionar, organizar y dar seguimiento a las tareas asignadas con sistema de prioridades, estados y fechas de entrega.', // [DEV] Time Control
      'projects.sitio_secreto': 'SitioSecreto es una aplicación web y móvil que ayuda a los usuarios a descubrir restaurantes, bares, cafeterías, hoteles y lugares únicos cerca de su ubicación. La plataforma permite explorar sitios recomendados, consultar información detallada y navegar fácilmente hacia ellos mediante integración con mapas y geolocalización.', // [DEV] Sitio Secreto
      'projects.soma': 'SOMA (Sistema Operativo Multitarea Asistido) es una aplicación de escritorio impulsada por inteligencia artificial que permite a los usuarios interactuar con su computador mediante lenguaje natural. El asistente facilita la búsqueda y administración de archivos, la ejecución de aplicaciones y comandos, el monitoreo del sistema y la automatización de tareas, ofreciendo una forma más intuitiva, rápida y eficiente de controlar el sistema operativo.', // [DEV] Soma
      'projects.cyberguard': 'Plataforma integral de ciberseguridad para Windows que integra un Vulnerability Scanner, un Sistema de Detección de Intrusos (IDS), un SIEM, gestión de alertas e incidentes y un dashboard web desarrollado en Angular. Centraliza la detección de vulnerabilidades, el análisis de servicios expuestos, la recolección y correlación de eventos de seguridad y la gestión de alertas por severidad con historial y trazabilidad. Todas las pruebas se realizan exclusivamente en entornos propios, autorizados o controlados.', // [ND] CyberGuard
      'projects.mundo_de_rescate_title': 'Mundo de Rescate',
      'projects.mundo_de_rescate': 'Juego educativo de programación por bloques hecho en HTML + CSS + JavaScript puro. Recorres un mundo con 4 zonas (Bosque, Pueblo, Montaña y Playa) rescatando a 10 personajes con puzzles de lógica: secuencia, condicionales, bucles y laberintos. El progreso se guarda automáticamente en el navegador, incluye controles táctiles para móviles y sonido generado con la Web Audio API. Sin librerías ni servidor: funciona abriendo index.html.', // [D] Mundo de Rescate
      // ---------- Etiquetas de tags y botones ----------
      'projects.tag_oop': 'POO',
      'projects.tag_pyinstaller': 'PyInstaller (generación de ejecutable .exe)',
      'projects.ver': 'Ver DEMO',
    },
    en: {
      // ---------- Page titles and headings ----------
      'projects.title': 'Personal Projects',
      'projects.subtitle': 'Developed Solutions',
      'projects.intro': 'Check out some of the projects I have worked on. Each one reflects my interest in transforming ideas into functional solutions, applying good development practices and a continuous improvement approach.',
      'projects.deployed': 'Deployed Projects',
      'projects.not_deployed': 'Not Deployed Projects',
      'projects.in_development': 'Projects in Development',
      // ---------- Project descriptions: [D]=Deployed, [ND]=Not deployed, [DEV]=In development ----------
      'projects.securescan_description': 'Automated web security auditing platform that analyzes HTTPS/TLS, headers, cookies, technologies and exposed information, classifying findings by risk and generating a Security Score and PDF reports with references to international standards.', // [D] SecureScan
      'projects.lexia_colombia': 'Legal assistant with artificial intelligence specialized in Colombian legislation. Implements RAG architecture to consult law articles, semantic search through embeddings, and response generation with verifiable citations using multiple AI providers.', // [D] LexIA Colombia
      'projects.contacts': 'Full stack web application for personal contact management with user authentication via Firebase Auth. Allows creating, editing, deleting and searching contacts with real-time storage in Firestore Database. Includes form validations, responsive design and cloud data persistence with automatic synchronization across devices.', // [D] Contacts
      'projects.sigr': 'Integrated Restaurant Management System - Web application for comprehensive restaurant management, allowing the handling of orders, reservations, menu, users and cash operations from a single platform. Includes authentication with role-based access control, dashboard with management indicators and administrative modules to optimize daily business operations.', // [D] SIGR
      'projects.world_pizza': 'Responsive restaurant-style website, modern and fast.', // [D] World Pizza
      'projects.spotify': 'Music streaming application similar to Spotify with JWT authentication and local audio playback. Allows users to log in and play songs stored on the server.', // [D] Spotify Web
      'projects.mis_nota': 'Angular monorepo application for public and private management.', // [ND] Mis Nota Web
      'projects.admin_app': 'Web and mobile application for product and sales management. Calculates profits and displays real-time data.', // [ND] AdminApp
      'projects.portfolio': 'My responsive web portfolio.', // [D] My Web Portfolio
      'projects.flappy_bird': '2D video game project developed to reinforce concepts of object-oriented programming, physics control, collisions and game logic.', // [D] Flappy Bird
      'projects.banquesoft_client': 'Client-oriented web application for event management, featuring user authentication, appointment scheduling, PDF quote generation, promotion display, and automatic email confirmations.', // [ND] BanqueSoft Client
      'projects.banquesoft_admin': 'Administrative web application for event organization, with client and admin management, appointment and notification control, vendor and supplies management, service and pricing definition, contract creation and PDF receipt generation.', // [ND] BanqueSoft Admin
      'projects.flask_crud': 'Full stack web application with user authentication and data management. Developed as a technical test for a Frontend position, implementing a complete CRUD system with local SQLite database, frontend/backend validations and packaged as a .exe executable for dependency-free distribution.', // [D] Flask Web CRUD
      'projects.separatas_pos': 'Full stack system for dynamic promotion management in POS systems. Developed as an advanced technical test, implementing extensible architecture for different discount types, date overlap validation, full Docker containerization and automated CI/CD pipeline with GitHub Actions for deployment.', // [ND] Separatas POS
      'projects.calculadora': 'Web calculator with basic operations.', // [D] Calculator
      'projects.monetary_control': 'Application for monetary control of expenses, gains and losses. Allows managing everything financially with transaction recording, balance calculation, income and expense reports, and personal financial status tracking.', // [DEV] Monetary Control
      'projects.control_tiempo': 'Application for keeping track of assigned tasks. Allows managing, organizing and following up on assigned tasks with priority system, status and due dates.', // [DEV] Time Control
      'projects.sitio_secreto': 'SitioSecreto is a web and mobile application that helps users discover restaurants, bars, cafes, hotels and unique places near their location. The platform allows exploring recommended sites, consulting detailed information and easily navigating to them through map integration and geolocation.', // [DEV] Sitio Secreto
      'projects.soma': 'SOMA (Assisted Multitasking Operating System) is a desktop application powered by artificial intelligence that allows users to interact with their computer using natural language. The assistant facilitates file search and management, application execution and commands, system monitoring and task automation, offering a more intuitive, fast and efficient way to control the operating system.', // [DEV] Soma
      'projects.cyberguard': 'Comprehensive cybersecurity platform for Windows that integrates a Vulnerability Scanner, an Intrusion Detection System (IDS), a SIEM, alert and incident management, and a web dashboard developed in Angular. Centralizes vulnerability detection, exposed services analysis, security event collection and correlation, and severity-based alert management with history and traceability. All testing is performed exclusively in own, authorized or controlled environments.', // [ND] CyberGuard
      'projects.mundo_de_rescate_title': 'Rescue World',
      'projects.mundo_de_rescate': 'Educational block-based programming game built with pure HTML + CSS + JavaScript. You explore a world with 4 zones (Forest, Village, Mountain and Beach) rescuing 10 characters through logic puzzles: sequences, conditionals, loops and mazes. Progress is saved automatically in the browser, includes touch controls for mobile and sound generated with the Web Audio API. No libraries or server required: just open index.html.', // [D] Mundo de Rescate
      // ---------- Tag labels and buttons ----------
      'projects.tag_oop': 'OOP',
      'projects.tag_pyinstaller': 'PyInstaller (.exe generation)',
      'projects.ver': 'See DEMO',
    },
  };

  t(key: string): string {
    return this.dict[this.lang.currentLang()]?.[key] ?? key;
  }
}
