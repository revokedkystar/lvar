import Link from "next/link";
import Image from "next/image";
import { Icon } from "./icons";

const phone = "07456 799745";
const facebook = "https://www.facebook.com/leisurevehiclesandautorepairs";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Leisure Vehicle and Auto Repairs home">
          <Image className="brand-logo" src="/media/header.be89f38bd296.webp" alt="Leisure Vehicle & Auto Repairs" width={210} height={43} />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/#offers">Offers</Link>
          <Link href="/#about">About</Link>
          <Link href="/#enquire">Contact</Link>
        </nav>
        <details className="mobile-menu">
          <summary>Menu <span aria-hidden="true">+</span></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/services">Services</Link>
            <Link href="/#offers">Offers</Link>
            <Link href="/#about">About</Link>
            <Link href="/#enquire">Contact</Link>
          </nav>
        </details>
        <a className="header-call" href="tel:+447456799745">
          <Icon name="phone" /><span>Call now</span><span className="header-phone">{phone}</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Image className="brand-logo" src="/media/header.be89f38bd296.webp" alt="Leisure Vehicle & Auto Repairs" width={210} height={43} />
            </Link>
            <p>Independent vehicle care for cars, vans, motorhomes and campervans.</p>
            <span className="footer-area">Newton Abbot · Torbay &amp; surrounding areas</span>
          </div>
          <div className="footer-links">
            <span className="footer-label">EXPLORE</span>
            <Link href="/services">Services</Link>
            <Link href="/#offers">Offers</Link>
            <Link href="/terms">Terms &amp; conditions</Link>
            <Link href="/privacy">Privacy policy</Link>
          </div>
          <div className="footer-contact">
            <span className="footer-label">GET IN TOUCH</span>
            <a href="tel:+447456799745">{phone}</a>
            <a href={facebook} target="_blank" rel="noreferrer">Facebook enquiries <Icon name="arrow-up-right" /></a>
            <span>Mobile service available, case dependent</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Leisure Vehicle &amp; Auto Repairs</span>
          <span>Independent garage · Newton Abbot, Devon</span>
        </div>
      </div>
    </footer>
  );
}
