import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

// Components
// import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
// Assets
import AddImage1 from "../../assets/img/add/orange.jpg";
import AddImage2 from "../../assets/img/add/cloud.jpg";
import AddImage3 from "../../assets/img/add/sun.jpg";
import AddImage4 from "../../assets/img/add/clock.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        {/* <div className="container">
          <ClientSlider />
        </div> */}
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Key Services</h1>
            <p className="font13">
              Advertisers can choose between Programmatic RTB, Social Media
              Marketing, Content Marketing and SMS/email services
              <br />
              We can handle native ads, video, audio and banner ads with
              measurement
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="rtb"
                title="Programmatic RTB"
                subtitle="We are connected to some of the top SSPs and we can generate excellent RoAS. We can deliver Native Ads, Banner Ads, Video and Audio Ads with OpenRTB 2.6 Spec"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="seo"
                title="SEO/Social Media"
                subtitle="We deliver novel marketing campaigns E2E including measurement on Google Ads Manager, Microsoft Ads, Facebook Ads and Instagram Ads"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="content"
                title="Content Marketing"
                subtitle="Blogs, Whitepapers, Videos and Short Clips are our forte and you can reach your prospects directly and convery your message"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="email"
                title="Email/SMS"
                subtitle="For bulk messages with offers and deep discounts, we can deliver email and SMS messages that bring them to explore on your landing pages"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Web3 Company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  We deliver solid RoAS to our clients by focusing on few key
                  things - Hypertargeting, Personalization and a
                  Privacy-Preserving DMP. We understand measurement well to
                  offer unique solutions to tracking the effective of the
                  campaigns
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <Button variant="contained" component={Link} to="contact">
                    Contact Us
                  </Button>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;