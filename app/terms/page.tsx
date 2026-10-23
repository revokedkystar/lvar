import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the Leisure Vehicle & Auto Repairs website and enquiring about vehicle work.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="legal-page">
        <div className="container legal-container">
          <p className="eyebrow">INFORMATION</p>
          <h1>Terms &amp; conditions</h1>
          <p className="legal-updated">Last updated: 23 October 2026</p>
          <p className="legal-intro">These terms explain how to use this website and what to expect when you contact Leisure Vehicle &amp; Auto Repairs about vehicle work. Any specific job will be agreed with you before work starts.</p>

          <section><h2>Using this website</h2><p>The information on this website is general information about the services available. It is not a diagnosis or a quote for work on a particular vehicle. Contact us with the vehicle details and the work you have in mind so we can discuss suitability, availability and price.</p></section>
          <section><h2>Enquiries, bookings and quotations</h2><p>An enquiry does not confirm a booking. A booking is confirmed when the work, location and appointment arrangements have been agreed with you. Any estimate or quotation depends on the information available at the time. If additional work is identified, we will discuss it with you before proceeding.</p><p>Inspection and service scope can vary by vehicle, condition and access. The advertised pre-purchase inspection price starts from £40; the price and scope for your vehicle will be confirmed when you enquire.</p></section>
          <section><h2>Mobile visits</h2><p>Mobile service is case dependent. Whether a visit is possible depends on the vehicle, the work required, the location and practical working conditions. We will confirm whether a mobile appointment is suitable before arranging it.</p></section>
          <section><h2>Vehicle information and access</h2><p>Please provide accurate vehicle details and describe any known symptoms or relevant history. You are responsible for arranging access to the vehicle at the agreed time and location. If circumstances change, contact us as soon as possible.</p></section>
          <section><h2>Website content and availability</h2><p>We aim to keep website information current, but services, prices and availability may change. We do not guarantee uninterrupted access to the website. Nothing on this website limits any rights you have under applicable consumer law.</p></section>
          <section><h2>Third-party services</h2><p>This website links to Facebook and embeds Facebook posts and a Google Maps map to show customer feedback and the business location. Those services are operated under their own terms and privacy policies. We are not responsible for their content or availability.</p></section>
          <section><h2>Contact</h2><p>For questions about these terms or to discuss vehicle work, call <a href="tel:+447456799745">07456 799745</a> or message us on <a href="https://www.facebook.com/leisurevehiclesandautorepairs">Facebook</a>.</p></section>
        </div>
      </section>
    </main>
  );
}
