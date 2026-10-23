import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Leisure Vehicle & Auto Repairs handles personal information when you use this website or make an enquiry.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="legal-page">
        <div className="container legal-container">
          <p className="eyebrow">YOUR INFORMATION</p>
          <h1>Privacy policy</h1>
          <p className="legal-updated">Last updated: 23 October 2026</p>
          <p className="legal-intro">This policy explains how Leisure Vehicle &amp; Auto Repairs handles personal information when you visit this website or contact the business.</p>

          <section><h2>Information you provide</h2><p>If you contact us by phone or WhatsApp, we may receive the information you choose to share, such as your name, contact details, vehicle details and a description of the work you need. We use this information to respond to your enquiry, discuss or arrange work, and keep records relating to that work.</p></section>
          <section><h2>How we use your information</h2><p>We use personal information only where needed to respond to you, provide a requested service, manage our business records or meet legal obligations. We do not sell your personal information.</p></section>
          <section><h2>Sharing information</h2><p>We do not share enquiry information for advertising. Information may be handled by the communications provider you choose, such as your phone network or WhatsApp, or disclosed where required by law. Third-party providers handle information under their own policies.</p></section>
          <section><h2>How long we keep information</h2><p>We keep information only for as long as reasonably needed to handle your enquiry, provide services, maintain appropriate business records and meet legal requirements. Retention periods depend on the type of record.</p></section>
          <section><h2>Cookies and analytics</h2><p>This website does not currently use a contact form or embedded social feed. Essential technical data may be processed by the website hosting provider to deliver and protect the site. If analytics or other non-essential cookies are added, this policy will be updated and any required consent will be requested.</p></section>
          <section><h2>Your rights</h2><p>Depending on the circumstances, you may have rights to request access to, correction or deletion of your personal information, or to object to or restrict some processing. To make a request, contact us using the details below. You may also raise a concern with the UK Information Commissioner’s Office.</p></section>
          <section><h2>Contact</h2><p>For a privacy enquiry, call <a href="tel:+447456799745">07456 799745</a> or message <a href="https://wa.me/447456799745">Leisure Vehicle &amp; Auto Repairs on WhatsApp</a>.</p></section>
        </div>
      </section>
    </main>
  );
}
