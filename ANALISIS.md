# Análisis del Codebase — AllChemistry Landing Page

> Fecha: 2026-02-07
> Stack: React 19 + TypeScript 5.8 + Vite 6 + Tailwind CSS 4

---

## Resumen General

El proyecto tiene una base sólida con un stack moderno, buena separación de componentes y TypeScript en modo estricto. Sin embargo, se identificaron mejoras en rendimiento, accesibilidad, SEO, organización de archivos y limpieza de código.

**Puntuación general: 6/10**

| Categoría | Estado |
|-----------|--------|
| Dependencias | Hay 5 paquetes sin usar |
| TypeScript | Modo estricto activo, sin `any` |
| Vite / Build | Configuración correcta |
| Tailwind | v4 con design tokens oklch() |
| ESLint | Configurado correctamente |
| Componentes | Buena estructura general |
| Responsividad | Mobile-first con `max-md:` |
| Accesibilidad | Parcial — faltan ARIA labels y alt text |
| SEO | Incompleto — sin meta tags |
| Rendimiento | Problemas con imágenes y scroll |

---

## Prioridad Alta

### 1. Dependencias no utilizadas

Las siguientes dependencias están instaladas pero nunca se usan en el código. Eliminándolas se reduce el bundle en ~100KB+.

| Paquete | Motivo |
|---------|--------|
| `@gsap/react` | Importado en `landing-page.tsx` pero sin uso real |
| `@fortawesome/free-brands-svg-icons` | Nunca importado; se usa Lucide en su lugar |
| `@fortawesome/free-regular-svg-icons` | Nunca importado |
| `@fortawesome/free-solid-svg-icons` | Nunca importado |
| `@fortawesome/react-fontawesome` | Nunca importado |

**Acción:** Ejecutar `npm uninstall @gsap/react @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome` y eliminar el import de GSAP en `src/components/landing-page.tsx`.

---

### 2. Bugs y typos en el código

| Archivo | Línea | Problema | Corrección |
|---------|-------|---------|------------|
| `src/pages/home/components/product-card.tsx` | 45 | Clase CSS `jusce` inválida | Cambiar a `justify-start` o `justify-center` |
| `src/components/faq-questions.tsx` | 7 | Variable `FaqImaga` | Renombrar a `FaqImage` |
| `src/components/icons/IntagramIcon.tsx` | — | Nombre de archivo con typo | Renombrar a `InstagramIcon.tsx` |
| `src/utils/products.ts` | 13+ líneas | Carácter Unicode invisible (U+2061) en descripciones | Limpiar caracteres invisibles |
| `src/pages/home/components/about-us.tsx` | 42 | `alt="allchemistri"` | Corregir a `alt="allchemistry"` |

---

### 3. Rendimiento del scroll en Navbar

**Archivo:** `src/components/nav-bar.tsx`

El listener de scroll se ejecuta en cada pixel sin throttle ni debounce, causando re-renders innecesarios del componente completo.

