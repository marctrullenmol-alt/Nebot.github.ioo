// Datos reales de Equipamiento de Nebot Automoción (basados en /page/equipment y servicios técnicos)
const EQUIPMENT_DATA = [
  {
    id: 'diagnosis',
    num: '01',
    title: 'Equipos de Diagnosis Multimarca y Osciloscopia',
    shortDesc: 'Terminales de última generación para lectura de unidades de mando (ECU), redes multiplexadas y electrónica avanzada.',
    image: 'assets/gallery1.jpg',
    badge: 'DIAGNOSIS · OBD-II / CAN-BUS / DOIP',
    fullDesc: 'Nuestro moderno y completo equipamiento con los más avanzados útiles y aparatos de diagnosis nos permite intervenir sobre cualquiera de los sistemas electrónicos que incorpora su vehículo: unidades de mando (ECU), redes multiplexadas, sistemas de inyección diésel y gasolina, airbag, ABS/ESP y climatización automática.',
    specs: [
      { label: 'Cobertura', val: '100% Multimarca (Turismos y Comerciales)' },
      { label: 'Sistemas', val: 'Motor, Inyección, Airbag, ABS, Confort, Red CAN' },
      { label: 'Funciones', val: 'Lectura/Borrado DTC, Codificación y Telecarga' },
      { label: 'Garantía', val: 'Conforme a especificaciones de fabricante' }
    ],
    serviceTarget: 'Diagnosis'
  },
  {
    id: 'elevadores',
    num: '02',
    title: 'Elevadores Electrohidráulicos y Maquinaria de Taller',
    shortDesc: 'Puentes elevadores de alta capacidad, desmontadoras, equilibradoras electrónicas y utillaje específico multimarca.',
    image: 'assets/equipment.jpg',
    badge: 'MAQUINARIA · ELEVACIÓN Y CHASIS',
    fullDesc: 'Disponemos de maquinaria industrial y puentes elevadores adaptados tanto a turismos como a vehículos comerciales. Esto nos permite realizar con total seguridad intervenciones de mecánica general, cajas de cambio, embragues, amortiguación, dirección, sistemas de escape y neumáticos.',
    specs: [
      { label: 'Capacidad', val: 'Turismos, SUV y Vehículos Comerciales' },
      { label: 'Intervenciones', val: 'Transmisión, Embrague, Suspensión y Frenos' },
      { label: 'Neumáticos', val: 'Equilibrado dinámico y sensores TPMS' },
      { label: 'Seguridad', val: 'Normativa Europea CE vigente' }
    ],
    serviceTarget: 'Mecánica general'
  },
  {
    id: 'gases',
    num: '03',
    title: 'Analizadores de Gases, Opacímetros y Sistemas de Escape',
    shortDesc: 'Control de emisiones contaminantes, diagnóstico de catalizadores, sondas Lambda y filtros de partículas (FAP/DPF).',
    image: 'assets/tip.jpg',
    badge: 'EMISIONES · GASOLINA Y DIÉSEL',
    fullDesc: 'Contamos con analizadores de gases para motores de gasolina y opacímetros de alta precisión para motores diésel. Verificamos el estado real del catalizador, silenciosos, sondas y filtros de partículas (FAP), asegurando una combustión óptima y el cumplimiento de los límites de emisiones en la ITV.',
    specs: [
      { label: 'Motores', val: 'Gasolina (CO / Lambda) y Diésel (Opacidad)' },
      { label: 'Componentes', val: 'Catalizadores, FAP/DPF, EGR y Sondas' },
      { label: 'Prevención', val: 'Revisión recomendada cada 30.000 km' },
      { label: 'Certificación', val: 'Verificación pre-inspección oficial' }
    ],
    serviceTarget: 'Tubo de escape'
  },
  {
    id: 'preitv',
    num: '04',
    title: 'Línea Pre-ITV Completa y Gestión Integral ITV',
    shortDesc: 'Inspección exhaustiva de todos los puntos críticos de la ITV y servicio de recogida para pasar la ITV por usted.',
    image: 'assets/workshop.jpg',
    badge: 'LÍNEA PRE-ITV · ÉXITO GARANTIZADO',
    fullDesc: 'Sometemos su vehículo a una revisión previa completa en nuestra línea Pre-ITV que le garantizará superar con éxito la Inspección Técnica de Vehículos: eficacia y equilibrio de frenada, holguras, reglaje de faros, neumáticos y gases. Y si lo desea, recogemos su coche y pasamos la ITV por usted sin esperas.',
    specs: [
      { label: 'Revisión', val: 'Frenada, Alumbrado, Gases, Neumáticos y Chasis' },
      { label: 'Servicio Extra', val: 'Pasamos la ITV por ti (Recogida y Entrega)' },
      { label: 'Ahorro', val: 'Evita segundas inspecciones desfavorables' },
      { label: 'Comodidad', val: 'Sin esperas ni desplazamientos' }
    ],
    serviceTarget: 'Pre-ITV'
  },
  {
    id: 'inyeccion',
    num: '05',
    title: 'Equipamiento de Inyección Diésel, Gasolina y Climatización',
    shortDesc: 'Desde bombas de inyección rotativas tradicionales hasta sistemas Common Rail e inyección directa de última generación.',
    image: 'assets/gallery2.jpg',
    badge: 'INYECCIÓN · COMMON RAIL & CLIMA',
    fullDesc: 'Especialistas en el diagnóstico, mantenimiento y reparación mecánica, eléctrica y electrónica de sistemas de inyección diésel y gasolina (desde los más antiguos hasta última generación), además de estaciones automáticas para el circuito frigorífico y control electrónico de climatización.',
    specs: [
      { label: 'Inyección Diésel', val: 'Bombas rotativas a Common Rail última gen.' },
      { label: 'Inyección Gasolina', val: 'Multipunto, directa y gestión electrónica' },
      { label: 'Climatización', val: 'Circuito frigorífico, compresor y control A/C' },
      { label: 'Garantía Oficial', val: 'Mantiene la garantía del fabricante' }
    ],
    serviceTarget: 'Inyección diésel'
  }
];

