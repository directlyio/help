import React from 'react';
import Container from '../Container';
import Heading from '../Heading';

const ProviderQuestions = () => (
  <div>
    <Container>
      <Heading id="consumer-questions" size={2}>Commonly asked provider questions</Heading>
      <hr />
      <Heading id="what-is-directly" size={3}>
        What is Directly?
      </Heading>
      <p>Directly is an online healthcare marketplace committed to transparent pricing and free
      market principles. Think Amazon or Orbitz for healthcare. Doctors, facilities, and healthcare
      providers determine what care to provide and how much to charge. These prices are presented
      directly to the buyers of healthcare, thereby cutting out insurance companies and their costly
      billing and administrative expenses.</p>
      <p>With Directly, providers become independent contractors, instead of insurance industry
      subcontractors. By setting their own prices and selling directly to healthcare buyers,
      providers finally regain lost practice and decision making autonomy.</p>
      <Heading id="why-sell-on-directly" size={3}>
        Why should I sell my services on Directly?
      </Heading>
      <p>1. To regain your autonomy from powerful insurance companies and hospital
      organizations.</p>
      <p>2. You will make more money on each procedure you perform because administrative costs are
      dramatically reduced and there are no billing costs.</p>
      <p>3. There are no denials of payment or the need to collect money from patients since all
      services are paid for up front.</p>
      <p>4. You set your own prices; we never tell you what to charge.</p>
      <p>5. All treatment decisions are between you and your patient; we never get involved in
      clinical decision making.</p>
      <Heading id="why-put-prices-online" size={3}>
        Why would I put my prices online?
      </Heading>
      <p>Whoever has the buyer has control of the marketplace. If you want to move from
      subcontractor to contractor status in the marketplace, then buyers have to know how much care
      will cost them.</p>
      <p>Exposing your prices may seem scary. However, hiding your procedure prices simply enables
      health insurance companies to operate as normal and continue to isolate providers and
      facilities from the buyers of healthcare. The health insurance industry would love to remain
      the only player in the market that knows your pricing, since it gives them full control of
      your practice and the marketplace. By being transparent in your pricing you expose the true
      cost of healthcare, which is to your advantage, not the insurance industry.</p>
      <Heading id="who-are-the-buyers" size={3}>
        Who are the buyers of healthcare?
      </Heading>
      <p>This may seem like a silly question; obviously many of the buyers are individuals with and
      without health insurance. However, 60% of all healthcare policies are issued by self-insured
      companies (SIC’s), and as health insurance plans become more expensive every year, a growing
      number of companies are choosing to become self-insured.</p>
      <p>According to the US Department of Health and Human Services, 26% of companies with 100-499
      employees, 82% of companies with 500+ employees, and 90+% of companies with 1000+ employees
      are self-insured. This is extremely important to realize because once the employees meet their
      out-of-pocket requirements, the employer covers the rest of the healthcare cost, not the
      insurance company. Which means these SICs are always searching for more affordable healthcare
      and need a comprehensive network of providers and services with upfront prices.</p>
      <Heading id="benefits-of-transparent-pricing" size={3}>
        What are some benefits of transparent pricing?
      </Heading>
      <p>Now that most people are required to have health insurance that provides “minimum essential
      coverage” under the Affordable Care Act (ACA), many individuals and employers are opting for
      high deductible health plans (HDHP). While these plans satisfy the government’s coverage
      requirements, they have, like the name implies, relatively high deductibles.</p>
      <p>This means consumers, now more than ever, are trying to get the best deal for their care
      possible; they know they will be paying out-of-pocket for the vast majority of their
      non-catastrophic care. By providing patients and employers with upfront prices, there is a
      large incentive for them to purchase your care. However, continuing to hide prices will
      discourage these thrifty consumers from considering you as a viable option entirely.</p>
      <Heading id="why-would-a-patient-use" size={3}>
        Why would a patient use Directly?
      </Heading>
      <p>Typical patient use cases for Directly are when:</p>
      <ol>
        <li>
          They do not have insurance.
        </li>
        <li>
          The procedure they require is not covered under their particular insurance policy (they
          can submit an out-of-network claim, as necessary).
        </li>
        <li>
          They have not met their deductible, and the price they see on Directly is less than
          paying the rest of their deductible out-of-pocket.
        </li>
        <li>
          The procedure on Directly is cheaper than using their insurance (i.e. they have a
          bare-bones policy, they’ve gotten a similar procedure in the past which was more costly
          than the price they see on Directly, etc.).
        </li>
        <li>
          Their employer is self-insured. This means Directly can provide the patient and employer
          with known costs, especially if the provider is out-of-network. This simultaneously
          saves the employer a significant amount of money and improves employee benefit options.
        </li>
      </ol>
      <p>Elaborating on the last patient use case: Directly can currently be used as an
      out-of-network benefit option for self-insured companies. If an employee needs a procedure
      that is not covered under the contracted TPA network provided by a health insurance company,
      they can easily shop on Directly for that care.</p>
      <p>The self-insured company is delighted because their financial responsibility is known;
      they know both the portion paid for by the employee and the total cost upfront. Since Directly
      is a single access point for care, once there are enough procedures/services on the platform
      to accommodate a wide variety of healthcare needs, self-insured companies could drop their
      insurance company TPA entirely.</p>
    </Container>
  </div>
);

export default ProviderQuestions;
