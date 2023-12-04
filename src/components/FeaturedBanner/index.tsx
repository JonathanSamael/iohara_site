import { FeaturedText, FeaturedDetails, DescriptionText, SocialMedia } from "./FeaturedBanner.styled";
import twitter from '../../assets/images/twitter_5968830.png';

const FeaturedBanner = () => {
  return (
    <>
      <FeaturedDetails>
        <FeaturedText>Mª Iohara Quirino-Amador</FeaturedText>
      </FeaturedDetails>
      <DescriptionText>
        Ecologist understanding the relationship between humans and the ocean |
        <a href="https://www.instagram.com/shescience.podcast/" target="_blank">She'Science Podcast</a> | Ph.D. student in Sustainability at <a href="https://twitter.com/uhishetland" target="_blank">@uhishetland</a> |
        <a href="https://twitter.com/SUPERDTP1" target="_blank">@SUPERDTP1</a> 🐟🌊🎣
      </DescriptionText>
      <SocialMedia>
            <a href='https://twitter.com/mariaiohara'><img src={twitter} alt="logo do twitter/X"/></a>
      </SocialMedia>
    </>
  );
};

export default FeaturedBanner;
