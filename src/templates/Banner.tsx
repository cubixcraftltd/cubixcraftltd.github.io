import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Interested in working with us?"
      subtitle="contact@cubixcraft.io"
      button={
        <Link href="/">
          <div></div>
        </Link>
      }
    />
  </Section>
);

export { Banner };
