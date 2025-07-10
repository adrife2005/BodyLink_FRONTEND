/app
│
├── layout.tsx                 → Layout raíz (puede incluir theme provider)
├── page.tsx                   → Landing page pública (home)
├── login/page.tsx             → Login
├── register/page.tsx          → Registro
│
├── dashboard                  → App privada (requiere auth)
│   ├── layout.tsx             → Layout con sidebar/navbar
│   ├── page.tsx               → Dashboard principal (inicio)
│   ├── patients               → Sección pacientes
│   │   └── page.tsx           → Lista de pacientes
│   └── appointments           → Sección turnos
│       └── page.tsx           → Lista de turnos
│
/components                    → Componentes genéricos y reutilizables
/features                      → Lógica modular por dominio
│   ├── auth                   → Registro, login, sesiones
│   ├── patients               → CRUD pacientes
│   └── appointments           → Gestión de turnos
/hooks                         → Hooks globales
/lib                           → Clientes externos (ej: API, auth)
/styles                        → Estilos globales, Tailwind
/types                         → Tipos globales
/utils                         → Utilidades generales
/validations                   → Schemas Zod para formularios
/public                        → Imágenes estáticas (landing, logo, etc.)
/env                           → Variables de entorno (Next.js)


## 📌 Reglas Generales

### 1. Separación de responsabilidades
- Nada de lógica compleja en `/app` ni en los componentes de página.
- Toda lógica por dominio (pacientes, citas, etc.) va en `/features/feature`.

### 2. Componentes
- Generales: en `/components`
- Específicos del dominio: en `/features/feature/components`

### 3. Hooks
- Globales: en `/hooks`
- Por feature: en `/features/feature/hooks`
- No hacer side-effects directamente en los componentes.

### 4. Servicios
- Toda llamada a API o lógica de negocio se centraliza en `/features/feature/services`
- Nada de fetch o lógica en el componente directamente.

### 5. Validaciones
- Usar `react-hook-form` + `zod`
- Validaciones centralizadas en `/validations`
- Se usa `zodResolver()` con `useForm`

### 6. Tipos
- Globales en `/types`
- Por feature en `/features/feature/types`

### 7. Utils
- Funciones reutilizables puras en `/utils`
- Específicas de una feature en `/features/feature/utils`

### 8. Librerías de UI
- `lucide-react`: solo íconos
- `clsx`, `cva`: solo para construir clases condicionales
- `tailwind-merge`: para limpiar clases duplicadas
- `date-fns`: para manejo de fechas (nunca usar `new Date()` directo si se puede evitar)
- `shadcn/ui`: componentes UI

### 9. Naming
- Componentes: `PascalCase`
- Funciones, hooks, utils: `camelCase`
- Archivos `index.ts` para exportar desde carpetas
- Naming de variables: `camelCase`
- Naming de archivos: `kebab-case`

### 10. Linting
- `eslint` + `prettier`
- Reglas de `eslint` extendidas de `@tanstack/eslint-config`
- `prettier` configurado para `nextjs`

### 11. Git Hooks
- Husky + Lint Staged
- `pre-commit`: linting automático
- `commit-msg`: verificar con commitlint

