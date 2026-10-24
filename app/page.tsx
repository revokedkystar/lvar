import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Icon } from "./components/icons";

const phone = "07456 799745";
const facebook = "https://www.facebook.com/leisurevehiclesandautorepairs";
const address =
  "Unit 1 School Road Business Park, Newton Abbot, Devon, TQ12 2JU, UK";
const mapLocation = {
  latitude: 50.5299899,
  longitude: -3.6087372,
};
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapLocation.latitude},${mapLocation.longitude}&z=16&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapLocation.latitude},${mapLocation.longitude}`;
const facebookReviews = [
  {
    url: "https://www.facebook.com/Ry.Hollis/posts/pfbid02GvaFQWFD9oyPz7ySvztjN4srzZtjy3kjFxAgPJZ7vUGHMZvbmy8cK2rUFfitP3Pbl",
    quote:
      "Dan came out to repair a light fitting on my car that had come loose and was no longer connected, and changed the bulb too. The job was done within 10 minutes. He was super friendly and charged a very reasonable, affordable price. I definitely recommend him.",
    detail: "Car · loose light fitting and bulb replacement",
  },
  {
    url: "https://www.facebook.com/leese.spencer/posts/pfbid02eTcLYR9cuyxkHeDH3zm7XSLRDzB1qHrVSAvi5jUPtnr85MYMPCusPW4DStD14qShl",
    quote:
      "Dan was very helpful, friendly and knew what he was looking for. He collected my car and returned it once he had fixed the problem. His prices are also very reasonable.",
    detail: "Car · collection, repair and return",
  },
  {
    url: "https://www.facebook.com/dean.percival.790/posts/pfbid0uthN3UDXRVdp3nfuNicbtecHZeKwJUxN67vcLH1YR6KvHkEAHsuuiVJC4u8FKUc5l",
    quote:
      "Excellent service from start to finish. Friendly, honest, and kept me updated throughout. The work was completed quickly and to a high standard at a fair price. Highly recommend and will definitely use again!",
    detail: "Repair · clear updates and work completed to a high standard",
  },
];

const audienceSegments = [
  {
    icon: "search" as const,
    title: "Cars & everyday vehicles",
    description:
      "Routine servicing, repairs and independent pre-purchase checks to help you make an informed decision.",
    services: "Pre-purchase checks · servicing · diagnostics",
    href: "/services#pre-purchase",
  },
  {
    icon: "van" as const,
    title: "Vans & work vehicles",
    description:
      "Practical maintenance and repairs for the vehicles you rely on for work.",
    services: "Servicing · repairs · diagnostics",
    href: "/services#servicing",
  },
  {
    icon: "wrench" as const,
    title: "Motorhomes & campervans",
    description:
      "Habitation checks and vehicle care to help you understand what needs attention before a trip.",
    services: "Habitation · gas · electrical · water checks",
    href: "/services#habitation",
  },
];

const commonWorries = [
  {
    title: "Worried about buying a problem vehicle?",
    description:
      "Arrange an independent pre-purchase check before you commit. Inspections start from £40.",
  },
  {
    title: "Not sure what a repair will cost?",
    description:
      "Tell us what’s happening. We’ll discuss the next step and confirm a quote before agreed work begins.",
  },
  {
    title: "Unsure which jobs are urgent?",
    description:
      "Get a clear conversation about the symptoms and practical next steps for your vehicle.",
  },
  {
    title: "Getting a motorhome ready for travel?",
    description:
      "Ask about habitation checks covering key living-area systems and visible condition.",
  },
];

const processSteps = [
  {
    title: "Send an enquiry",
    description: "Call or message with your vehicle details and what you need.",
  },
  {
    title: "Review the vehicle and symptoms",
    description: "We’ll discuss the concern, service needs and suitable next step.",
  },
  {
    title: "Confirm scope and price",
    description: "Agree an inspection or quote before work is booked.",
  },
  {
    title: "Complete the agreed work",
    description: "Get an update on the work and what has been completed.",
  },
];

const faqs = [
  {
    question: "How much does a pre-purchase inspection cost?",
    answer:
      "Pre-purchase inspections start from £40. The price and scope depend on the vehicle and are confirmed when you enquire.",
  },
  {
    question: "Do you offer mobile visits?",
    answer:
      "Mobile visits may be available depending on the vehicle, work required, location and practical working conditions. Please check with us before arranging a visit.",
  },
  {
    question: "What does a pre-purchase inspection cover?",
    answer:
      "An inspection helps identify visible faults, wear and potential issues before you buy. Scope varies by vehicle, condition and access, so confirm what is included when you enquire.",
  },
  {
    question: "How soon can I book?",
    answer:
      "Availability depends on the work and schedule. Call or message us with your vehicle details and preferred timing and we’ll confirm the next step.",
  },
  {
    question: "Do I need to approve additional work?",
    answer:
      "If additional work is identified, we’ll discuss it with you before proceeding.",
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
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.lvar.co.uk/#webpage",
        url: "https://www.lvar.co.uk/",
        name: "Independent Vehicle Servicing, Repairs & Inspections | LVAR",
        isPartOf: { "@id": "https://www.lvar.co.uk/#website" },
        about: { "@id": "https://www.lvar.co.uk/#localbusiness" },
        inLanguage: "en-GB",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.lvar.co.uk/#faq",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">
                <span className="status-dot" />
                Newton Abbot · Torbay · surrounding areas
              </p>
              <h1 className="reveal">
                Spot costly problems
                <br />
                <span>before you buy.</span>
              </h1>
              <p className="hero-description reveal">
                An independent pre-purchase inspection can help identify visible faults before you commit. We also service and repair cars, vans and motorhomes across Newton Abbot and Torbay.
              </p>
              <p className="hero-positioning reveal">
                Independent local garage with 18+ years of hands-on experience in Newton Abbot &amp; Torbay — garage base with mobile visits available.
              </p>
              <div className="hero-actions reveal">
                <a className="button button-gold" href={facebook} target="_blank" rel="noreferrer">
                  Ask about an inspection <Icon name="arrow-up-right" />
                </a>
                <a className="button button-outline" href="tel:+447456799745">
                  <Icon name="phone" /> Call now
                </a>
              </div>
              <p className="hero-microcopy reveal">
                Send a message and we’ll reply with availability and next steps within 1 working day.
              </p>
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
                src="/media/banner.6b8a597c73e6.webp"
                alt="Leisure Vehicle & Auto Repairs banner featuring cars and a motorhome"
                width={1942}
                height={809}
                preload
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
            <Link href="/services">Explore our services <Icon name="arrow-down" /></Link>
          </div>
        </section>

        <section className="offers section-pad" id="offers">
          <div className="container">
            <SectionHeading eyebrow="Spot issues before they grow" title="Get clear advice before you commit">
              Independent inspections, practical servicing and repairs for the vehicles you depend on.
            </SectionHeading>
            <div className="gold-rule section-rule" aria-hidden="true" />
            <div className="offer-grid reveal-stagger">
              <article className="offer-card offer-featured">
                <div className="offer-art">
                  <Image src="/media/inspection.47c8bb3c15a1.webp" alt="Pre-purchase inspection offer for cars, vans and motorhomes" fill sizes="(max-width: 720px) 100vw, 33vw" />
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
                  <Image src="/media/update.eba6836b3e27.webp" alt="Autumn and Winter car check artwork" fill sizes="(max-width: 720px) 100vw, 33vw" />
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
                  <Image src="/media/motohome.335b7a36a11e.webp" alt="Motorhome habitation check artwork" fill sizes="(max-width: 720px) 100vw, 33vw" />
                </div>
                <div className="offer-content">
                  <span className="offer-label">HABITATION CHECKS</span>
                  <div className="offer-title">Prepare for the road with confidence.</div>
                  <p>Ask about combining your habitation check with other vehicle work.</p>
                  <a href={facebook} target="_blank" rel="noreferrer">Request a quote <Icon name="arrow-up-right" /></a>
                </div>
              </article>
            </div>
            <p className="offer-note reveal">Prices and availability are confirmed when you enquire. The £40 inspection price is a starting price.</p>
          </div>
        </section>

        <section className="credibility-strip" aria-label="Experience and service credentials">
          <div className="container credibility-items">
            <div><strong>18+ years</strong><span>Hands-on experience</span></div>
            <div><strong>Gas-It certified</strong><span>Motorhome habitation checks</span></div>
            <div><strong>Newton Abbot</strong><span>Dedicated garage base</span></div>
            <div><strong>Mobile visits</strong><span>Available where suitable</span></div>
          </div>
        </section>

        <section className="audiences section-pad" aria-labelledby="audiences-heading">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Vehicle care for your needs</p>
              <h2 id="audiences-heading">The right help for your vehicle</h2>
              <div className="section-intro">Choose a vehicle type to see the services and checks available.</div>
            </div>
            <div className="audience-grid">
              {audienceSegments.map((segment, index) => (
                <Link className="audience-card" href={segment.href} key={segment.title}>
                  <span className="audience-number">0{index + 1}</span>
                  <Icon name={segment.icon} />
                  <h3>{segment.title}</h3>
                  <p>{segment.description}</p>
                  <span className="audience-services">{segment.services}</span>
                  <span className="audience-link">Explore services <Icon name="arrow-up-right" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="worries section-pad">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Clear advice, before work begins</p>
              <h2>Common vehicle worries, made easier to tackle</h2>
            </div>
            <div className="worry-grid">
              {commonWorries.map((worry, index) => (
                <article className="worry-card" key={worry.title}>
                  <span>0{index + 1}</span>
                  <h3>{worry.title}</h3>
                  <p>{worry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="difference section-pad">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Independent and local</p>
              <h2>A garage base, with mobile flexibility</h2>
              <div className="section-intro">
                A practical hybrid approach in Newton Abbot and the surrounding area.
              </div>
            </div>
            <div className="comparison-grid">
              <article className="comparison-card comparison-featured">
                <span className="offer-label">LEISURE VEHICLE &amp; AUTO REPAIRS</span>
                <h3>Garage-based, mobile where suitable</h3>
                <ul>
                  <li><Icon name="check" /> Dedicated garage in Newton Abbot</li>
                  <li><Icon name="check" /> Cars, vans, motorhomes and campervans</li>
                  <li><Icon name="check" /> Mobile visits considered case by case</li>
                  <li><Icon name="check" /> Scope and price discussed before work</li>
                </ul>
              </article>
              <article className="comparison-card">
                <span className="offer-label">OTHER WAYS TO GET VEHICLE CARE</span>
                <h3>Choose the setup that suits the job</h3>
                <ul>
                  <li><Icon name="check" /> Main dealers and chains generally work from their sites; services vary</li>
                  <li><Icon name="check" /> Mobile-only providers work at your location; equipment and access vary</li>
                  <li><Icon name="check" /> Compare the service scope, location and quote before booking</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="process section-pad">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Simple next steps</p>
              <h2>From first message to road ready</h2>
            </div>
            <ol className="process-grid">
              {processSteps.map((step, index) => (
                <li className="process-step" key={step.title}>
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pricing section-pad">
          <div className="container pricing-grid">
            <div className="section-heading">
              <p className="eyebrow">Straightforward pricing</p>
              <h2>Know what to expect before you book</h2>
              <div className="section-intro">
                The right price depends on your vehicle and the work required. We’ll confirm the scope and price when you enquire.
              </div>
            </div>
            <div className="pricing-items">
              <article>
                <span>01</span>
                <div><h3>Published starting price</h3><p>Pre-purchase inspections from £40. Final scope and price depend on the vehicle.</p></div>
              </article>
              <article>
                <span>02</span>
                <div><h3>Servicing and repairs</h3><p>Quoted for the vehicle, parts and work agreed. Ask us before booking.</p></div>
              </article>
              <article>
                <span>03</span>
                <div><h3>No surprise extra work</h3><p>If additional work is identified, we’ll discuss it with you before proceeding.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="enquiry section-pad" id="enquire">
          <div className="container enquiry-inner">
            <div>
              <p className="eyebrow">Start with a conversation</p>
              <h2>Tell us what your vehicle needs.</h2>
              <p>Send your vehicle details, what’s happening and when you’re available. We’ll reply with availability and next steps within 1 working day.</p>
            </div>
            <div className="enquiry-actions">
              <a className="button button-gold" href={facebook} target="_blank" rel="noreferrer">Message us on Facebook <Icon name="arrow-up-right" /></a>
              <a className="button button-outline" href="tel:+447456799745"><Icon name="phone" /> Call {phone}</a>
            </div>
          </div>
        </section>

        <section className="customer-reviews section-pad" aria-labelledby="customer-reviews-heading">
          <div className="container">
            <div className="customer-reviews-heading">
              <p className="eyebrow">Customer feedback</p>
              <h2 id="customer-reviews-heading">What customers say</h2>
            </div>
            <div className="facebook-reviews-grid">
              {facebookReviews.map((review) => (
                <article className="facebook-review" key={review.url}>
                  <span className="review-label">FACEBOOK CUSTOMER FEEDBACK</span>
                  <blockquote>“{review.quote}”</blockquote>
                  <p className="review-detail">{review.detail}</p>
                  <a href={review.url} target="_blank" rel="noreferrer">
                    Read original Facebook post <Icon name="arrow-up-right" />
                  </a>
                  <span className="review-attribution">Customer feedback · Facebook</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faqs">
          <div className="container faq-layout">
            <div className="section-heading">
              <p className="eyebrow">Good to know</p>
              <h2>Frequently asked questions</h2>
              <p className="section-intro">If you’re not sure what you need, get in touch and we’ll talk it through.</p>
            </div>
            <div className="faq-list">
              {faqs.map(({ question, answer }) => (
                <details className="faq-item" key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-pad" id="about">
          <div className="container approach-grid">
            <div className="location-map reveal">
              <iframe
                title={`Map showing ${address}`}
                src={mapEmbedUrl}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "clamp(320px, 42vw, 480px)",
                  border: 0,
                }}
              />
              <a href={mapLink} target="_blank" rel="noreferrer">
                Open interactive map
              </a>
            </div>
            <div className="approach-copy">
              <div className="approach-intro-row">
                <SectionHeading eyebrow="A local garage, with flexibility" title="Good work starts with a proper conversation">
                  Not sure what your vehicle needs? Explain what is happening and get clear advice on the next step.
                </SectionHeading>
                <div className="approach-details">
                  <address className="approach-address">
                    <span className="eyebrow">Visit us</span>
                    <span>{address}</span>
                  </address>
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
