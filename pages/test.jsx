import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const Test = () => {
  const { locale, locales, push } = useRouter();

  const { t: translate } = useTranslation('home');
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <h2>{translate('hero description')}</h2>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
      // Will be passed to the page component as props
    },
  };
}

export default Test;
