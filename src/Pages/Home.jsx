import { HomeTitle, HomeWrapper, MainPoints, Point, TextWrapper } from "components/HomeInfo/HomeInfo.styled";


export default function Home() {
  return (
    <HomeWrapper>
      <HomeTitle>Stay Connected</HomeTitle>
      <TextWrapper>
        <MainPoints>
          <Point>
            <b>Effortless Organization</b> : Categorize your contacts easily, so
            you can quickly find the right person when you need them.
          </Point>
          <Point>
            <b>Smart Search</b>: Our powerful search feature ensures speedy
            access to contact details, saving you time and effort.
          </Point>
          <Point>
            <b>Seamless Access</b>: Enjoy access across all your devices,
            ensuring your contacts are with you wherever you go.
          </Point>
        </MainPoints>
      </TextWrapper>
    </HomeWrapper>
  );
}
