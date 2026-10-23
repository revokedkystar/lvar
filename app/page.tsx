import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./components/icons";

const phone = "07456 799745";
const facebook = "https://www.facebook.com/leisurevehiclesandautorepairs";
const address =
  "Unit 1 School Road Business Park, Newton Abbot, Devon, TQ12 2JU, UK";

const services: {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  detail: string;
}[] = [
  {
    number: "01",
    icon: "search",
    title: "Pre-purchase checks",
    description:
      "A clear-eyed look at a car, van or motorhome before you commit to buying.",
    detail: "From £40",
  },
  {
    number: "02",
    icon: "van",
    title: "Motorhome habitation",
    description:
      "Practical checks for gas, electrics, water, heating and the visible condition of your home on wheels.",
    detail: "Gas-It certified",
  },
  {
    number: "03",
    icon: "wrench",
    title: "Servicing & repairs",
    description:
      "Interim and full services, MOT preparation, diagnostics and everyday mechanical repairs.",
    detail: "Cars, vans & leisure vehicles",
  },
];

const reasons = [
  "Over 18 years of hands-on experience",
  "A dedicated garage base in Newton Abbot",
  "Mobile visits available, case dependent",
  "Straightforward advice before work begins",
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-intro">{children}</div> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">
                <span className="status-dot" />
                Newton Abbot · Torbay · surrounding areas
              </p>
              <h1 className="reveal">
                Expert care for
                <br />
                cars, vans &amp;
                <br />
                <span>motorhomes.</span>
              </h1>
              <p className="hero-description reveal">
                Reliable vehicle servicing, repairs and inspections from a
                Newton Abbot garage, with mobile visits available in some
                cases.
              </p>
              <div className="hero-actions reveal">
                <a className="button button-gold" href={facebook} target="_blank" rel="noreferrer">
                  Book an inspection <Icon name="arrow-up-right" />
                </a>
                <a className="button button-outline" href="tel:+447456799745">
                  <Icon name="phone" /> Call {phone}
                </a>
              </div>
              <div className="hero-trust reveal">
                <span><Icon name="check" /> Over 18 years’ experience</span>
                <span><Icon name="check" /> Garage &amp; mobile service</span>
              </div>
            </div>
            <div className="hero-art reveal">
              <div className="hero-art-top">
                <span>INDEPENDENT VEHICLE CARE</span>
                <span>EST. EXPERIENCE · 18+ YEARS</span>
              </div>
              <Image
                className="hero-banner-image"
                src="/img/banner.jpg"
                alt="Leisure Vehicle & Auto Repairs banner featuring cars and a motorhome"
                width={1942}
                height={809}
                priority
                sizes="(max-width: 720px) 100vw, 55vw"
              />
              <div className="hero-art-caption">
                <span>Cars · vans · motorhomes</span>
                <span className="art-index">01 / 04</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>INDEPENDENT · PRACTICAL · LOCAL</span>
            <a href="#services">Explore our services <Icon name="arrow-down" /></a>
          </div>
        </section>

        <section className="offers section-pad" id="offers">
          <div className="container">
            <SectionHeading eyebrow="Straightforward options" title="Good to know before you book">
              A clear starting point for your next inspection, check or service.
            </SectionHeading>
            <div className="gold-rule section-rule" aria-hidden="true" />
            <div className="offer-grid reveal-stagger">
              <article className="offer-card offer-featured">
                <div className="offer-art">
                  <Image src="/img/inspection.jpg" alt="Pre-purchase inspection offer for cars, vans and motorhomes" fill sizes="(max-width: 720px) 100vw, 33vw" />
                </div>
                <div className="offer-content">
                  <span className="offer-label">PRE-PURCHASE INSPECTIONS</span>
                  <div className="offer-price">£40<span> from</span></div>
                  <p>Get a vehicle checked before you buy. Cars, vans and motorhomes.</p>
                  <a href={facebook} target="_blank" rel="noreferrer">Ask about an inspection <Icon name="arrow-up-right" /></a>
                </div>
              </article>
              <article className="offer-card">
                <div className="offer-art offer-art-portrait">
                  <Image src="/img/update.jpg" alt="Autumn and Winter car check artwork" fill sizes="(max-width: 720px) 100vw, 33vw" />
                </div>
                <div className="offer-content">
                  <span className="offer-label">SEASONAL CAR CHECK</span>
                  <div className="offer-title">Ready for the road.</div>
                  <p>Ask about an Autumn or Winter check for the essentials before colder weather.</p>
                  <a href={facebook} target="_blank" rel="noreferrer">Ask about a seasonal check <Icon name="arrow-up-right" /></a>
                </div>
              </article>
              <article className="offer-card">
                <div className="offer-art">
                  <Image src="/img/motohome.jpg" alt="Motorhome habitation check artwork" fill sizes="(max-width: 720px) 100vw, 33vw" />
                </div>
                <div className="offer-content">
                  <span className="offer-label">HABITATION CHECKS</span>
                  <div className="offer-title">One check. More peace of mind.</div>
                  <p>Ask about combining your habitation check with other vehicle work.</p>
                  <a href={facebook} target="_blank" rel="noreferrer">Request a quote <Icon name="arrow-up-right" /></a>
                </div>
              </article>
            </div>
            <p className="offer-note reveal">Prices and availability are confirmed when you enquire. The £40 inspection price is a starting price.</p>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="services-heading-row">
              <SectionHeading eyebrow="What we work on" title="Care for the journeys ahead">
                From a pre-purchase check to routine servicing, get practical help for the vehicle you rely on.
              </SectionHeading>
              <Link className="text-link reveal" href="/services">
                All services <Icon name="arrow-up-right" />
              </Link>
            </div>
            <div className="service-grid reveal-stagger">
              {services.map((service) => (
                <Link className="service-card" href="/services" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <Icon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-card-bottom">
                    <span>{service.detail}</span>
                    <Icon name="arrow-up-right" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-pad" id="about">
          <div className="container approach-grid">
            <div className="location-map reveal">
              <iframe
                title={`Map showing ${address}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p>{address}</p>
            </div>
            <div className="approach-copy">
              <SectionHeading eyebrow="A local garage, with flexibility" title="Good work starts with a proper conversation">
                Not sure what your vehicle needs? Explain what is happening and get clear advice on the next step.
              </SectionHeading>
              <ul className="reason-list reveal-stagger">
                {reasons.map((reason) => (
                  <li key={reason}><Icon name="check" /> {reason}</li>
                ))}
              </ul>
              <Link className="button button-outline reveal" href="/services">
                How we work <Icon name="arrow-up-right" />
              </Link>
            </div>
          </div>
        </section>

        <section className="social section-pad">
          <div className="container social-grid">
            <div className="social-copy reveal">
              <p className="eyebrow">Keep in touch</p>
              <h2>Local advice.<br /><span>Useful updates.</span></h2>
              <p>For the latest business updates and appointment enquiries, get in touch directly.</p>
              <a className="button button-gold" href={facebook} target="_blank" rel="noreferrer">
                Message us on Facebook <Icon name="arrow-up-right" />
              </a>
            </div>
            <div className="social-card reveal">
              <div className="social-card-header">
                <span className="facebook-mark">f</span>
                <div><strong>Leisure Vehicle &amp; Auto Repairs</strong><span>Newton Abbot, Devon</span></div>
                <span className="social-live"><i /> LOCAL</span>
              </div>
              <div className="social-post">
                <span className="eyebrow">HERE WHEN YOU NEED US</span>
                <p>Cars, vans, motorhomes and campervans. Garage-based repairs and mobile visits where suitable.</p>
                <span className="social-post-rule" />
                <span className="social-post-meta">Newton Abbot · Torbay &amp; surrounding areas</span>
              </div>
              <a href={facebook} target="_blank" rel="noreferrer">
                Find us on Facebook <Icon name="arrow-up-right" />
              </a>
            </div>
          </div>
        </section>

        <section className="reviews section-pad">
          <div className="container reviews-inner reveal">
            <div>
              <p className="eyebrow">Your experience matters</p>
              <h2>Good service is built on trust.</h2>
              <p>We don’t publish reviews without a verified source. Ask about the work you need, or find the business on Facebook.</p>
            </div>
            <a className="button button-outline" href={facebook} target="_blank" rel="noreferrer">
              Find us on Facebook <Icon name="arrow-up-right" />
            </a>
          </div>
        </section>

        <section className="contact-cta">
          <div className="container contact-cta-inner reveal">
            <div>
              <p className="eyebrow">Need a hand with your vehicle?</p>
              <h2>Tell us what you need.<br /><span>We’ll take it from there.</span></h2>
            </div>
            <div className="contact-cta-actions">
              <a className="button button-gold" href={facebook} target="_blank" rel="noreferrer">Book or ask a question <Icon name="arrow-up-right" /></a>
              <a className="cta-phone" href="tel:+447456799745"><Icon name="phone" /> {phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
