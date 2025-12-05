# Crehana Test - Countries App

Pequeña aplicación móvil (Expo + React Native) que muestra un listado de países, filtros por continente y moneda, y una pantalla de detalle por país. Está organizada siguiendo una variante de "screaming architecture" (código organizado por feature).

## Estructura del proyecto (resumen)

- `src/features/countries` - Feature principal con capas: `domain`, `data`, `presentation`.
- `src/app/navigation` - Navigators / rutas.
- `src/core` - Utilidades y componentes compartidos.

## Funcionalidades implementadas

- Pantalla de listado de países con:
  - Barra de búsqueda por nombre.
  - Filtros por continente y moneda.
  - Cada ítem muestra: nombre, código, continente y una representación (avatar/flag).
- Pantalla de detalle (estructura base) preparada para mostrar información y reproductor HLS (puede requerir dependencias adicionales).

## Dependencias clave

- `expo`
- `react` / `react-native`
- `@react-navigation/native` y `@react-navigation/native-stack`
- `nativewind` + `tailwindcss`
- `@react-native-picker/picker`
- `expo-video`

## Configuración rápida (desarrollo)

Requisitos previos:

- Node.js 24+ recomendado
- Expo CLI
- Tener un emulador Android/iOS o Expo Go en tu dispositivo

Pasos:

1. Clona el repositorio y entra en la carpeta:

```powershell
git clone https://github.com/nicolasroa26/crehana-test
cd crehana-test
```

2. Instala las dependencias:

```powershell
npm install
```

3. Inicia Metro/Expo:

```powershell
npx expo start -c
```

4. Abrir en dispositivo/emulador: usar las teclas indicadas por Expo (a/android/ web) o escanear el QR en Expo Go.