// Los 20 servicios reales extraídos de https://nebotautomocion.lawebdetutaller.com/page/app/services
const SERVICES_DATA = [
  {
    id: 'general-mechanics',
    title: 'Mecánica general',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Realizamos todo tipo de operaciones de mantenimiento preventivo y reparación relativas a la mecánica general del vehículo, motor, frenos, climatización, amortiguación, dirección, sistemas de transmisión (caja de cambios y embrague), etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M32.17,29.57L21.51,18.9c0.98-2.05,0.62-4.58-1.08-6.28c-1.35-1.35-3.23-1.86-4.97-1.51l3.72,3.72l-0.92,3.43l-3.43,0.92l-3.72-3.72c-0.34,1.74,0.16,3.62,1.51,4.97c1.7,1.7,4.23,2.06,6.28,1.08l2.66,2.66l-9.91,9.91c-0.07,0.07-0.12,0.16-0.16,0.25c-0.77,1.17-0.64,2.76,0.39,3.8c1.03,1.03,2.62,1.16,3.8,0.39c0.09-0.03,0.17-0.08,0.25-0.16l9.91-9.91l3.73,3.73c-0.76,1.79-0.41,3.93,1.05,5.38c1.92,1.92,5.02,1.92,6.94,0c1.92-1.92,1.92-5.02,0-6.94C36.1,29.16,33.96,28.81,32.17,29.57z"/><path d="M28.46,22.03c0.26,0.26,0.69,0.26,0.95,0l6.03-6.03c0.26-0.26,0.81-0.35,1.07-0.35c0.26,0,0.65-0.25,0.87-0.55l1.47-2.36c0.22-0.3,0.18-0.76-0.08-1.02l-0.48-0.48c-0.26-0.26-0.72-0.3-1.02-0.08l-2.36,1.47c-0.3,0.22-0.55,0.61-0.55,0.87c0,0.26-0.09,0.81-0.35,1.07l-6.03,6.03c-0.26,0.26-0.26,0.69,0,0.95L28.46,22.03z"/></svg>`
  },
  {
    id: 'rapid-mechanics',
    title: 'Mecánica rápida',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Sustitución del aceite motor, filtros, amortiguadores, motor de arranque, alternador, batería, tubos de escape, correa de distribución, revisiones, bujías, carga de aire acondicionado, escobillas limpiaparabrisas, filtro de aire, filtro antipolen, pastillas de frenos, etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M35.83,29.79c-1.82,0-3.38,1.12-4.02,2.71H18.48c-0.67-1.89-2.47-3.25-4.6-3.25c-1.69,0-3.18,0.86-4.05,2.16h4.65l1.57,2.71l-1.57,2.71H9.83c0.88,1.3,2.36,2.16,4.05,2.16c2.12,0,3.93-1.36,4.6-3.25h13.33c0.64,1.59,2.2,2.71,4.02,2.71c2.4,0,4.34-1.94,4.34-4.33C40.17,31.73,38.23,29.79,35.83,29.79z"/><path d="M25,28.5c4.83,0,8.75-3.92,8.75-8.75c0-4.83-3.92-8.75-8.75-8.75c-4.83,0-8.75,3.92-8.75,8.75C16.25,24.58,20.17,28.5,25,28.5z M25,12.17c4.19,0,7.58,3.4,7.58,7.58s-3.4,7.58-7.58,7.58s-7.58-3.4-7.58-7.58S20.81,12.17,25,12.17z"/></svg>`
  },
  {
    id: 'diagnostic',
    title: 'Diagnosis',
    category: 'electronica',
    categoryLabel: 'Electrónica y Diagnosis',
    description: 'Nuestro equipamiento, con los más modernos útiles y aparatos de diagnosis, nos permite ofrecer a nuestros clientes el más completo y profesional servicio de diagnosis y reparación integral para cualquiera de los sistemas del vehículo.',
    icon: `<svg viewBox="0 0 50 50"><path d="M38.42,11H11.58c-0.33,0-0.59,0.27-0.59,0.59v26.81c0,0.33,0.27,0.59,0.59,0.59l26.83-0.01c0.33,0,0.59-0.27,0.59-0.59V11.59C39.01,11.27,38.74,11,38.42,11z M37.87,12.12l0.01,12.32h-1.66c-0.25,0-0.47,0.16-0.56,0.39l-1.61,4.47l-2.85-9.48c-0.08-0.26-0.32-0.43-0.59-0.42c-0.27,0.01-0.5,0.2-0.56,0.46l-1.02,4.58h-0.74L25.6,13.69c-0.07-0.27-0.32-0.46-0.6-0.45c-0.28,0.01-0.51,0.21-0.56,0.49l-2.79,15.82l-2.2-11.9c-0.05-0.27-0.28-0.47-0.56-0.48c-0.27-0.01-0.52,0.17-0.6,0.43l-2.33,8.39l-0.47-1.17c-0.09-0.22-0.31-0.37-0.55-0.37h-2.83V12.12H37.87z"/></svg>`
  },
  {
    id: 'diesel-injection',
    title: 'Inyección diésel',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Diagnosticamos, mantenemos y reparamos (mecánica, electricidad y electrónica) los sistemas de inyección diésel, desde los equipados con bombas de inyección rotativas hasta los de última generación.',
    icon: `<svg viewBox="0 0 50 50"><path d="M11.74,27.99h4.61c1.6,0,2.98,0.6,4.16,1.79c1.18,1.19,1.76,2.6,1.76,4.22c0,1.61-0.59,3.01-1.76,4.2C19.33,39.4,17.95,40,16.35,40h-4.61V27.99z"/><path d="M27.67,21.39l-0.98,0.98c-0.18,0.27-0.15,0.63,0.09,0.87l1.72,1.72l11.19,11.19c0.27,0.27,0.71,0.27,0.98,0s0.27-0.71,0-0.98l-10.7-10.7l0.49-0.49c0.27-0.27,0.27-0.71,0-0.98l-1.72-1.72C28.38,21.12,27.94,21.12,27.67,21.39z"/></svg>`
  },
  {
    id: 'fuel-injection',
    title: 'Inyección de gasolina',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Diagnosticamos, mantenemos y reparamos los diferentes sistemas de inyección de gasolina, desde los más antiguos hasta los de última generación.',
    icon: `<svg viewBox="0 0 50 50"><path d="M23.31,33.03c-0.01,1.05-0.09,1.9-0.23,2.54c-0.14,0.64-0.39,1.24-0.75,1.79c-0.58,0.86-1.29,1.49-2.14,1.88C19.24,39.8,18.18,40,16.91,40c-1.72,0-3.15-0.6-4.29-1.79c-1.14-1.19-1.72-2.69-1.72-4.49c0-1.87,0.59-3.4,1.77-4.58c1.18-1.18,2.7-1.77,4.56-1.77c1.32,0,2.41,0.27,3.29,0.8c0.88,0.53,1.59,1.37,2.15,2.52l-2.91,1.21c-0.27-0.63-0.62-1.1-1.04-1.4c-0.42-0.31-0.93-0.46-1.52-0.46c-0.88,0-1.61,0.35-2.19,1.05c-0.59,0.7-0.88,1.58-0.88,2.63c0,1.1,0.3,2,0.89,2.7c0.59,0.7,1.35,1.05,2.28,1.05c0.71,0,1.27-0.17,1.68-0.51c0.41-0.34,0.67-0.86,0.77-1.55H17.2v-2.38H23.31z"/></svg>`
  },
  {
    id: 'programmed-maintenance',
    title: 'Mantenimiento programado',
    category: 'itv',
    categoryLabel: 'ITV y Mantenimiento',
    description: 'Su vehículo ha de someterse a unas revisiones periódicas predefinidas. La realización de estas operaciones de mantenimiento le asegura no perder la garantía dada por el fabricante.',
    icon: `<svg viewBox="0 0 50 50"><path d="M39.57,15.5l-1.08-0.36c-0.51-0.17-1.19-0.65-1.52-1.06l-2.65-3.32C33.98,10.34,33.27,10,32.74,10h-9.68c-0.53,0-1.28,0.31-1.65,0.68l-3.47,3.47c-0.38,0.38-1.12,0.74-1.64,0.81l-5.82,0.73c-0.53,0.07-0.96,0.56-0.96,1.09v3.87c0,0.53,0.44,0.97,0.97,0.97h0.91c0-2.17,1.76-3.93,3.93-3.93s3.93,1.76,3.93,3.93h11.5c0-2.17,1.76-3.93,3.93-3.93c2.16,0,3.93,1.76,3.93,3.93h0.91c0.53,0,0.97-0.44,0.97-0.97v-3.87C40.48,16.24,40.07,15.67,39.57,15.5z"/><path d="M27,26.43h-4c-0.4,0-0.73,0.33-0.73,0.73v12.12c0,0.4,0.33,0.72,0.73,0.72h4c0.4,0,0.73-0.33,0.73-0.72V27.15C27.73,26.75,27.4,26.43,27,26.43z"/></svg>`
  },
  {
    id: 'electricity',
    title: 'Electricidad',
    category: 'electronica',
    categoryLabel: 'Electrónica y Diagnosis',
    description: 'Batería, alternador, iluminación y alumbrado, seguimiento y reparación de instalación eléctrica, equipamiento eléctrico interior, bujías, motor de arranque, etc.',
    icon: `<svg viewBox="0 0 50 50"><polygon points="19.67,41 33.67,24.33 27,24.33 34.33,11 20.33,11 15.67,27 23.72,26.97"/></svg>`
  },
  {
    id: 'electronic',
    title: 'Electrónica',
    category: 'electronica',
    categoryLabel: 'Electrónica y Diagnosis',
    description: 'Diagnosticamos, mantenemos y reparamos los diferentes sistemas electrónicos con que está equipado su vehículo, redes multiplexadas, unidades de mando, airbag, climatización, etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M18.94,27.77h12.13c0.31,0,0.56-0.25,0.56-0.56v-4.48c0-0.31-0.25-0.56-0.56-0.56H18.94c-0.31,0-0.56,0.25-0.56,0.56v4.48C18.37,27.52,18.63,27.77,18.94,27.77z"/><path d="M22.2,11.06v8.31c0,0.31,0.25,0.56,0.56,0.56h4.48c0.31,0,0.56-0.25,0.56-0.56v-8.31c0-0.31-0.25-0.56-0.56-0.56h-4.48C22.45,10.5,22.2,10.75,22.2,11.06z"/><path d="M22.2,30.63v8.31c0,0.31,0.25,0.56,0.56,0.56h4.48c0.31,0,0.56-0.25,0.56-0.56v-8.31c0-0.31-0.25-0.56-0.56-0.56h-4.48C22.45,30.07,22.2,30.32,22.2,30.63z"/></svg>`
  },
  {
    id: 'brakes',
    title: 'Frenos',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Realizamos todo tipo de intervenciones sobre el sistema de frenos de su vehículo, sustitución de líquido, cambio de pastillas de freno, reparación de desequilibrios durante la frenada, etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M35.69,17.05l-4.42,1.16l-0.03,0.08c2.17,1.82,3.55,4.58,3.55,7.66c0,5.49-4.38,9.95-9.79,9.95c-5.41,0-9.79-4.45-9.79-9.95c0-3.12,1.41-5.9,3.62-7.72l-4.52-1.18c-1.96,2.42-3.13,5.52-3.13,8.91C11.18,33.71,17.37,40,25,40c7.63,0,13.82-6.29,13.82-14.04C38.82,22.58,37.65,19.47,35.69,17.05z"/></svg>`
  },
  {
    id: 'tires',
    title: 'Neumáticos',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Sustitución de neumáticos, control de desgaste, grietas, golpes, control de la presión de inflado, de envejecimiento, equilibrado, reparación de pinchazos, etc. Diagnóstico y reparación de los sistemas de control de presión automático.',
    icon: `<svg viewBox="0 0 50 50"><path d="M25,10c-8.28,0-15,6.72-15,15c0,8.29,6.72,15,15,15c8.28,0,15-6.71,15-15C40,16.72,33.28,10,25,10z M25,35.2c-5.63,0-10.2-4.57-10.2-10.2c0-5.63,4.57-10.2,10.2-10.2c5.63,0,10.2,4.57,10.2,10.2C35.2,30.63,30.63,35.2,25,35.2z"/></svg>`
  },
  {
    id: 'air-conditioning',
    title: 'Climatización',
    category: 'electronica',
    categoryLabel: 'Electrónica y Diagnosis',
    description: 'Realizamos las operaciones de diagnosis, mantenimiento y reparación del circuito frigorífico, del circuito eléctrico y del equipo de control electrónico en sistemas de climatización automática.',
    icon: `<svg viewBox="0 0 50 50"><path d="M25,27.31c4.78,0,8.66-3.87,8.66-8.65c0-4.78-3.87-8.65-8.66-8.65c-4.78,0-8.65,3.87-8.65,8.65C16.35,23.43,20.22,27.31,25,27.31z M25,11.15c4.14,0,7.5,3.36,7.5,7.5s-3.36,7.5-7.5,7.5c-4.14,0-7.5-3.36-7.5-7.5S20.86,11.15,25,11.15z"/></svg>`
  },
  {
    id: 'pre-mot',
    title: 'Pre-ITV',
    category: 'itv',
    categoryLabel: 'ITV y Mantenimiento',
    description: 'Sometemos su vehículo a una revisión previa completa que le garantizará superar con éxito la revisión ITV. Realizamos una revisión exhaustiva de aquellos puntos que van a ser examinados en la Inspección Técnica de Vehículos.',
    icon: `<svg viewBox="0 0 50 50"><path d="M20.01,25.65l1.97-1.91c1.04,0.63,2.26,1,3.57,1c3.81,0,6.89-3.07,6.89-6.87c0-3.8-3.08-6.87-6.89-6.87c-3.8,0-6.89,3.07-6.89,6.87c0,1.69,0.61,3.24,1.63,4.43l-1.82,1.76L20.01,25.65z"/><path d="M11.01,30.08c-0.78,0.75-0.79,1.99-0.03,2.77c0.75,0.78,2,0.8,2.77,0.05l6.11-5.91l-2.74-2.82L11.01,30.08z"/></svg>`
  },
  {
    id: 'we-organize-the-mot-test-for-you',
    title: 'Pasamos la ITV por usted',
    category: 'itv',
    categoryLabel: 'ITV y Mantenimiento',
    description: 'Si lo deseas, pasamos la ITV por ti. Recogemos su vehículo y se lo retornamos con la inspección realizada, sin esperas, sin preocupaciones.',
    icon: `<svg viewBox="0 0 50 50"><path d="M38.42,31.2l-1-0.33c-0.47-0.15-1.1-0.59-1.4-0.98l-2.44-3.06c-0.31-0.38-0.96-0.7-1.45-0.7h-8.92c-0.49,0-1.17,0.28-1.52,0.63l-3.2,3.2c-0.35,0.35-1.03,0.68-1.52,0.74l-5.36,0.67c-0.49,0.06-0.89,0.51-0.89,1v3.57c0,0.49,0.4,0.89,0.89,0.89h0.84c0-2,1.62-3.62,3.62-3.62c2,0,3.62,1.62,3.62,3.62H30.3c0-2,1.62-3.62,3.62-3.62c1.99,0,3.62,1.62,3.62,3.62h0.84c0.49,0,0.89-0.4,0.89-0.89v-3.57C39.26,31.88,38.88,31.35,38.42,31.2z"/></svg>`
  },
  {
    id: 'exhaust-pipe',
    title: 'Tubo de escape',
    category: 'mecanica',
    categoryLabel: 'Mecánica y Motor',
    description: 'Mantenimiento, reparación, diagnosis y sustitución de cualquiera de los componentes del sistema de escape, conductos, silenciosos, catalizadores, filtros de partículas (FAP), etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M35.28,22.89L23.86,11.46c-0.24-0.24-0.64-0.24-0.88,0l-7.82,7.82c-0.24,0.24-0.24,0.64,0,0.88l11.42,11.42c0.24,0.24,0.64,0.24,0.88,0l7.82-7.82C35.52,23.53,35.52,23.13,35.28,22.89z"/></svg>`
  },
  {
    id: 'car-body',
    title: 'Carrocería',
    category: 'carroceria',
    categoryLabel: 'Carrocería y Estética',
    description: 'Realizamos todos los servicios de carrocería para dejar su vehículo en perfecto estado, reparación y sustitución de componentes, protectores, selladores, etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M34.23,10h-1.15c-0.32,0-0.58,0.26-0.58,0.58v1.73c0,0.32-0.26,0.58-0.58,0.58h-1.16c-0.32,0-0.66-0.25-0.76-0.55L29.8,11.7c-0.1-0.3-0.44-0.55-0.76-0.55h-8.08c-0.32,0-0.66,0.25-0.76,0.55l-0.21,0.64c-0.1,0.3-0.44,0.55-0.76,0.55h-1.16c-0.32,0-0.58-0.26-0.58-0.58v-1.73c0-0.32-0.26-0.58-0.58-0.58h-1.15c-0.32,0-0.58,0.26-0.58,0.58v8.08c0,0.32,0.26,0.58,0.58,0.58h1.15c0.32,0,0.58-0.26,0.58-0.58v-1.73c0-0.32,0.26-0.58,0.58-0.58h1.16c0.32,0,0.66,0.25,0.76,0.55l0.21,0.64c0.1,0.3,0.44,0.55,0.76,0.55h8.08c0.32,0,0.66-0.25,0.76-0.55l0.21-0.64c0.1-0.3,0.44-0.55,0.76-0.55h1.16c0.32,0,0.58,0.26,0.58,0.58v1.73c0,0.32,0.26,0.58,0.58,0.58h1.15c0.32,0,0.58-0.26,0.58-0.58v-8.08C34.81,10.26,34.55,10,34.23,10z"/><path d="M26.73,20.39h-3.46c-0.32,0-0.58,0.26-0.58,0.58v18.46c0,0.32,0.26,0.58,0.58,0.58h3.46c0.32,0,0.58-0.26,0.58-0.58V20.96C27.31,20.64,27.05,20.39,26.73,20.39z"/></svg>`
  },
  {
    id: 'rapid-car-body',
    title: 'Carrocería rápida',
    category: 'carroceria',
    categoryLabel: 'Carrocería y Estética',
    description: 'Sin necesidad de cita previa. Nuestro servicio de carrocería rápida te garantiza un tiempo mínimo de inmovilización de tu vehículo en la reparación de pequeños arañazos, golpes, y desperfectos.',
    icon: `<svg viewBox="0 0 50 50"><path d="M39.11,34.08l-1.05-0.35c-0.49-0.16-1.15-0.62-1.47-1.03l-2.57-3.22c-0.32-0.4-1.01-0.73-1.52-0.73h-9.38c-0.51,0-1.23,0.3-1.6,0.66l-3.36,3.36c-0.36,0.36-1.08,0.71-1.59,0.78l-5.64,0.71C10.42,34.32,10,34.8,10,35.31v3.75c0,0.52,0.42,0.94,0.94,0.94h0.88c0-2.1,1.71-3.8,3.81-3.8c2.1,0,3.8,1.71,3.8,3.8h11.14c0-2.1,1.71-3.8,3.8-3.8c2.1,0,3.81,1.71,3.81,3.8h0.88c0.52,0,0.94-0.42,0.94-0.94v-3.75C40,34.8,39.6,34.24,39.11,34.08z"/></svg>`
  },
  {
    id: 'painting',
    title: 'Pintura',
    category: 'carroceria',
    categoryLabel: 'Carrocería y Estética',
    description: 'El pintado es un paso importante en el proceso de reparación de cada vehículo. Todos los paneles se preparan adecuadamente para pintarse siguiendo paso a paso las especificaciones del fabricante.',
    icon: `<svg viewBox="0 0 50 50"><path d="M39.36,39.42L34.84,26.5c-0.11-0.32,0.08-0.58,0.41-0.58h1.08c0.34,0,0.52-0.26,0.4-0.57l-1.41-3.75c-0.12-0.32-0.49-0.57-0.83-0.57H24.08c-0.34,0-0.61,0.28-0.61,0.61v3.68c0,0.34,0.28,0.61,0.61,0.61h2.59c0.34,0,0.69,0.26,0.79,0.59l3.95,12.9c0.1,0.32,0.46,0.59,0.79,0.59h6.74C39.28,40,39.47,39.74,39.36,39.42z"/></svg>`
  },
  {
    id: 'windows-and-windshield',
    title: 'Cristales y lunas',
    category: 'carroceria',
    categoryLabel: 'Carrocería y Estética',
    description: 'Somos especialistas en la sustitución de cristales y lunas para su coche y le ofrecemos un servicio con las máximas garantías de calidad.',
    icon: `<svg viewBox="0 0 50 50"><path d="M11.54,11c-0.3,0-0.54,0.24-0.54,0.54v26.92c0,0.3,0.24,0.54,0.54,0.54h26.92c0.3,0,0.54-0.24,0.54-0.54V11.54c0-0.3-0.24-0.54-0.54-0.54H11.54z M12.08,17.46l5-5c0.21-0.21,0.62-0.38,0.92-0.38h2.69c0.3,0,0.37,0.17,0.16,0.38l-8.39,8.39c-0.21,0.21-0.38,0.14-0.38-0.16V17.46z M37.92,30.39c0,0.3-0.17,0.71-0.38,0.92l-3.01,3c-0.21,0.21-0.38,0.14-0.38-0.16l0-1.61c0-0.3-0.17-0.37-0.38-0.16l-5.17,5.17c-0.21,0.21-0.62,0.38-0.92,0.38l-9.16-0.01c-0.3,0-0.37-0.17-0.16-0.38l7.31-7.32c0.21-0.21,0.38-0.14,0.38,0.16L26.08,32c0,0.3,0.17,0.37,0.38,0.16l11.08-11.09c0.21-0.21,0.38-0.14,0.38,0.16V30.39z"/></svg>`
  },
  {
    id: 'integral-cleaning',
    title: 'Limpieza integral',
    category: 'carroceria',
    categoryLabel: 'Carrocería y Estética',
    description: 'Limpieza de tapicerías, alfombrillas, restauración de puertas y salpicaderos, maleteros, pulido y encerado de pintura, tratamiento de arañazos, etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M35.96,28.42H14.03c-0.32,0-0.58,0.26-0.58,0.58v5.81c0,0.32,0.26,0.58,0.58,0.58h21.93c0.32,0,0.58-0.26,0.58-0.58V29C36.54,28.68,36.28,28.42,35.96,28.42z M16.92,33.04c-0.96,0-1.73-0.78-1.73-1.73c0-0.96,0.78-1.73,1.73-1.73c0.96,0,1.73,0.78,1.73,1.73C18.65,32.26,17.87,33.04,16.92,33.04z M33.07,33.04c-0.96,0-1.73-0.78-1.73-1.73c0-0.96,0.78-1.73,1.73-1.73c0.96,0,1.73,0.78,1.73,1.73C34.81,32.26,34.03,33.04,33.07,33.04z"/></svg>`
  },
  {
    id: 'vehicle-pickup-and-delivery',
    title: 'Servicio de entrega y recogida',
    category: 'asistencia',
    categoryLabel: 'Comodidad y Asistencia',
    description: '¿No tienes tiempo para traernos el coche al taller? Recogemos tu coche, le realizamos las operaciones de reparación o mantenimiento y te lo retornamos en perfecto estado.',
    icon: `<svg viewBox="0 0 50 50"><path d="M19.89,17.61H9.03c-0.35,0-0.64,0.29-0.64,0.64v11.53c0,0.35,0.29,0.64,0.64,0.64h1.27c-0.03-0.2-0.05-0.4-0.05-0.6c0-2.13,1.73-3.86,3.86-3.86c2.13,0,3.86,1.73,3.86,3.86c0,0.2-0.02,0.41-0.05,0.6h1.96c0.35,0,0.64-0.29,0.64-0.64V18.25C20.53,17.89,20.24,17.61,19.89,17.61z"/></svg>`
  },
  {
    id: 'replacement-vehicle',
    title: 'Vehículo de sustitución',
    category: 'asistencia',
    categoryLabel: 'Comodidad y Asistencia',
    description: 'Te ofrecemos la posibilidad de disponer de coche de sustitución mientras tu vehículo está reparándose. Consulta nuestros precios y disponibilidad.',
    icon: `<svg viewBox="0 0 50 50"><path d="M39,27.51c-0.72-0.67-1.85-0.62-2.52,0.1l-3.14,3.13c-0.08,1.41-1.1,3.02-3.15,2.87l-9.99-0.83c0,0-0.97,0.01-0.95-0.63c0.02-0.5,0.34-0.73,0.88-0.7c0.68,0.04,9.86,0.8,9.86,0.8c0.07,0,1.82,0.15,1.99-1.57c0.09-0.93-0.86-1.61-1.65-1.66l-6.87-0.8c-0.88-1.13-3.75-2.51-5.98-1.9l-5.68,1.52c-0.63,0.2-1.44,0.96-1.38,1.56l0.3,4.11c0.11,0.72,0.53,1.45,1.15,1.71l11.71,2.76c1.58,0.38,10.01-2.42,10.01-2.42c0.35-0.08,0.67-0.26,0.91-0.53l4.59-4.99C39.77,29.31,39.72,28.18,39,27.51z"/></svg>`
  },
  {
    id: 'towing-service',
    title: 'Servicio de grúa',
    category: 'asistencia',
    categoryLabel: 'Comodidad y Asistencia',
    description: 'Con nuestro servicio de grúa recogemos su vehículo y lo trasladamos hasta nuestras instalaciones para su reparación. Precios muy económicos en función del kilometraje.',
    icon: `<svg viewBox="0 0 50 50"><polygon points="35.96,18.03 35.96,15.79 22.12,25.56 22.12,29.6 25,29.6"/><path d="M20.96,21.5H10.58c-0.32,0-0.58,0.26-0.58,0.58v10.41c0,0.32,0.26,0.58,0.58,0.58h1.15c-0.03-0.18-0.04-0.36-0.04-0.54c0-1.92,1.56-3.49,3.49-3.49c1.92,0,3.49,1.56,3.49,3.49c0,0.19-0.01,0.37-0.04,0.54h2.35c0.32,0,0.58-0.26,0.58-0.58V22.07C21.54,21.76,21.28,21.5,20.96,21.5z"/></svg>`
  },
  {
    id: 'car-audio',
    title: 'Car audio',
    category: 'electronica',
    categoryLabel: 'Electrónica y Diagnosis',
    description: 'Realizamos la instalación y montaje de cualquiera de los componentes que requiera el equipo de audio de tu vehículo, autoradios, altavoces, dvd\'s, etapas de potencia, tapizado de bandejas traseras, etc.',
    icon: `<svg viewBox="0 0 50 50"><path d="M39.4,30.4H10.6c-0.33,0-0.6,0.27-0.6,0.6v8.4c0,0.33,0.27,0.6,0.6,0.6h28.8c0.33,0,0.6-0.27,0.6-0.6V31C40,30.67,39.73,30.4,39.4,30.4z"/><path d="M18.1,29.2c2.15,0,3.9-1.21,3.9-2.7c0-0.07,0-10.11,0-10.11l11.4-1.98v7.74c-0.7-0.47-1.65-0.75-2.7-0.75c-2.15,0-3.9,1.21-3.9,2.7c0,1.49,1.75,2.7,3.9,2.7c2.15,0,3.9-1.21,3.9-2.7c0-0.06,0-14.1,0-14.1l-13.8,2.4v12.15c-0.7-0.47-1.65-0.75-2.7-0.75c-2.15,0-3.9,1.21-3.9,2.7C14.2,27.99,15.94,29.2,18.1,29.2z"/></svg>`
  },
  {
    id: 'tuning',
    title: 'Tuning y Personalización',
    category: 'carroceria',
    categoryLabel: 'Carrocería y Estética',
    description: 'Carrocería, ruedas y llantas, imagen y sonido, iluminación, electricidad, escape, filtros, productos y servicios para el tuneado y personalización de tu coche.',
    icon: `<svg viewBox="0 0 50 50"><path d="M30.23,17.04H19.27c-0.32,0-0.71,0.22-0.89,0.49l-2.52,4c-0.13,0.2-0.12,0.46,0,0.66c0.11,0.18,0.31,0.28,0.51,0.28c2.22-0.31,5.1-0.49,8.33-0.49c3.18,0.01,5.91,0.17,8.14,0.47c0.24,0.03,0.48-0.08,0.61-0.29c0.13-0.21,0.11-0.47-0.03-0.67l-2.85-3.96C30.96,17.25,30.55,17.04,30.23,17.04z"/></svg>`
  }
];

