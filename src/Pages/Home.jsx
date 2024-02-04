import {
  HomeTitle,
  HomeWrapper,
  MainPoints,
  Point,
  TextWrapper,
} from 'components/HomeInfo/HomeInfo.styled';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export default function Home() {
  const { t, i18n } = useTranslation('global');
  // document.body.dir = 'rtl'

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);
  return (
    <HomeWrapper >
      <HomeTitle >{t('home.title')}</HomeTitle>
      <TextWrapper>
        <MainPoints>
          <Point>
            <b>{t('home.textOne.title')}</b> : {t('home.textOne.text')}
          </Point>
          <Point>
            <b>{t('home.textTwo.title')}</b> : {t('home.textTwo.text')}
          </Point>
          <Point>
            <b>{t('home.textThree.title')}</b> : {t('home.textThree.text')}
          </Point>
        </MainPoints>
      </TextWrapper>
    </HomeWrapper>
  );
}
