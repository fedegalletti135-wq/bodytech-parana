import { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Check, 
  Zap, 
  Heart, 
  User, 
  Building,
  MessageSquare,
  Award,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    servicio: 'laser',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Benefits list from the Instagram post (convenios)
  const convenios = [
    { name: 'CoPER', type: 'Colegio de Psicólogos de Entre Ríos', discount: '20% OFF' },
    { name: 'CISAPER', type: 'Cuerpo de Integración de Salud de Entre Ríos', discount: '20% OFF' },
    { name: 'Neo Club', type: 'Asociado / Cliente', discount: '20% OFF' },
    { name: 'La Bancaria', type: 'Asociado / Cliente', discount: '20% OFF' },
    { name: 'Taian Gimnasio', type: 'Asociado / Cliente', discount: '20% OFF' },
    { name: 'Dubai Gym', type: 'Asociado / Cliente', discount: '20% OFF' },
    { name: 'California Fitness Club', type: 'Asociado / Cliente', discount: '10% OFF' },
    { name: 'Paraná Rowing Club', type: 'Asociado / Cliente', discount: '20% OFF' },
    { name: 'Club Atlético Talleres', type: 'Asociado / Cliente', discount: '20% OFF' }
  ];

  // Double the list for infinite scrolling carousel (9 items * 2 = 18 items)
  const doubledConvenios = [...convenios, ...convenios];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Hola Bodytech! Mi nombre es ${formData.nombre}. Estoy interesada/o en el servicio de: ${
      formData.servicio === 'laser' ? 'Depilación Láser' : formData.servicio === 'rejuvenecimiento' ? 'Rejuvenecimiento Cutáneo' : 'Alquiler de Equipos'
    }. Mi WhatsApp: ${formData.whatsapp}. Consulta: ${formData.mensaje}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5493434043513?text=${encodedText}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <>
      {/* Decorative brand butterflies */}
      <svg className="decor-bg decor-right" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 40 C60 20, 90 20, 85 50 C80 70, 60 75, 50 90 C40 75, 20 70, 15 50 C10 20, 40 20, 50 40 Z" />
      </svg>
      <svg className="decor-bg decor-left" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 40 C60 20, 90 20, 85 50 C80 70, 60 75, 50 90 C40 75, 20 70, 15 50 C10 20, 40 20, 50 40 Z" />
      </svg>

      {/* Header */}
      <header className="glass-header">
        <div className="nav-container">
          <a href="#inicio" className="logo">
            <svg className="logo-butterfly" viewBox="2 2 14 14" fill="currentColor" style={{ width: '26px', height: '26px', color: 'var(--color-primary)' }}>
              {/* Antennae */}
              <path d="M6,6.2 C5,5.1 4,4.2 3.5,4 C3.8,4.5 4.5,5.5 5,6 Z" opacity="0.8" />
              <path d="M6.5,6 C5.5,4.8 4.6,3.8 4.2,3.5 C4.5,4 5.2,5 5.6,5.8 Z" opacity="0.8" />
              {/* Body */}
              <path d="M6.8,6.5 C6.6,7.5 5.8,11.5 6.2,12.5 C6.6,13.2 7,13.5 7.2,12.8 C7.4,12.1 7.2,7.5 7,6.5 Z" />
              {/* Big upper wing */}
              <path d="M7.1,7.2 C8.5,5.8 12.5,4.2 14,6.2 C15.5,8.2 13.5,10.2 7.4,9.5 Z" />
              {/* Small lower wing */}
              <path d="M7.2,9.8 C8.8,9.5 12.8,9.8 13.2,11.2 C13.6,12.6 11,13.2 7.3,11.8 Z" />
            </svg>
            <span>Bodytech<span style={{ fontWeight: 300, fontSize: '0.9rem', marginLeft: '5px', color: 'var(--color-primary)' }}>Paraná</span></span>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li><a href="#inicio" className="nav-link">Inicio</a></li>
            <li><a href="#laser" className="nav-link">Depilación Láser</a></li>
            <li><a href="#rejuvenecimiento" className="nav-link">Rejuvenecimiento</a></li>
            <li><a href="#alquiler" className="nav-link">Alquiler de Equipos</a></li>
            <li><a href="#convenios" className="nav-link">Convenios</a></li>
            <li><a href="#contacto" className="nav-link">Contacto</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a 
              href="https://wa.me/5493434043513" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary header-cta-btn"
            >
              Agendar Turno
            </a>
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <ul className="nav-links-mobile">
            <li><a href="#inicio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#laser" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Depilación Láser</a></li>
            <li><a href="#rejuvenecimiento" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Rejuvenecimiento</a></li>
            <li><a href="#alquiler" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Alquiler de Equipos</a></li>
            <li><a href="#convenios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Convenios</a></li>
            <li><a href="#contacto" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
            <li>
              <a 
                href="https://wa.me/5493434043513" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '10px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar Turno
              </a>
            </li>
          </ul>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Tu piel suave <br />
                y luminosa <span className="section-accent-font" style={{ display: 'inline', marginLeft: '10px' }}>Bodytech</span>
              </h1>
              <p className="hero-subtitle">
                Brindamos un servicio de excelencia, con operadoras certificadas y con amplia experiencia. Utilizamos tecnología de triple longitud de onda, con equipamiento original y de lo más avanzado en el mercado de la tecnología láser.
              </p>
              
              <div className="hero-actions">
                <a href="https://wa.me/5493434043513" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Quiero reservar mi turno
                </a>
                <a href="#laser" className="btn btn-outline">
                  Ver Tecnología
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img 
                  src="/hero_skincare.png" 
                  alt="Tratamiento de piel suave y saludable en Bodytech Paraná" 
                  className="hero-image" 
                />
              </div>
              <div className="hero-badge">
                <div className="card-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}>
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="hero-badge-title">Crystal 3D</span>
                  <p style={{ fontSize: '0.75rem', margin: 0 }}>Tecnología Indolora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Technology Details Section (Enfoque en el Equipo y Operadoras - Con id="laser") */}
      <section id="laser" className="section-bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">El Equipo Más Avanzado</h2>
            <p>
              La marca de nuestro equipo es la más avanzada en tecnología estética a nivel global. Trabajamos con tecnología <strong>Body Health</strong> original, reconocida por su innovación y altos estándares de calidad.
            </p>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <Award size={28} />
              </div>
              <h3 className="card-title">Mayor Potencia</h3>
              <p className="card-text">
                Un equipo con mayor potencia puede trabajar de forma más eficaz, permitiendo resultados más notorios en menos sesiones. Permite regular la potencia según lo que necesite cada persona, logrando un tratamiento más efectivo, seguro y personalizado.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="card-title">Triple Longitud de Onda</h3>
              <p className="card-text">
                No todos los equipos ofrecen el mismo nivel de precisión y seguridad. Nuestro equipo combina triple longitud de onda, lo que significa que puede tratar una gran variedad de fototipos y características del vello en un solo tratamiento.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Sparkles size={28} />
              </div>
              <h3 className="card-title">Enfriamiento Continuo</h3>
              <p className="card-text">
                Un buen sistema de refrigeración mejora la comodidad del paciente y protege la piel. Nuestro equipo cuenta con enfriamiento continuo del cabezal que reduce la sensación de dolor, disminuye el riesgo de sobrecalentamiento y mejora la experiencia general.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rejuvenecimiento Cutáneo Section */}
      <section id="rejuvenecimiento">
        <div className="container">
          <div className="rejuve-grid">
            <div>
              <h2 className="section-title">Rejuvenecimiento Cutáneo</h2>
              <p style={{ marginBottom: '30px' }}>
                Tratamiento facial diseñado para recuperar la vitalidad de la piel de forma segura y no invasiva.
              </p>
              
              <div className="rejuve-list">
                <div className="rejuve-list-item">
                  <div className="rejuve-list-icon">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="rejuve-list-title">Atenúa manchas</h3>
                    <p style={{ fontSize: '0.95rem' }}>Eficaz para atenuar manchas producidas por sol, post-parto y marcas previas.</p>
                  </div>
                </div>

                <div className="rejuve-list-item">
                  <div className="rejuve-list-icon">
                    <Check size={24} />
                  </div>
                  <div>
                    <h3 className="rejuve-list-title">Mejora la textura</h3>
                    <p style={{ fontSize: '0.95rem' }}>Logra una mayor uniformidad y mejor visibilidad de la piel.</p>
                  </div>
                </div>

                <div className="rejuve-list-item">
                  <div className="rejuve-list-icon">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="rejuve-list-title">Combate líneas de expresión</h3>
                    <p style={{ fontSize: '0.95rem' }}>Atenúa arrugas existentes y previene la formación de nuevas arrugas.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '40px' }}>
                <a href="https://wa.me/5493434043513" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Agendar Turno de Rejuvenecimiento
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="rejuve-image-wrapper">
                <img 
                  src="/rejuve_skincare.png" 
                  alt="Tratamiento de rejuvenecimiento cutáneo facial de alta gama" 
                  className="rejuve-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alquiler de Equipos Section */}
      <section id="alquiler" className="section-bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Alquiler de Equipos por Jornada</h2>
            <p>Ofrecemos el equipamiento Crystal 3D original de Body Health para centros de estética o profesionales independientes.</p>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <Building size={28} />
              </div>
              <h3 className="card-title">Equipos de Máxima Calidad</h3>
              <p className="card-text">
                Acceso a tecnología profesional original de Body Health sin preocuparse por costos de mantenimiento o renovación.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Clock size={28} />
              </div>
              <h3 className="card-title">Flexibilidad</h3>
              <p className="card-text">
                Modalidad de alquiler adaptada a las necesidades y agendas de tu negocio.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Check size={28} />
              </div>
              <h3 className="card-title">Soporte Técnico</h3>
              <p className="card-text">
                Brindamos asesoramiento técnico y asistencia para asegurar el óptimo funcionamiento del equipo.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <a 
              href="https://wa.me/5493434043513?text=Hola%20Bodytech!%20Quiero%20recibir%20información%20sobre%20el%20Alquiler%20de%20los%20Equipos%20Crystal%203D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Consultar jornadas de alquiler
            </a>
          </div>
        </div>
      </section>

      {/* Convenios & Beneficios Section (Carrusel Infinito Constante) */}
      <section id="convenios">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '20px' }}>
            <h2 className="section-title">Beneficios Exclusivos</h2>
            <p>
              Desliza para ver si sos usuario/cliente de alguna de estas empresas y accede a beneficios exclusivos en tus tratamientos. El descuento aplica a todas las sesiones a las que asistas.
            </p>
          </div>

          {/* Carrusel Desplazamiento Infinito */}
          <div className="convenio-carousel-wrapper">
            <div className="convenio-carousel-track">
              {doubledConvenios.map((item, index) => (
                <div key={index} className="convenio-card">
                  <div className="convenio-discount">{item.discount}</div>
                  <h3 className="convenio-name">{item.name}</h3>
                  <p className="convenio-desc">{item.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                Aprovechá tu beneficio la próxima jornada.
              </p>
            </div>
            <a 
              href="https://wa.me/5493434043513?text=Hola%20Bodytech!%20Quiero%20validar%20mi%20descuento%20de%20convenio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Validar mi beneficio
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Sedes Section */}
      <section id="contacto" className="section-bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contacto y Sedes</h2>
            <p>Atendemos en Paraná con previa reserva de turno.</p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 className="card-title" style={{ marginBottom: '20px' }}>Ubicaciones en Paraná</h3>
              
              <div className="sede-card">
                <MapPin className="sede-icon" />
                <div>
                  <h4 className="sede-title">Sede Noreste</h4>
                  <p className="sede-address">Soler 3026, Paraná, Entre Ríos</p>
                </div>
              </div>

              <div className="sede-card">
                <MapPin className="sede-icon" />
                <div>
                  <h4 className="sede-title">Sede Centro (Pránika)</h4>
                  <p className="sede-address">España 257, Paraná, Entre Ríos</p>
                  <a href="https://instagram.com/pranika_saludintegral" target="_blank" rel="noopener noreferrer" className="sede-instagram">
                    @pranika_saludintegral
                  </a>
                </div>
              </div>

              <div className="sede-card">
                <Clock className="sede-icon" />
                <div>
                  <h4 className="sede-title">Horarios de Atención</h4>
                  <p className="sede-address" style={{ margin: 0 }}>Lunes a Sábado de 09:00 a 20:00 hs.</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3 className="card-title" style={{ marginBottom: '10px' }}>Envianos tu consulta</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '25px' }}>
                Completá tus datos y te redirigiremos a nuestro WhatsApp para reservar tu turno.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <Sparkles size={48} style={{ color: 'var(--color-primary)', marginBottom: '20px' }} />
                  <h4 className="card-title">¡Redirigiendo a WhatsApp!</h4>
                  <p style={{ fontSize: '0.9rem' }}>Por favor aguardá un segundo...</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      className="form-input" 
                      placeholder="Ej. María Pérez" 
                      required 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="whatsapp">Número de WhatsApp</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      className="form-input" 
                      placeholder="Ej. +54 9 343 404-3513" 
                      required 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="servicio">Servicio de Interés</label>
                    <select 
                      id="servicio" 
                      className="form-select"
                      value={formData.servicio}
                      onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                    >
                      <option value="laser">Depilación Láser Definitiva</option>
                      <option value="rejuvenecimiento">Rejuvenecimiento Láser</option>
                      <option value="alquiler">Alquiler de Equipos</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="mensaje">Mensaje o Consulta (Opcional)</label>
                    <textarea 
                      id="mensaje" 
                      rows="3" 
                      className="form-textarea" 
                      placeholder="Tu mensaje..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '10px' }}>
                    <MessageSquare size={18} />
                    <span>Enviar Consulta vía WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">
          <svg viewBox="2 2 14 14" fill="currentColor" style={{ width: '22px', height: '22px', marginRight: '8px', verticalAlign: 'middle' }}>
            {/* Antennae */}
            <path d="M6,6.2 C5,5.1 4,4.2 3.5,4 C3.8,4.5 4.5,5.5 5,6 Z" opacity="0.8" />
            <path d="M6.5,6 C5.5,4.8 4.6,3.8 4.2,3.5 C4.5,4 5.2,5 5.6,5.8 Z" opacity="0.8" />
            {/* Body */}
            <path d="M6.8,6.5 C6.6,7.5 5.8,11.5 6.2,12.5 C6.6,13.2 7,13.5 7.2,12.8 C7.4,12.1 7.2,7.5 7,6.5 Z" />
            {/* Big upper wing */}
            <path d="M7.1,7.2 C8.5,5.8 12.5,4.2 14,6.2 C15.5,8.2 13.5,10.2 7.4,9.5 Z" />
            {/* Small lower wing */}
            <path d="M7.2,9.8 C8.8,9.5 12.8,9.8 13.2,11.2 C13.6,12.6 11,13.2 7.3,11.8 Z" />
          </svg>
          <span>Bodytech</span>
        </div>
        <p className="footer-subtitle">Depilación Láser · Estética Integral · Paraná, Entre Ríos</p>
        
        <ul className="footer-nav">
          <li><a href="#inicio" className="footer-nav-link">Inicio</a></li>
          <li><a href="#laser" className="footer-nav-link">Depilación Láser</a></li>
          <li><a href="#rejuvenecimiento" className="footer-nav-link">Rejuvenecimiento</a></li>
          <li><a href="#alquiler" className="footer-nav-link">Alquiler de Equipos</a></li>
          <li><a href="#convenios" className="footer-nav-link">Convenios</a></li>
          <li><a href="#contacto" className="footer-nav-link">Contacto</a></li>
        </ul>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Bodytech Paraná. Todos los derechos reservados.</p>
          <p style={{ marginTop: '10px', fontSize: '0.75rem', color: '#686060' }}>
            Desarrollado con estética de alta gama para centros médicos y de bienestar.
          </p>
        </div>
      </footer>
    </>
  );
}