// Asistente rápido de síntomas en pestaña Inicio
const SYMPTOMS_DATA = {
  testigo: {
    title: 'Diagnosis Electrónica Multimarca + Control de Inyección',
    desc: 'Conectamos nuestro terminal de diagnosis a la unidad de mando (ECU) para localizar el código de avería exacto (inyección, emisiones, sensores o red multiplexada).',
    service: 'Diagnosis'
  },
  itv: {
    title: 'Revisión Línea Pre-ITV + "Pasamos la ITV por Usted"',
    desc: 'Verificamos gases, frenada, luces, neumáticos y suspensión en nuestra línea Pre-ITV. Si no tienes tiempo, recogemos tu coche y pasamos la ITV por ti.',
    service: 'Pre-ITV'
  },
  inyeccion: {
    title: 'Especialistas en Inyección Diésel y Gasolina',
    desc: 'Comprobamos y reparamos desde bombas rotativas tradicionales hasta sistemas Common Rail e inyectores de última generación, además de catalizador y FAP.',
    service: 'Inyección diésel'
  },
  frenos: {
    title: 'Servicio de Frenos, Neumáticos y Amortiguación',
    desc: 'Sustitución de pastillas, discos y líquido de frenos, corrección de desequilibrios de frenada y equilibrado de neumáticos con control de presión.',
    service: 'Frenos'
  },
  clima: {
    title: 'Diagnosis y Recarga de Climatización',
    desc: 'Intervención completa sobre el circuito frigorífico, detección de fugas, compresor y equipo de control electrónico de climatización automática.',
    service: 'Climatización'
  },
  golpe: {
    title: 'Carrocería Rápida, Pintura y Lunas (Sin Cita Previa)',
    desc: 'Mínimo tiempo de inmovilización para pequeños arañazos, golpes, pulido de pintura o sustitución de cristales y lunas con garantía total.',
    service: 'Carrocería rápida'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initWorkshopStatus();
  initPaletteSwitcher();
  initMainTabs();
  initHeroSymptomFinder();
  initEquipmentShowcase();
  initServicesCatalog();
  initKmAdvisor();
  initBookingForm();
  initModals();
});

