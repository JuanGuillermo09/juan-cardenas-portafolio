import { Injectable, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Injectable()
export class ProjectsTranslateService {
  private lang = inject(LangService);

  private dict: Record<string, Record<string, string>> = {
    es: {
      'projects.title': 'Proyectos Personales',
      'projects.subtitle': 'Soluciones Desarrolladas',
      'projects.intro': 'Conoce algunos de los proyectos en los que he trabajado. Cada uno refleja mi interés por transformar ideas en soluciones funcionales, aplicando buenas prácticas de desarrollo y un enfoque orientado a la mejora continua.',
      'projects.world_pizza': 'Página web responsive estilo restaurante, moderna y rápida.',
      'projects.spotify': 'Proyecto tipo Spotify con reproducción local y autenticación.',
      'projects.mis_nota': 'Aplicación Angular monorepo para gestión pública y privada.',
      'projects.admin_app': 'Aplicación web y móvil para gestión de productos y ventas. Calcula ganancias y muestra datos en tiempo real.',
      'projects.portfolio': 'Mi portafolio web responsive.',
      'projects.flappy_bird': 'Proyecto de videojuego 2D desarrollado para reforzar conceptos de programación orientada a objetos, control de físicas, colisiones y lógica de juego.',
      'projects.banquesoft_client': 'Aplicación web orientada al cliente para la gestión de eventos, que permite autenticación de usuarios, agendamiento de citas, generación de cotizaciones con descarga en PDF, visualización de promociones y envío automático de confirmaciones por correo electrónico.',
      'projects.banquesoft_admin': 'Aplicación web administrativa para la organización de eventos, con gestión de clientes y administradores, control de citas y notificaciones, manejo de proveedores y menaje, definición de servicios y precios, creación de contratos y generación de recibos en PDF.',
      'projects.flask_crud': 'Aplicación web full stack con autenticación de usuarios y gestión de datos. Desarrollada como prueba técnica para posición Frontend, implementando un sistema CRUD completo con base de datos local SQLite, validaciones frontend/backend y empaquetado como ejecutable .exe para distribución sin dependencias.',
      'projects.separatas_pos': 'Sistema full stack para gestión de promociones dinámicas en sistemas POS. Desarrollado como prueba técnica avanzada, implementando arquitectura extensible para diferentes tipos de descuentos, validación de traslape de fechas, containerización completa con Docker y pipeline CI/CD automatizado con GitHub Actions para despliegue.',
      'projects.calculadora': 'Calculadora web con operaciones básicas.',
      'projects.monetary_control': 'Proyecto en desarrollo, enfocado en integración frontend-backend y gestión de base de datos con buenas prácticas de arquitectura y seguridad.',
      'projects.tag_oop': 'POO',
      'projects.tag_pyinstaller': 'PyInstaller (generación de ejecutable .exe)',
    },
    en: {
      'projects.title': 'Personal Projects',
      'projects.subtitle': 'Developed Solutions',
      'projects.intro': 'Check out some of the projects I have worked on. Each one reflects my interest in transforming ideas into functional solutions, applying good development practices and a continuous improvement approach.',
      'projects.world_pizza': 'Responsive restaurant-style website, modern and fast.',
      'projects.spotify': 'Spotify-like project with local playback and authentication.',
      'projects.mis_nota': 'Angular monorepo application for public and private management.',
      'projects.admin_app': 'Web and mobile application for product and sales management. Calculates profits and displays real-time data.',
      'projects.portfolio': 'My responsive web portfolio.',
      'projects.flappy_bird': '2D video game project developed to reinforce concepts of object-oriented programming, physics control, collisions and game logic.',
      'projects.banquesoft_client': 'Client-oriented web application for event management, featuring user authentication, appointment scheduling, PDF quote generation, promotion display, and automatic email confirmations.',
      'projects.banquesoft_admin': 'Administrative web application for event organization, with client and admin management, appointment and notification control, vendor and supplies management, service and pricing definition, contract creation and PDF receipt generation.',
      'projects.flask_crud': 'Full stack web application with user authentication and data management. Developed as a technical test for a Frontend position, implementing a complete CRUD system with local SQLite database, frontend/backend validations and packaged as a .exe executable for dependency-free distribution.',
      'projects.separatas_pos': 'Full stack system for dynamic promotion management in POS systems. Developed as an advanced technical test, implementing extensible architecture for different discount types, date overlap validation, full Docker containerization and automated CI/CD pipeline with GitHub Actions for deployment.',
      'projects.calculadora': 'Web calculator with basic operations.',
      'projects.monetary_control': 'Project in development, focused on frontend-backend integration and database management with good architecture and security practices.',
      'projects.tag_oop': 'OOP',
      'projects.tag_pyinstaller': 'PyInstaller (.exe generation)',
    },
  };

  t(key: string): string {
    return this.dict[this.lang.currentLang()]?.[key] ?? key;
  }
}
