import React from 'react';
import Container from '../Container';
import Heading from '../Heading';

const ConsumerQuestions = () => (
  <div>
    <Container>
      <Heading id="consumer-questions" size={2}>Commonly asked patient questions</Heading>
      <hr />
      <Heading id="different-than-insurance" size={3}>
        Is this different than health insurance?
      </Heading>
      <p>Yes. Directly is not health insurance.</p>
      <p> Health insurance requires patients to pay monthly premiums (even if they do not require
      care), co-pays each time they receive care, their entire deductible before insurance starts to
      really pay out, and co-insurance (a percentage of the cost of care) after they have paid their
      entire deductible. Often times, after a patient receives care, they receive multiple bills in
      the mail that each incur an additional out-of-pocket expense.</p>
      <p>This makes patients think that healthcare is unaffordable without health insurance. Why
      wouldn’t they? There appear to be costs at every turn, and no one seems to know how much
      anything costs. It is often futile to even try and pay upfront, in cash, for the care you
      need.</p>
      <p>Directly knows, like you, that this is ridiculous.</p>
      <p>We believe that health insurance should be insurance. Meaning that an individual should
      have a stop-loss policy for catastrophic care, not for everyday purchases. No one uses their
      car insurance when their tire is flat; they use it when their car is totaled. No one uses home
      insurance when their window is cracked; they use it when their house is flooded. So, why do
      people use health insurance for simple surgeries, dental work, MRIs, or physical therapy? They
      should use it for catastrophic care, like cancer treatment.</p>
      <p>Directly is a way to pay for only the care you need, when you need it, from board-certified
      physicians.</p>
      <Heading id="less-expensive-than-insurance" size={3}>
        Is this less expensive than health insurance?
      </Heading>
      <p>Directly can be significantly more affordable than traditional health insurance because you
      only pay for the care you need.</p>
      <p>Providers who list their prices on Directly do not have to spend time and money getting
      insurance estimates for their patients, negotiating insurance reimbursement rates for their
      practice, collecting fees (like co-pays) from patients, ensuring they actually get paid by the
      insurance company (and in a timely fashion), or altering their treatment decisions due to
      insurance reimbursement stipulations.</p>
      <p>By eliminating all of these costly insurance-related headaches, providers can list their
      procedures for less money, while still being profitable.</p>
      <Heading id="who-should-use-directly" size={3}>
        Who should use Directly?
      </Heading>
      <p>You should use Directly if you do not have insurance, have a high-deductible health plan,
      have not yet met your deductible, or if your employer is self-insured.</p>
      <p>If you work for a self-insured employer, please talk to them about Directly. Remember, they
      pay the remainder of the bill after your contribution, not an insurance company. So, they
      would surely appreciate Directly’s transparent healthcare costs just as much as you.</p>
      <p>Directly presents bundled, upfront prices so patients can actually budget for their
      healthcare and never receive a surprise bill again.</p>
      <Heading id="which-procedure-to-purchase" size={3}>
        How do I know which procedure to purchase?
      </Heading>
      <p>You may already have a procedure or healthcare service in mind that you require. Certain
      procedures can be purchased immediately; you just pay online and set up an appointment with
      that healthcare provider.</p>
      <p>Other times you may not know what care you need. For these situations, most providers have
      a consultation option that you can purchase. This will give them time to assess your situation
      and determine the best course of action.</p>
      <p>You can also contact Directly <a href="mailto:hello@directly.io">via email</a> if you have
      any questions or concerns.</p>
    </Container>
  </div>
);

export default ConsumerQuestions;