// 1. Estado del taller según hora local en Castellón
function initWorkshopStatus() {
  const pill = document.getElementById('workshopStatusPill');
  const text = document.getElementById('workshopStatusText');
  if (!pill || !text) return;

  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();

  const isWeekday = day >= 1 && day <= 5;
  const isMorningOpen = minutes >= 510 && minutes <= 810;
  const isAfternoonOpen = minutes >= 930 && minutes <= 1170;

  if (isWeekday && (isMorningOpen || isAfternoonOpen)) {
    pill.classList.remove('closed');
    text.textContent = 'TALLER ABIERTO AHORA · CASTELLÓN';
  } else {
    pill.classList.add('closed');
    text.textContent = 'HORARIO L-V 08:30-13:30 / 15:30-19:30 · CITA ONLINE 24H';
  }
}

// 2. Selector de Paleta de Colores en vivo
function initPaletteSwitcher() {
  const dots = document.querySelectorAll('[data-set-palette]');
  const saved = localStorage.getItem('nebot_palette');
  if (saved) {
    document.documentElement.setAttribute('data-palette', saved);
    dots.forEach(d => d.classList.toggle('active', d.dataset.setPalette === saved));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const palette = dot.dataset.setPalette;
      document.documentElement.setAttribute('data-palette', palette);
      localStorage.setItem('nebot_palette', palette);
      dots.forEach(d => d.classList.toggle('active', d === dot));
    });
  });
}

