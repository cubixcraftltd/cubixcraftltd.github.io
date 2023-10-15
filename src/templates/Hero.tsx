import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">
              Redefining the challenges of Software Development
            </span>
          </>
        }
        description="We are product first Tech Partners which helps you solving technical software development challenges"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <></>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