```typescript
// Problema actual
useEffect(() => {
  const handleScroll = () => {
    setShowLogo(window.scrollY > window.innerHeight);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**Solución recomendada:**
- Agregar throttle (~100ms) con `requestAnimationFrame` o un custom hook `useScrollPosition()`
- Envolver el componente con `React.memo`

---

### 4. Optimización de imágenes

| Archivo | Problema |
|---------|---------|
| `src/pages/home/components/products-carousel.tsx` | 15 imágenes importadas estáticamente; se cargan todas de golpe |
| `src/pages/home/home-page.tsx` | Imagen hero sin `loading="lazy"`, sin `srcset`, sin formato WebP |
| `src/components/faq-questions.tsx` | Imagen solo en JPG; no usa formatos modernos |

**Soluciones:**
- Agregar `loading="lazy"` y `decoding="async"` a imágenes below-the-fold
- Usar Intersection Observer para cargar imágenes del carrusel bajo demanda
- Convertir imágenes a WebP con fallback JPG
- Agregar `srcset` para servir imágenes responsivas según el dispositivo

---

## Prioridad Media

### 5. Datos de productos duplicados

Existen dos fuentes de datos para productos:

| Archivo | Productos | Estado |
|---------|-----------|--------|
| `src/utils/products.ts` | 3 (con detalle completo) | **En uso** |
| `src/mock/products.json` | 13 (estructura básica) | **Sin usar** |

**Acción:** Eliminar `src/mock/products.json` para mantener una sola fuente de verdad.

---

### 6. CSS fragmentado en 3 archivos

| Archivo | Contenido | Líneas |
|---------|-----------|--------|
| `src/index.css` | Tailwind, tokens, animaciones, fuentes | ~200 |
| `src/App.css` | Solo estilos de scrollbar | ~5 |
| `styles.css` (raíz) | View transitions | ~6 |

**Acción:** Mover el contenido de `App.css` y `styles.css` a `index.css` y eliminar los archivos sobrantes.

---

### 7. Strings hardcodeados

Datos de contacto del negocio están dispersos en múltiples componentes:

- **`footer.tsx`**: dirección, teléfono, email, URLs de redes sociales
- **`faq-questions.tsx`**: horarios, URL de Google Forms
- **`landing-page.tsx`**: textos de la empresa

**Solución:** Crear `src/constants/contact.ts` centralizando toda la información:

```typescript
export const CONTACT = {
  address: "Pedro Pico 445 - Bahía Blanca",
  phone: "+5492915354645",
  email: "allchemistrybb@gmail.com",
  instagram: "https://www.instagram.com/allchemistry.bb",
  facebook: "https://www.facebook.com/people/Allchemistry/100054537636260/",
  googleFormUrl: "https://docs.google.com/forms/d/e/...",
  hours: {
    weekdays: "Lunes a Viernes: 8:00 - 17:00",
    saturday: "Sábados: 8:00 - 12:00",
  },
} as const;
```

---

### 8. Accesibilidad (a11y)

| Problema | Archivo | Detalle |
|----------|---------|---------|
| Alt text vacío | `products-carousel.tsx:47` | `alt=""` en imágenes del carrusel |
| Sin `aria-label` | `nav-bar.tsx` | Navegación sin etiqueta accesible |
| Links de iconos sin texto | `footer.tsx` | Icons de redes sociales sin descripción |
| Sin controles de pausa | `products-carousel.tsx` | Carrusel auto-scroll sin botón de pausa |
| Posible bajo contraste | `landing-page.tsx` | Texto gris sobre fondo azul al 35% opacidad |

**Soluciones:**
- Agregar alt text descriptivo a todas las imágenes
- Agregar `aria-label` a `<nav>` y links de iconos
- Agregar botón de pausa al carrusel
- Verificar contraste con herramientas WCAG AA

---

### 9. SEO incompleto

**Archivo:** `index.html`

Falta:
- `<meta name="description" content="...">`
- Open Graph tags (`og:title`, `og:description`, `og:image`)
- URL canónica (`<link rel="canonical">`)
- Datos estructurados (JSON-LD para negocio local)

**Archivo:** `src/pages/home/home-page.tsx`

- Múltiples `<h1>` en la página — debería haber solo uno por página
- Jerarquía de headings inconsistente

---

### 10. Keys de React con índice de array

**Archivo:** `src/pages/home/components/product-list.tsx:18`

```typescript
// Problema
{products.map((product, idx) => (
  <ProductCard key={idx} product={product} />
))}

// Solución: usar identificador único
{products.map((product) => (
  <ProductCard key={product.title} product={product} />
))}
```

Usar índice como key causa re-renders innecesarios si el array cambia de orden.

---

## Prioridad Baja

### 11. Componentes de iconos duplicados

Los 4 archivos en `src/components/icons/` siguen un patrón idéntico (wrapper de FontAwesome). Dado que FontAwesome no se usa realmente y Lucide es la librería principal, estos componentes deberían migrarse a Lucide.

### 12. Estructura de tipos

No existe un directorio `src/types/`. El tipo `Product` está definido en `src/utils/products.ts` mezclando tipos con datos.

**Solución:** Separar en `src/types/product.ts`.

### 13. Custom hooks inexistentes

El scroll listener del navbar debería extraerse a un hook reutilizable:

```typescript
// src/hooks/useScrollPosition.ts
export function useScrollPosition(threshold: number) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  // ... lógica con throttle
  return isPastThreshold;
}
```

### 14. Espacios extra en classNames

Múltiples archivos tienen doble espacio en strings de `className`:

```typescript
// Problema
className={`flex  max-md:flex-col  h-full`}