// 3. Sistema de Navegación por Pestañas (7 Vistas Independientes)
function initMainTabs() {
  const tabBtns = document.querySelectorAll('.app-tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchMainTab(btn.dataset.tabTarget);
    });
  });

  // Soporte para hash en URL (#equipamiento, #servicios, etc.)
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(`tab-${initialHash}`)) {
    switchMainTab(initialHash, false);
  }
}

window.switchMainTab = function(tabId, scrollToTop = true) {
  const tabBtns = document.querySelectorAll('.app-tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const targetPanel = document.getElementById(`tab-${tabId}`);
  if (!targetPanel) return;

  tabBtns.forEach(btn => {
    const isActive = btn.dataset.tabTarget === tabId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  panels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });

  history.replaceState(null, '', `#${tabId}`);

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// Función global para preseleccionar un servicio y abrir directamente la pestaña de Cita Previa
window.selectServiceAndOpenBooking = function(serviceName) {
  const select = document.getElementById('bookingServiceSelect');
  if (select) {
    const exists = Array.from(select.options).some(o => o.value === serviceName);
    if (exists) {
      select.value = serviceName;
    }
  }
  switchMainTab('contacto');
};

// 4. Buscador interactivo de síntomas en pestaña Inicio
function initHeroSymptomFinder() {
  const buttons = document.querySelectorAll('.symptom-btn');
  const resultBox = document.getElementById('symptomResult');
  if (!buttons.length || !resultBox) return;

  function renderSymptom(key) {
    const item = SYMPTOMS_DATA[key];
    if (!item) return;
    resultBox.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.desc}</p>
      <button type="button" class="service-action-btn" style="color:#38bdf8;" onclick="selectServiceAndOpenBooking('${item.service}')">
        Abrir pestaña de Cita para ${item.service} →
      </button>
    `;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSymptom(btn.dataset.symptom);
    });
  });

  renderSymptom('testigo');
}

// 5. Showcase interactivo dentro de la Pestaña de Equipamiento (/page/equipment)
function initEquipmentShowcase() {
  const tabsContainer = document.getElementById('equipmentTabs');
  const displayContainer = document.getElementById('equipmentDisplay');
  if (!tabsContainer || !displayContainer) return;

  function renderDisplay(eq) {
    displayContainer.innerHTML = `
      <div class="eq-display-media">
        <img src="${eq.image}" alt="${eq.title}">
        <span class="eq-media-badge">${eq.badge}</span>
      </div>
      <div class="eq-display-body">
        <div>
          <h3>${eq.title}</h3>
          <p>${eq.fullDesc}</p>
          <div class="eq-specs-grid">
            ${eq.specs.map(s => `
              <div class="eq-spec-item">
                <span class="eq-spec-label">${s.label}</span>
                <span class="eq-spec-val">${s.val}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; justify-content:space-between; padding-top:14px; border-top:1px solid var(--border);">
          <span style="font-size:0.84rem; color:var(--text-secondary);">Avda. Almazora, 96 · Castelló de la Plana</span>
          <button type="button" class="btn btn-primary btn-sm" onclick="selectServiceAndOpenBooking('${eq.serviceTarget}')">
            Pedir cita con este equipamiento
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  tabsContainer.innerHTML = EQUIPMENT_DATA.map((eq, idx) => `
    <button type="button" class="eq-tab ${idx === 0 ? 'active' : ''}" data-eq-id="${eq.id}">
      <span class="eq-tab-num">${eq.num}</span>
      <div class="eq-tab-content">
        <h3>${eq.title}</h3>
        <p>${eq.shortDesc}</p>
      </div>
    </button>
  `).join('');

  tabsContainer.querySelectorAll('.eq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.eq-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const found = EQUIPMENT_DATA.find(item => item.id === tab.dataset.eqId);
      if (found) renderDisplay(found);
    });
  });

  renderDisplay(EQUIPMENT_DATA[0]);
}

// 6. Catálogo interactivo dentro de la Pestaña de Servicios
function initServicesCatalog() {
  const grid = document.getElementById('servicesGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('serviceSearchInput');
  const serviceSelect = document.getElementById('bookingServiceSelect');

  if (serviceSelect) {
    SERVICES_DATA.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.title;
      opt.textContent = s.title;
      serviceSelect.appendChild(opt);
    });
  }

  if (!grid) return;

  let currentCategory = 'all';
  let currentSearch = '';

  function renderServices() {
    const filtered = SERVICES_DATA.filter(item => {
      const matchesCat = currentCategory === 'all' || item.category === currentCategory;
      const q = currentSearch.trim().toLowerCase();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:48px 24px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--border);">
          <h3 style="margin-bottom:8px;">No hemos encontrado ese servicio exacto</h3>
          <p style="color:var(--text-secondary); margin-bottom:16px;">Realizamos cualquier reparación mecánica, eléctrica, electrónica o de carrocería multimarca.</p>
          <button type="button" class="btn btn-primary btn-sm" onclick="selectServiceAndOpenBooking('Mecánica general')">Consultar con el taller</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(s => `
      <article class="service-card">
        <div class="service-card-top">
          <div class="service-card-header">
            <div class="service-icon-box" aria-hidden="true">
              ${s.icon}
            </div>
            <span class="service-cat-tag">${s.categoryLabel}</span>
          </div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
        <div class="service-card-footer">
          <button type="button" class="service-action-btn" onclick="selectServiceAndOpenBooking('${s.title}')">
            Solicitar en Cita Previa
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--text-muted);">GARANTIZADO</span>
        </div>
      </article>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      renderServices();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      renderServices();
    });
  }

  renderServices();
}

