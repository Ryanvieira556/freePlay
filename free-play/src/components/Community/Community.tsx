import * as C from "./styles";
import BannerCommunity from "../../assets/Img/communityImage.png";
import BannerCommunityMobile from "../../assets/Img/communityImageMobile.png";

export const Community = () => {
  return (
    <C.Container>
      <C.ContainerContent>
        <C.ContainerImg>
          <C.CommunityImg src={BannerCommunity} />
          <C.CommunityImgMobile src={BannerCommunityMobile} />
        </C.ContainerImg>
      </C.ContainerContent>
    </C.Container>
  );
};
