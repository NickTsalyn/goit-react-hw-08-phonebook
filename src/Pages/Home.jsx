import {
  HomeTitle,
  HomeWrapper,
  MainPoints,
  Point,
  TextWrapper,
} from 'components/HomeInfo/HomeInfo.styled';
import { useTranslation } from 'react-i18next';


export default function Home() {
  const { t } = useTranslation('global');

  return (
    <HomeWrapper>
      <HomeTitle>{t('home.title')}</HomeTitle>
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
