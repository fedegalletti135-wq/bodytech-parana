/**
 * ============================================================
 *  CONFIGURACIÓN CENTRAL DEL SITIO - BODYTECH PARANÁ
 *  Todos los componentes, Schema SEO y la configuración leen de acá.
 * ============================================================
 */

export const siteConfig = {
  // ─── IDENTIDAD DEL NEGOCIO ────────────────────────────
  businessName: "Bodytech Paraná",
  tagline: "Depilación Láser Definitiva & Estética Integral",
  description: "Brindamos un servicio de excelencia, con operadoras certificadas y con amplia experiencia. Utilizamos tecnología de triple longitud de onda, con equipamiento original Crystal 3D de Body Health y de lo más avanzado en el mercado láser.",
  seoDescription: "Centro de depilación láser definitiva Crystal 3D, rejuvenecimiento cutáneo y alquiler de equipos en Paraná, Entre Ríos. Operadoras certificadas y tecnología indolora.",
  keywords: "depilacion definitiva parana, depilacion laser parana, crystal 3d parana, bodytech parana, rejuvenecimiento facial parana, estetica parana, alquiler laser crystal 3d",

  // ─── CONFIGURACIÓN DE URL Y HOSTING ────────────────────
  siteUrl: "https://bodytechparana.pages.dev",
  cloudflareProjectName: "bodytech-parana",

  // ─── CONTACTO & WHATSAPP ──────────────────────────────
  phone: "+54 9 343 404-3513",
  whatsappNumber: "5493434043513",
  whatsappMessage: "Hola Bodytech! Quisiera consultar y reservar un turno 🌸",
  email: "contacto@bodytechparana.com",
  
  // ─── SEDES & UBICACIONES ──────────────────────────────
  sedes: [
    {
      name: "Sede Noreste",
      address: "Soler 3026, Paraná, Entre Ríos",
      note: "Atención con turno previo",
      mapsQuery: "Soler+3026+Parana+Entre+Rios",
    },
    {
      name: "Sede Centro (Pránika)",
      address: "España 257, Paraná, Entre Ríos",
      note: "Atención en @pranika_saludintegral",
      instagram: "https://instagram.com/pranika_saludintegral",
      mapsQuery: "España+257+Parana+Entre+Rios",
    },
  ],

  // ─── COORDENADAS PARA SCHEMA & MAPA ───────────────────
  address: {
    street: "España 257 / Soler 3026",
    city: "Paraná",
    province: "Entre Ríos",
    postalCode: "E3100",
    country: "AR",
    googleMapsUrl: "https://maps.google.com/?q=España+257+Parana+Entre+Rios",
    latitude: -31.733182,
    longitude: -60.529815,
  },

  // ─── HORARIOS ─────────────────────────────────────────
  schedule: [
    { days: "Lunes a Sábado", hours: "09:00 a 20:00 hs." },
    { days: "Domingos", hours: "Cerrado" },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],

  // ─── TECNOLOGÍA & EQUIPO (BODY HEALTH) ────────────────
  technology: [
    {
      title: "Mayor Potencia",
      description: "Un equipo con mayor potencia trabaja de forma más eficaz, permitiendo resultados notorios en menos sesiones y regulando la intensidad según cada persona.",
      icon: "award",
    },
    {
      title: "Triple Longitud de Onda",
      description: "Combina tres longitudes de onda en simultáneo para tratar una gran variedad de fototipos y características del vello en un solo tratamiento seguro.",
      icon: "shield",
    },
    {
      title: "Enfriamiento Continuo",
      description: "Cabezal con refrigeración continua que reduce la sensación de dolor, disminuye el riesgo de sobrecalentamiento y garantiza una experiencia placentera.",
      icon: "sparkles",
    },
  ],

  // ─── SERVICIOS PRINCIPALES ────────────────────────────
  services: [
    {
      name: "Depilación Láser Definitiva Crystal 3D",
      tag: "Tratamiento Estrella",
      description: "Tecnología original de Body Health de triple longitud de onda y cabezal frío. Tratamiento personalizado, seguro e indoloro para todo tipo de piel.",
      details: ["Operadoras certificadas", "Sesiones rápidas", "Resultados desde la 1ª sesión"],
      badge: "Indoloro",
    },
    {
      name: "Rejuvenecimiento Cutáneo Facial",
      tag: "Cuidado de la Piel",
      description: "Tratamiento facial diseñado para recuperar la vitalidad de la piel de forma segura y no invasiva.",
      details: ["Atenúa manchas solares y post-parto", "Mejora la textura y uniformidad", "Combate líneas de expresión y arrugas"],
      badge: "No invasivo",
    },
    {
      name: "Alquiler de Equipos por Jornada",
      tag: "Profesionales y Centros",
      description: "Ofrecemos el equipamiento Crystal 3D original de Body Health para centros de estética o profesionales independientes con asesoramiento y soporte técnico continuo.",
      details: ["Equipos originales certificados", "Modalidad flexible por jornada", "Capacitación y soporte técnico"],
      badge: "B2B",
    },
  ],

  // ─── CONVENIOS CORPORATIVOS (BENEFICIOS EXCLUSIVOS) ────
  convenios: [
    { name: "CoPER", type: "Colegio de Psicólogos de Entre Ríos", discount: "20% OFF" },
    { name: "CISAPER", type: "Cuerpo de Integración de Salud de Entre Ríos", discount: "20% OFF" },
    { name: "Neo Club", type: "Asociado / Cliente", discount: "20% OFF" },
    { name: "La Bancaria", type: "Asociado / Afiliado", discount: "20% OFF" },
    { name: "Taian Gimnasio", type: "Asociado / Alumno", discount: "20% OFF" },
    { name: "Dubai Gym", type: "Asociado / Alumno", discount: "20% OFF" },
    { name: "California Fitness Club", type: "Asociado / Alumno", discount: "10% OFF" },
    { name: "Paraná Rowing Club", type: "Socio / Deportista", discount: "20% OFF" },
    { name: "Club Atlético Talleres", type: "Socio / Deportista", discount: "20% OFF" },
  ],

  // ─── REDES SOCIALES OFICIALES ─────────────────────────
  social: {
    instagram: "https://www.instagram.com/bodytech.parana/?hl=es-la",
    facebook: "https://www.facebook.com/profile.php?id=100076218212694&locale=es_LA#",
    instagramPranika: "https://instagram.com/pranika_saludintegral",
  },

  // ─── IMÁGENES & RECURSOS ──────────────────────────────
  images: {
    hero: "/hero_skincare.png",
    rejuvenecimiento: "/rejuve_skincare.png",
    ogImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&h=630&q=80",
  },

  // ─── CONFIGURACIÓN DE ESTILO ──────────────────────────
  googleAnalyticsId: "",
  accentColor: "#B77D7D",      // Rosa viejo suave Bodytech
  accentColorHover: "#a36969", // Hover 10% más oscuro
} as const;

export type Service = (typeof siteConfig.services)[number];
export type Convenio = (typeof siteConfig.convenios)[number];
