# 🪲 Proyecto: EcoCaza

## 1. Descripción general

El proyecto es una **web app desarrollada con React** inspirada en *Pokémon Go*, donde los usuarios pueden **atrapar insectos reales o ficticios** al escanear códigos QR.  
Cada insecto atrapado se **guarda en el Local Storage del navegador**, se muestra en una **colección personal**, y **desbloquea un audio generado con IA** que cuenta su historia, características y su importancia ecológica o cultural.

---

## 2. Flujo básico del usuario

1. El usuario **escanea un código QR** en un lugar físico (por ejemplo, un parque o museo).  
2. El QR **redirige a una URL específica** (por ejemplo: `/insecto/escarabajo-azul`).  
3. En esa página aparece:  
   - La **imagen o modelo** del insecto.  
   - Un **botón “Atrapar”**.  
4. Al presionar **Atrapar**, el insecto se **guarda en Local Storage** (colección personal del usuario).  
5. Una vez atrapado, se **desbloquea el audio narrado con IA** sobre ese insecto.  
6. El usuario puede ir a su **Colección** para ver todos los insectos capturados y volver a escuchar sus audios.

---

## 3. Funcionalidades actuales (ya implementadas)

- ✅ Escaneo QR (redirige correctamente al insecto correspondiente).  
- ✅ Página individual para cada insecto.  
- ✅ Botón “Atrapar” que guarda el insecto en el Local Storage.  
- ✅ Sistema de colección (lista de insectos atrapados).  
- ✅ Reproducción de audios narrativos generados con IA.

---

## 4. Funcionalidades futuras (planeadas)

- 🔜 Sistema de niveles o logros por cantidad de insectos atrapados.  
- 🔜 Modo “mapa” para mostrar los lugares donde hay insectos disponibles.  
- 🔜 Sistema de login con nombre o correo (opcional, para sincronizar colecciones).  
- 🔜 Compatibilidad con PWA para usar sin conexión.  
- 🔜 Modo educativo con trivias sobre los insectos atrapados.

---

## 5. Objetivo principal

Educar de forma divertida sobre la **biodiversidad e importancia ecológica** de los insectos locales, combinando **exploración, gamificación y narrativas generadas con IA**.

---

## 6. Tecnologías utilizadas

- **Frontend:** React.js  
- **Almacenamiento local:** LocalStorage  
- **Audio narrativo:** Generado con IA (modelo de texto a voz)  
- **QRs:** Generados externamente (enlazan a URLs específicas del sitio)  
- **Estilo:** TailwindCSS (opcional)  
- **Hosting:** GitHub Pages o Netlify  

---

## 7. Cómo debe ayudarte la IA (TRAE)

Cada vez que le des este contexto, la IA debe:

- Entender que **ya existe una base funcional** y que el proyecto está hecho con **React**.  
- Sugerir **mejoras o nuevas funciones** manteniendo la coherencia con el flujo actual.  
- Ayudarte a **escribir o corregir código React**, manejar el Local Storage o conectar los QR.  
- Generar **textos o audios educativos** sobre insectos con tono informativo y amigable.  
- Responder de manera **breve, directa y técnica** cuando se trate de programación.  
- Responder con **creatividad y narrativa** cuando se trate de las historias o audios.

---
