# BodyLink 🥗

**BodyLink** es una plataforma integral diseñada para nutricionistas profesionales que buscan optimizar la gestión de sus consultas, pacientes y planes nutricionales.

## 🚀 Características Principales

### 📊 Dashboard Completo
- **Gestión de Pacientes**: Historiales médicos completos, seguimiento personalizado y progreso nutricional
- **Sistema de Citas**: Agenda inteligente con recordatorios automáticos y gestión de consultas
- **Planes Nutricionales**: Creación y seguimiento de planes personalizados
- **Finanzas**: Control de ingresos, gastos y facturación de la consulta
- **Mensajería**: Comunicación directa con pacientes
- **Noticias**: Feed especializado del sector nutricional
- **Configuración**: Personalización de perfil y preferencias

### 🎨 Diseño Moderno
- **UI/UX Profesional**: Interfaz limpia y moderna con Tailwind CSS
- **Modo Oscuro/Claro**: Tema adaptable según preferencias del usuario
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Componentes Reutilizables**: Basado en shadcn/ui para consistencia

### 🏗️ Arquitectura Robusta
- **Feature-Based Structure**: Organización modular por funcionalidades
- **TypeScript**: Tipado estático para mayor confiabilidad
- **Next.js 14**: Framework React con App Router
- **Separación de Responsabilidades**: Landing pública y dashboard privado

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Animations**: Magic UI components
- **State Management**: React Hooks
- **Form Handling**: React Hook Form + Zod
- **Theme**: next-themes para modo oscuro/claro

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm, yarn o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/bodylinkfront.git
cd bodylinkfront
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
bodylinkfront/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Landing page pública
│   ├── login/                   # Autenticación
│   ├── register/                # Registro
│   ├── patients/                # Página pública de pacientes
│   ├── appointments/            # Página pública de citas
│   └── dashboard/               # App privada
│       ├── layout.tsx           # Layout con sidebar
│       ├── patients/            # Gestión de pacientes
│       ├── appointments/        # Gestión de citas
│       ├── nutrition-plans/     # Planes nutricionales
│       ├── finances/            # Gestión financiera
│       ├── messages/            # Mensajería
│       ├── news/                # Noticias
│       └── settings/            # Configuración
├── components/                   # Componentes reutilizables
│   ├── ui/                      # Componentes base (shadcn/ui)
│   ├── navbar.tsx               # Navegación pública
│   └── app-sidebar.tsx          # Sidebar del dashboard
├── features/                     # Lógica por dominio
│   ├── auth/                    # Autenticación
│   ├── patients/                # Funcionalidades de pacientes
│   └── appointments/            # Funcionalidades de citas
├── hooks/                        # Hooks personalizados
├── lib/                          # Utilidades y configuración
└── public/                       # Archivos estáticos
```

## 🎯 Rutas Principales

### Páginas Públicas (Landing)
- `/` - Página principal
- `/patients` - Información sobre gestión de pacientes
- `/appointments` - Información sobre sistema de citas
- `/login` - Inicio de sesión
- `/register` - Registro de usuarios

### Dashboard (Área Privada)
- `/dashboard` - Panel principal
- `/dashboard/patients` - Gestión de pacientes
- `/dashboard/appointments` - Gestión de citas
- `/dashboard/nutrition-plans` - Planes nutricionales
- `/dashboard/finances` - Gestión financiera
- `/dashboard/messages` - Mensajería
- `/dashboard/news` - Noticias del sector
- `/dashboard/settings` - Configuración

## 🎨 Guía de Estilos

### Colores del Sistema
Los colores están definidos en `app/globals.css` y siguen el sistema de design tokens de shadcn/ui:

- **Primary**: Color principal de la marca
- **Secondary**: Color secundario
- **Muted**: Colores apagados para texto secundario
- **Accent**: Color de acento para destacar elementos
- **Destructive**: Para acciones destructivas
- **Border**: Bordes y separadores

### Convenciones de Naming
- **Componentes**: PascalCase (`PatientCard`)
- **Funciones/Hooks**: camelCase (`usePatients`)
- **Archivos**: kebab-case (`patient-form.tsx`)
- **Carpetas**: kebab-case (`nutrition-plans`)

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige errores de linting automáticamente

# Tipos
npm run type-check   # Verifica tipos de TypeScript
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Reglas de Contribución
- Seguir las convenciones de naming establecidas
- Mantener la arquitectura Feature-Based
- Usar TypeScript para todo el código
- Seguir las guías de estilo con ESLint y Prettier
- Escribir commits descriptivos

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollo Frontend**: Equipo BodyLink
- **Diseño UI/UX**: Equipo BodyLink
- **Arquitectura**: Equipo BodyLink

---

**BodyLink** - Transformando la gestión nutricional profesional 🥗✨