// Corrección
className={`flex max-md:flex-col h-full`}
```

### 15. Animación del carrusel siempre activa

**Archivo:** `src/pages/home/components/products-carousel.tsx`

La animación marquee corre infinitamente aunque esté fuera del viewport, consumiendo GPU.

**Solución:** Usar Intersection Observer para pausar la animación cuando no es visible.

### 16. Fuentes sin `font-display: swap`

Las fuentes de Google Fonts cargadas en `index.css` no tienen `font-display: swap`, lo que puede causar FOIT (Flash of Invisible Text) en conexiones lentas.

### 17. Sin Error Boundary

`App.tsx` no tiene un Error Boundary para capturar errores en producción y mostrar un fallback amigable al usuario.

### 18. Google Form sin loading state

**Archivo:** `src/pages/home/components/work-with-us.tsx`

El iframe del formulario solo muestra "Cargando..." como texto plano. Debería tener un skeleton o spinner.

---

## Checklist de mejoras rápidas (~30 min)

- [ ] Eliminar GSAP y FontAwesome del `package.json`
- [ ] Eliminar import de GSAP en `landing-page.tsx`
- [ ] Eliminar `src/mock/products.json`
- [ ] Corregir typo `jusce` en `product-card.tsx`
- [ ] Corregir typo `FaqImaga` → `FaqImage` en `faq-questions.tsx`
- [ ] Renombrar `IntagramIcon.tsx` → `InstagramIcon.tsx`
- [ ] Limpiar caracteres Unicode invisibles en `products.ts`
- [ ] Agregar alt text descriptivo a imágenes del carrusel
- [ ] Consolidar los 3 archivos CSS en `index.css`
- [ ] Agregar `loading="lazy"` a imágenes below-the-fold

---

## Estructura actual del proyecto

```
src/
├── assets/              # Imágenes y logos
│   └── products/        # 15 imágenes de productos
├── components/
│   ├── ui/              # Primitivos shadcn/ui (accordion, button, sheet)
│   ├── icons/           # Wrappers de iconos SVG (4 archivos)
│   ├── nav-bar.tsx
│   ├── footer.tsx
│   ├── landing-page.tsx
│   ├── faq-questions.tsx
│   └── ContactButton.tsx
├── pages/
│   └── home/
│       ├── components/  # Componentes específicos de Home
│       │   ├── about-us.tsx
│       │   ├── product-list.tsx
│       │   ├── product-card.tsx
│       │   ├── products-carousel.tsx
│       │   └── work-with-us.tsx
│       └── home-page.tsx
├── lib/
│   └── utils.ts         # cn() helper
├── utils/
│   └── products.ts      # Tipos + datos de productos
├── mock/
│   └── products.json    # ⚠️ Sin usar
├── App.tsx
├── App.css              # ⚠️ Consolidar en index.css
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## Estructura sugerida

```
src/
├── assets/
│   └── products/
├── components/
│   ├── ui/
│   ├── icons/           # Migrar a Lucide
│   ├── nav-bar.tsx
│   ├── footer.tsx
│   ├── landing-page.tsx
│   ├── faq-questions.tsx
│   └── ContactButton.tsx
├── pages/
│   └── home/
│       ├── components/
│       └── home-page.tsx
├── constants/
│   └── contact.ts       # NUEVO: datos de contacto centralizados
├── hooks/
│   └── useScrollPosition.ts  # NUEVO: hook reutilizable
├── types/
│   └── product.ts       # NUEVO: tipos separados
├── lib/
│   └── utils.ts
├── App.tsx
├── index.css            # CSS consolidado
├── main.tsx
└── vite-env.d.ts
```