// 7. Calculadora interactiva de mantenimiento según kilometraje
function initKmAdvisor() {
  const slider = document.getElementById('kmRangeInput');
  const badge = document.getElementById('kmValueDisplay');
  const list = document.getElementById('kmRecommendationsList');
  if (!slider || !badge || !list) return;

  function updateAdvisor(km) {
    badge.textContent = `${Number(km).toLocaleString('es-ES')} km`;
    const recs = [];

    recs.push({
      title: 'Sustitución de aceite motor, filtro de aire, antipolen y revisión de niveles',
      tag: 'Mantenimiento Programado'
    });

    if (km >= 30000 && km < 80000) {
      recs.push({
        title: 'Inspección preventiva de catalizador, sistema de escape y análisis de gases (Consejo Nebot cada 30.000 km)',
        tag: 'Consejo Experto'
      });
    } else if (km >= 80000) {
      recs.push({
        title: 'Comprobación exhaustiva / sustitución de catalizador y filtro de partículas FAP (Vida útil habitual 80.000 - 100.000 km)',
        tag: 'Crítico 80k-100k km'
      });
    }

    if (km >= 45000) {
      recs.push({
        title: 'Control de desgaste de pastillas/líquido de frenos, neumáticos y equilibrado',
        tag: 'Seguridad Activa'
      });
    }

    if (km >= 90000) {
      recs.push({
        title: 'Revisión de kit de correa de distribución, amortiguadores, inyección diésel/gasolina y línea Pre-ITV',
        tag: 'Gran Revisión'
      });
    } else {
      recs.push({
        title: 'Diagnosis electrónica preventiva de unidades de mando y estado de batería',
        tag: 'Diagnosis'
      });
    }

    list.innerHTML = recs.map(r => `
      <div class="km-rec-item">
        <span style="font-size:0.88rem; color:var(--text-primary);">${r.title}</span>
        <span class="priority">${r.tag}</span>
      </div>
    `).join('');
  }

  slider.addEventListener('input', e => updateAdvisor(Number(e.target.value)));
  updateAdvisor(Number(slider.value));
}

