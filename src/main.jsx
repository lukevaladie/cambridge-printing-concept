import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { services, buildBrief } from './data';
import './styles.css';

function Arrow({ diagonal = false, ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>{diagonal ? <path d="M5 19 19 5M5 5h14v14" /> : <path d="M3 12h17m-7-7 7 7-7 7" />}</svg>;
}

function Mark({ className = '' }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M35 7a20 20 0 1 0 0 34l-8-8a9 9 0 1 1 0-18z" fill="currentColor"/><circle cx="34" cy="24" r="6" fill="currentColor"/></svg>;
}

function PrintArt({ small = false }) {
  return <div className={`print-art ${small ? 'small-art' : ''}`} role="img" aria-label="Original concept artwork: orange art poster, blue business cards, green stationery, and cream letterpress card. Illustrations, not actual customer work.">
    <div className="art-grid" />
    <div className="art-shadow" />
    <div className="art-sheet art-stationery"><div className="stationery-top">FIELD<br />NOTES.</div><div className="stationery-circle"/><span>A little room<br />for big ideas.</span><div className="tiny-rules"/></div>
    <div className="art-sheet art-poster"><div className="poster-meta"><span>CAMBRIDGE<br />CREATIVE SERIES</span><span>NO.<br />001</span></div><div className="poster-word">Good<br />on<br /><i>paper.</i></div><div className="poster-star">✶</div><span className="poster-bottom">IDEAS THAT LEAVE AN IMPRESSION.</span></div>
    <div className="art-sheet art-card"><Mark/><span>Make<br />your mark.</span><small>CAMBRIDGE PRINTING</small></div>
    <div className="art-sheet art-invite"><span>YOU’RE INVITED</span><div className="invite-flower">✶</div><b>Something<br /><i>worth celebrating.</i></b><small>LETTERPRESS / CONCEPT STUDY</small></div>
    <div className="color-strip"><i/><i/><i/><i/><i/></div>
    <div className="art-caption">PAPER, INK & A LITTLE POSSIBILITY.<br /><span>ORIGINAL ILLUSTRATIVE CONCEPTS</span></div>
    <div className="registration reg-one">+</div><div className="registration reg-two">+</div>
  </div>;
}

function ServiceArt({ service }) {
  if (service === 'print') return <div className="service-art service-print" aria-hidden="true"><div className="mini-poster"><span>ON<br />THE<br /><i>record.</i></span><div className="record"/><small>A STUDY IN PRINT.</small></div><span className="art-spec">OFFSET · DIGITAL · LETTERPRESS</span></div>;
  if (service === 'design') return <div className="service-art service-design" aria-hidden="true"><div className="design-grid"><div>Aa<span>TYPE THAT TALKS.</span></div><div className="design-disc"/><div className="design-bars"><i/><i/><i/></div><div className="design-cross">✶</div></div><span className="art-spec">FROM FIRST SKETCH TO FINAL FILE</span></div>;
  if (service === 'promo') return <div className="service-art service-promo" aria-hidden="true"><div className="tote-handles"/><div className="tote"><Mark/><strong>Out<br />& about.</strong><span>TAKE YOUR IDEAS WITH YOU.</span></div><span className="art-spec">BRANDED GOODS & APPAREL</span></div>;
  return <div className="service-art service-mail" aria-hidden="true"><div className="postcard"><span className="stamp">C<br />P</span><strong>Hello,<br /><i>neighbor.</i></strong><div className="postcard-lines"/></div><span className="art-spec">PRINTED. PERSONAL. DELIVERED.</span></div>;
}

function ProjectDialog({ onClose }) {
  const dialog = useRef(null);
  const heading = useRef(null);
  const [complete, setComplete] = useState(false);
  const [values, setValues] = useState({ project: 'Business cards & stationery', quantity: 'Not sure yet', timing: 'Flexible / exploring options' });
  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    const prior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prior; };
  }, []);
  useEffect(() => { heading.current?.focus(); }, [complete]);
  const update = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  const download = () => {
    const url = URL.createObjectURL(new Blob([buildBrief(values)], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'sample-print-project-brief.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <dialog ref={dialog} className="project-dialog" onClose={onClose} onClick={e => { if (e.target === dialog.current) dialog.current.close(); }} aria-labelledby="dialog-title">
    <div className="dialog-inner"><button className="close-dialog" onClick={() => dialog.current.close()} aria-label="Close project planner">×</button>
      <p className="eyebrow">INTERACTIVE DESIGN DEMO</p>
      <h2 id="dialog-title" ref={heading} tabIndex={-1}>{complete ? 'An idea, taking shape.' : 'What are you making?'}</h2>
      <p className="dialog-intro">{complete ? 'Here’s a sample project brief. Nothing has been sent to the business.' : 'Try a simpler way to start a print project. This prototype stays in your browser and collects no contact details.'}</p>
      {!complete ? <form onSubmit={e => { e.preventDefault(); setComplete(true); }}>
        <label>Project type<select aria-label="Project type" name="project" value={values.project} onChange={update}><option>Business cards & stationery</option><option>Brochures & printed materials</option><option>Posters & signage</option><option>Invitations & letterpress</option><option>Promotional products</option><option>Mailing & fulfillment</option><option>Design & consultation</option></select></label>
        <div className="form-columns"><label>Approximate quantity<select aria-label="Approximate quantity" name="quantity" value={values.quantity} onChange={update}><option>Not sure yet</option><option>Under 100</option><option>100–500</option><option>500–1,000</option><option>More than 1,000</option></select></label><label>Timing<select aria-label="Timing" name="timing" value={values.timing} onChange={update}><option>Flexible / exploring options</option><option>Within 2 weeks</option><option>Within a month</option><option>More than a month away</option></select></label></div>
        <button className="button orange full" type="submit">Preview your brief <Arrow/></button>
      </form> : <><dl className="brief-summary"><div><dt>Project</dt><dd>{values.project}</dd></div><div><dt>Quantity</dt><dd>{values.quantity}</dd></div><div><dt>Timing</dt><dd>{values.timing}</dd></div></dl><p className="no-quote">This is not a quote or an order. Specifications, availability, price, and turnaround need confirmation with the business.</p><div className="summary-actions"><button className="button orange" onClick={download}>Save sample brief <Arrow/></button><button className="text-button" onClick={() => setComplete(false)}>Edit selections</button></div></>}
      <div className="dialog-footer">For real inquiries, use the <a href="https://cambridgeprinting.net/contact.html" target="_blank" rel="noreferrer">official website <span aria-hidden="true">↗</span></a>.</div>
    </div>
  </dialog>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState(0);
  const [planner, setPlanner] = useState(false);
  const selected = services[service];
  const tabs = useRef([]);
  function changeTab(e, index) {
    let next = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % services.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (index + services.length - 1) % services.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = services.length - 1;
    else return;
    e.preventDefault(); setService(next); tabs.current[next]?.focus();
  }
  useEffect(() => {
    const close = e => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="concept-bar"><span><i/> INDEPENDENT WEBSITE CONCEPT</span><span>Not the official business site <a href="https://cambridgeprinting.net/" target="_blank" rel="noreferrer">View original ↗</a></span></div>
    <header className="header"><div className="nav-wrap"><a href="#" className="brand" aria-label="Cambridge Printing concept home"><Mark/><span>Cambridge<br />Printing<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(m => !m)} aria-label={menu ? 'Close navigation' : 'Open navigation'}>{menu ? 'Close −' : 'Menu +'}</button>
      <nav id="navigation" className={menu ? 'navigation is-open' : 'navigation'} aria-label="Main navigation"><a href="#services" onClick={() => setMenu(false)}>What we do</a><a href="#possibilities" onClick={() => setMenu(false)}>Possibilities</a><a href="#story" onClick={() => setMenu(false)}>Our story</a><button className="button dark" onClick={() => { setMenu(false); setPlanner(true); }}>Start a project <Arrow diagonal/></button></nav>
    </div></header>
    <main id="main">
      <section className="hero section-width"><div className="hero-copy"><p className="eyebrow"><span className="small-cross">✶</span> CAMBRIDGE, MASSACHUSETTS · SINCE 1921</p><h1>Good ideas<br />deserve<br /><span>great print.</span></h1><p className="hero-description">Something to hold. Something to share.<br className="desktop-break"/> Something that makes your business feel like you.</p><div className="hero-actions"><button className="button orange" onClick={() => setPlanner(true)}>Let’s make something <Arrow diagonal/></button><a className="underlink" href="#services">Explore our services <span>↓</span></a></div><div className="hero-note"><span className="mini-stamp">CP<br /><b>1921</b></span><span>A century of craft.<br /><strong>A fresh possibility on every page.</strong></span></div></div><PrintArt/></section>
      <div className="service-ribbon" aria-label="Services"><div><span>DESIGN</span><i>✶</i><span>PRINT</span><i>✶</i><span>PROMOTIONAL</span><i>✶</i><span>MAIL & FULFILL</span><i>✶</i><span>MADE IN CAMBRIDGE</span></div></div>
      <section className="services section-width section-space" id="services"><div className="section-heading"><div><p className="eyebrow">01 / WHAT WE DO</p><h2>Big picture.<br /><i>Every little detail.</i></h2></div><p>From the first conversation to the finishing touch, explore a full range of print and graphic services.</p></div>
        <div className="service-layout"><div className="service-tabs" role="tablist" aria-label="Explore printing services" aria-orientation="vertical">{services.map((s, i) => <button ref={el => tabs.current[i] = el} key={s.id} role="tab" id={`tab-${s.id}`} aria-selected={service === i} aria-controls={`panel-${s.id}`} tabIndex={service === i ? 0 : -1} onKeyDown={e => changeTab(e, i)} onClick={() => setService(i)}><span className="tab-number">{s.number}</span><span>{s.name}</span><Arrow diagonal/></button>)}<p className="service-tabs-note">Not sure where to start?<br /><button className="text-button" onClick={() => setPlanner(true)}>Try the project planner ↗</button></p></div>
          <div className="service-panel" role="tabpanel" id={`panel-${selected.id}`} aria-labelledby={`tab-${selected.id}`} tabIndex="0"><div className="service-panel-copy"><p className="eyebrow">{selected.tag}</p><h3>{selected.title}</h3><p>{selected.description}</p><ul>{selected.items.map(item => <li key={item}><span>+</span>{item}</li>)}</ul><a href={selected.source} target="_blank" rel="noreferrer" className="underlink">Details on the original site <Arrow diagonal/></a></div><ServiceArt service={selected.id}/></div>
        </div>
      </section>
      <section className="possibilities section-space" id="possibilities"><div className="section-width"><div className="section-heading"><div><p className="eyebrow">02 / SEE THE POSSIBILITIES</p><h2>Print has<br /><i>a personality.</i></h2></div><p>A few ways an idea can come to life.<br /><span className="demo-note">Original concept artwork, not client projects.</span></p></div><div className="work-grid"><article className="work-item"><div className="work-visual work-brand"><div className="brand-card-one"><span>COMMON<br /><i>GROUND</i></span><small>A CONCEPT IN GOOD COMPANY.</small></div><div className="brand-card-two"><div>cg.</div><span>MADE TO CONNECT.</span></div></div><div className="work-caption"><div><h3>A first impression that stays.</h3><p>Business cards & brand stationery</p></div><span>01</span></div></article><article className="work-item"><div className="work-visual work-event"><div className="event-poster"><span>THE NEIGHBORHOOD<br />CREATIVE SERIES</span><div className="event-arcs"><i/><i/><i/></div><strong>Come<br /><i>together.</i></strong><small>ILLUSTRATIVE EVENT POSTER</small></div></div><div className="work-caption"><div><h3>Give your event a big voice.</h3><p>Posters, invitations & signage</p></div><span>02</span></div></article><article className="work-item"><div className="work-visual work-mail"><div className="mail-envelope"/><div className="mail-insert"><span>A LITTLE NOTE FROM</span><strong>around<br /><i>the corner.</i></strong><div className="mail-sun">✶</div><small>HELLO, NEIGHBOR.</small></div></div><div className="work-caption"><div><h3>Make the mailbox interesting.</h3><p>Direct mail & printed campaigns</p></div><span>03</span></div></article></div></div></section>
      <section className="story section-width section-space" id="story"><div className="story-art" aria-hidden="true"><div className="story-year">19<br />21<span>EST.</span></div><div className="story-stamp">CAMBRIDGE, MA<br /><Mark/><span>ROOTED IN CRAFT.</span></div><div className="story-rule"><span>47 SEVENTH STREET</span><span>CAMBRIDGE PRINTING CO.</span></div></div><div className="story-copy"><p className="eyebrow">03 / A CAMBRIDGE ORIGINAL</p><h2>Deep roots.<br /><i>Fresh impressions.</i></h2><p>Cambridge Printing’s story began in 1921. More than a century later, its home is still in Cambridge, with services that span design, printing, promotional products, and mailing.</p><p>This concept brings that history forward: tactile, thoughtful, and ready for the next good idea.</p><a className="underlink" href="https://cambridgeprinting.net/about.html" target="_blank" rel="noreferrer">Read the company’s story <Arrow diagonal/></a></div></section>
      <section className="questions section-width"><div><p className="eyebrow">A LITTLE HELP GETTING STARTED</p><h2>Before we<br /><i>go to print.</i></h2></div><div className="faq-list"><details><summary>What should I include in a project brief?<span>+</span></summary><p>Start with the item you need, approximate quantity, finished size, and your target date. Paper, finishing, and artwork can be discussed with the printer. The demo planner above shows how that first step could work.</p></details><details><summary>What if I need help with the design?<span>+</span></summary><p>Cambridge Printing lists consultation, design, and pre-press among its services. Contact the business to discuss the level of help your project needs.</p></details><details><summary>Can I get a price or place an order here?<span>+</span></summary><p>No. This is an independent design concept, so it does not quote prices, accept orders, upload files, or send inquiries. Use the official Cambridge Printing website for a real project.</p></details></div></section>
      <section className="contact-band"><div className="section-width contact-content"><p className="eyebrow">YOUR NEXT GOOD IDEA STARTS HERE.</p><div><h2>Let’s put it<br /><i>on paper.</i></h2><button className="circle-cta" onClick={() => setPlanner(true)} aria-label="Open the demo project planner"><Arrow diagonal/></button></div><p>Explore the sample project planner. No request is sent.</p></div><span className="contact-star" aria-hidden="true">✶</span></section>
    </main>
    <footer className="footer section-width"><div className="footer-top"><a href="#" className="brand"><Mark/><span>Cambridge<br />Printing<span className="brand-dot">.</span></span></a><div><p className="eyebrow">THE REAL BUSINESS</p><p>47 Seventh Street<br />Cambridge, MA 02141</p></div><div><p className="eyebrow">PUBLIC CONTACT DETAILS</p><p>617.547.8230<br />paul@cambridgeprinting.net</p></div><a href="https://cambridgeprinting.net/" className="underlink" target="_blank" rel="noreferrer">Official website <Arrow diagonal/></a></div><div className="footer-bottom"><p><strong>Independent design concept.</strong> Not affiliated with or endorsed by Cambridge Printing. Illustrative artwork only. No orders or inquiries are collected.</p><span>CONCEPT / 2026</span></div></footer>
    {planner && <ProjectDialog onClose={() => setPlanner(false)}/>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
