import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "../components/icons";

const facebook = "https://www.facebook.com/leisurevehiclesandautorepairs";

export const metadata: Metadata = {
  title: "Vehicle Services in Newton Abbot & Torbay",
  description:
    "Pre-purchase inspections, motorhome habitation checks, car and van servicing, diagnostics and repairs in Newton Abbot, Torbay and surrounding areas.",
};

const habitationChecks = [
  "Gas system check. Gas-It certified.",
  "230V and 12V electrical checks.",
  "Water system, heating and hot water.",
  "Windows, doors, seals and visual damp inspection.",
  "Safety equipment and general habitation condition.",
];

const interimService = [
  "Engine oil and filter change.",
  "Fluid top-ups, brakes, tyres, steering and suspension.",
  "Battery, lights, wipers, horn, belts and hoses.",
  "Visual leak check.",
];

const fullService = [
  "Everything included in an interim service.",
  "Air, cabin/pollen and fuel filters, as applicable.",
  "Spark plugs, where applicable.",
  "Detailed brake and suspension inspection.",
  "Exhaust, driveshafts and CV joints.",
  "Brake fluid test and change if required.",
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-layout">
          <div className="page-hero-inner">
            <p className="eyebrow reveal"><span className="status-dot" /> SERVICES · NEWTON ABBOT &amp; TORBAY</p>
            <h1 className="reveal">Practical care for<br /><span>every kind of journey.</span></h1>
            <p className="page-lead reveal">
              Inspections, servicing and repairs for cars, vans, motorhomes and campervans. Tell us what you need and we’ll help you find the right next step.
            </p>
            <a className="button button-gold reveal" href={facebook} target="_blank" rel="noreferrer">Ask about a service on Facebook <Icon name="arrow-up-right" /></a>
          </div>
          <Image
            className="services-feature-image reveal"
            src="/img/offer.jpg"
            alt="Leisure Vehicle & Auto Repairs minor and full service information"
            width={1254}
            height={1254}
            sizes="(max-width: 720px) 100vw, 32vw"
          />
        </div>
      </section>

      <section className="service-details section-pad">
        <div className="container">
          <article className="detail-card reveal" id="pre-purchase">
            <div className="detail-index">01 <span>INSPECTIONS</span></div>
            <div className="detail-content">
              <h2>Pre-purchase inspections</h2>
              <p>Buying a vehicle is a big decision. An independent check can help identify visible faults, wear and potential issues before you commit.</p>
              <div className="detail-tags"><span>Cars</span><span>Vans</span><span>Motorhomes</span></div>
            </div>
            <div className="detail-aside"><strong>From £40</strong><span>Price confirmed when you enquire.</span><a href={facebook} target="_blank" rel="noreferrer">Book an inspection <Icon name="arrow-up-right" /></a></div>
          </article>

          <article className="detail-card reveal" id="habitation">
            <div className="detail-index">02 <span>LEISURE VEHICLES</span></div>
            <div className="detail-content">
              <h2>Motorhome habitation checks</h2>
              <p>Checks focused on your motorhome’s living area and essential systems, to help you understand its condition before a trip.</p>
              <ul className="check-list">
                {habitationChecks.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
              </ul>
            </div>
            <div className="detail-aside"><span className="cert-mark"><Icon name="check" /> GAS-IT CERTIFIED</span><span>Ask about combining habitation and vehicle work.</span><a href={facebook} target="_blank" rel="noreferrer">Ask for a quote <Icon name="arrow-up-right" /></a></div>
          </article>

          <article className="detail-card reveal" id="servicing">
            <div className="detail-index">03 <span>ROUTINE CARE</span></div>
            <div className="detail-content">
              <h2>Minor, interim &amp; full servicing</h2>
              <p>Service work is matched to your vehicle and its service requirements. Ask what is due and what is included before booking.</p>
              <div className="service-levels">
                <div>
                  <h3>Minor / interim service</h3>
                  <ul className="check-list">
                    {interimService.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3>Full / major service</h3>
                  <ul className="check-list">
                    {fullService.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
                  </ul>
                </div>
              </div>
              <p className="service-qualifier">Parts and checks vary by make, model and service schedule. Brake fluid is tested and changed where needed.</p>
            </div>
            <div className="detail-aside"><span>Cars · vans · leisure vehicles</span><a href={facebook} target="_blank" rel="noreferrer">Ask about servicing <Icon name="arrow-up-right" /></a></div>
          </article>

          <article className="detail-card reveal" id="repairs">
            <div className="detail-index">04 <span>REPAIRS &amp; DIAGNOSTICS</span></div>
            <div className="detail-content">
              <h2>Repairs, diagnostics &amp; checks</h2>
              <p>Help with common repairs, investigating warning lights and getting your vehicle ready for the road.</p>
              <div className="detail-tags"><span>MOT preparation &amp; repairs</span><span>Diagnostics</span><span>Brakes &amp; clutches</span><span>Timing belts</span><span>Gas testing</span><span>240V testing</span><span>Seasonal checks</span></div>
            </div>
            <div className="detail-aside"><span>Tell us the symptoms and vehicle details.</span><a href={facebook} target="_blank" rel="noreferrer">Discuss a repair <Icon name="arrow-up-right" /></a></div>
          </article>
        </div>
      </section>

      <section className="service-model">
        <div className="container service-model-inner reveal">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2>A garage in Newton Abbot.<br /><span>Mobile visits, case dependent.</span></h2>
          </div>
          <p>We work from a dedicated garage base in Newton Abbot and cover Torbay and surrounding areas. Mobile visits may be possible depending on the vehicle and the work required. Get in touch to check.</p>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container contact-cta-inner reveal">
          <div><p className="eyebrow">Let’s talk it through</p><h2>Not sure what you need?<br /><span>Start with a quick enquiry.</span></h2></div>
          <div className="contact-cta-actions">
            <a className="button button-gold" href={facebook} target="_blank" rel="noreferrer">Message us on Facebook <Icon name="arrow-up-right" /></a>
            <a className="cta-phone" href="tel:+447456799745"><Icon name="phone" /> 07456 799745</a>
          </div>
        </div>
      </section>
    </main>
  );
}
