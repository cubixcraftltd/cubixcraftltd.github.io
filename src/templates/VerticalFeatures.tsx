import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Solve your software challenges with us"
    description="Our mission is to provide high quality data driven software development to our partners"
  >
    <VerticalFeatureRow
      title="Product First"
      description="We are a Product first Company and develop and maintain our own internal products"
      image="/assets/images/service1.png"
      imageAlt="Product First"
    />
    <VerticalFeatureRow
      title="Data Driven Product development"
      description="We give a lots of importance to data and use data heavily to enable our product development"
      image="/assets/images/service2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Quality Software Engineers"
      description="We have a strong selection and training culture which will provide a high quality of Engineers"
      image="/assets/images/service3.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Remote First"
      description="We are a remote first company which gives us advantages over traditional software companies with respect to cost and engineer reach."
      image="/assets/images/service4.png"
      imageAlt="Four feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
