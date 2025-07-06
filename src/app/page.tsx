export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="logo">Renier Quer</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Renier Quer</h1>
          <h2 className="hero-subtitle">Arqueólogo Visual</h2>
          <p>
            Contemporary Cuban artist specializing in visual archaeology of revolutionary myths. 
            Through systematic deconstruction of cinema and storyboard analysis, I excavate 
            the hidden narratives beneath decades of visual propaganda.
          </p>
          <div className="cta-buttons">
            <a href="#gallery" className="btn btn-primary">Explore Visual Archaeology</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section" id="gallery">
        <h2 className="section-title">Visual Archaeology Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Eisenstein Deconstructions</h3>
            <p>
              Frame-by-frame analysis of revolutionary cinema, revealing the mundane 
              human stories hidden beneath heroic narratives. Each storyboard excavates 
              the layers of propaganda to uncover authentic emotional moments.
            </p>
            <a href="#contact" className="card-link">View Collection →</a>
          </div>
          <div className="card">
            <h3>Storyboard Archaeology</h3>
            <p>
              Original storyboards that deconstruct communist myths through academic 
              drawing techniques. Every line functions as a scalpel dissecting 
              the visual language of revolutionary propaganda.
            </p>
            <a href="#contact" className="card-link">See Storyboards →</a>
          </div>
          <div className="card">
            <h3>Counter-Narrative Studies</h3>
            <p>
              Deep analytical studies exploring how visual propaganda functions, 
              and systematic methodology for revealing the human stories censored 
              by heroic imagery.
            </p>
            <a href="#contact" className="card-link">Read Analysis →</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <h2 className="section-title">About the Arqueólogo Visual</h2>
        <div className="about-content">
          <div>
            <p className="about-text">
              Renier Quer (La Habana, 1983) is the only contemporary artist 
              systematically dedicated to excavating the ruins of communist 
              imagery to reveal hidden narratives beneath the rubble of official history. 
              His artistic practice transcends mere representation to become an act 
              of visual archaeology.
            </p>
            <p className="about-text">
              Trained at San Alejandro (2004) and in Tania Bruguera's Arte de Conducta (2008), 
              Quer uses the most traditional art tools—drawing, line, graphite—to perform 
              the most contemporary critique possible. Each storyboard functions as a 
              surgical operation on the body of revolutionary myth.
            </p>
          </div>
          <div>
            <p className="about-text">
              His methodology involves frame-by-frame deconstruction of films like 
              Eisenstein's "October," searching for the mundane instead of the epic, 
              performing a visual biopsy that reveals ideological metastases hidden 
              in heroic images.
            </p>
            <p className="about-text">
              "I don't draw to represent. I draw to excavate. Each stroke is a shovel 
              that removes layers of visual propaganda accumulated over decades. 
              My work is to make visible the invisible: to show that beneath every 
              heroic image beats a human story that was silenced."
            </p>
          </div>
        </div>
        
        <div className="stats">
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Frames Analyzed</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Film Deconstructions</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Visual Excavations</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 className="section-title">Connect with the Arqueólogo Visual</h2>
        <div className="contact-content">
          <p>
            Interested in visual archaeology methodology, commissioning original analyses, 
            or acquiring works? Let's discuss how visual excavation can reveal the 
            hidden stories in your own historical narratives.
          </p>
          <div className="contact-info">
            <a href="mailto:contact@renierquer.com" className="btn btn-primary">
              Contact for Commissions
            </a>
            <p>Professional inquiries, exhibitions, and acquisition opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Renier Quer. All rights reserved.</p>
          <div className="footer-links">
            <a href="#gallery">Visual Archaeology</a>
            <a href="#blog">Methodology</a>
            <a href="#about">About</a>
            <a href="mailto:contact@renierquer.com">Contact</a>
          </div>
          <p>Arqueólogo Visual • Contemporary Cuban Artist • Revolutionary Myth Deconstructor</p>
        </div>
      </footer>
    </>
  )
}