import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

import Image from 'next/image';
import featureImage from '../../../public/image/home/feature_section/feature_photo.png';

const features = [
  {
    name: 'Search and filter.',
    description:
      'Easily find the perfect tutor for your needs with our advanced search and intuitive filtering options.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Robust Security.',
    description:
      'Your security is our top priority. Benefit from industry-leading encryption, secure payment processing, and strict privacy measures for a worry-free tutoring experience.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Protecting your data with regular automated backups, ensuring the safety and availability of your tutoring information at all times.',
    icon: ServerIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 shadow-lg my-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-orange-500">
                Learn Faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better Learning experience<span className="text-orange-500">.</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience interactive sessions, qualified tutors, diverse
                subject coverage, flexible scheduling, and comprehensive
                resources. Unlock your full potential with our innovative online
                tutoring platform.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={featureImage}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