// 8. Formulario de cita previa / presupuesto
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const feedback = document.getElementById('bookingFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const vehicle = document.getElementById('clientVehicle').value.trim();
    const service = document.getElementById('bookingServiceSelect').value;
    const extras = document.getElementById('clientExtras').value;

    feedback.style.display = 'block';
    feedback.innerHTML = `
      <strong>¡Solicitud registrada para ${name}!</strong><br>
      Hemos preparado tu solicitud de <b>${service}</b> ${vehicle ? `para tu <b>${vehicle}</b>` : ''} ${extras !== 'ninguno' ? `(${extras})` : ''}.
      Nuestro equipo en <b>Avda. Almazora, 96 (Castellón)</b> te confirmará en el <b>${phone}</b> o, si prefieres atención inmediata, llámanos directamente al <a href="tel:+34964218668" style="color:inherit; font-weight:800; text-decoration:underline;">964 21 86 68</a>.
    `;
    form.reset();
  });
}

// 9. Lightbox de Galería y Modal de Aviso Legal
function initModals() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const legalModal = document.getElementById('legalModal');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.dataset.img;
      const title = item.dataset.title;
      if (lightbox && lightboxImg && lightboxTitle) {
        lightboxImg.src = imgSrc;
        lightboxTitle.textContent = title;
        lightbox.classList.add('open');
      }
    });
  });

  document.querySelectorAll('[data-open-legal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (legalModal) legalModal.classList.add('open');
    });
  });

  document.querySelectorAll('.modal-close, .modal-backdrop').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target === el || el.classList.contains('modal-close')) {
        if (lightbox) lightbox.classList.remove('open');
        if (legalModal) legalModal.classList.remove('open');
      }
    });
  });
}
