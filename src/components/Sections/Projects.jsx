import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

// Components
import ProjectBox from "../Elements/ProjectBox";

// Assets
import ProjectImg1 from "../../assets/img/projects/ads.jpg";
import ProjectImg2 from "../../assets/img/projects/location.jpg";
import ProjectImg3 from "../../assets/img/projects/video.jpg";
import ProjectImg4 from "../../assets/img/projects/measurement.jpg";
import ProjectImg5 from "../../assets/img/projects/social_media.jpg";
import ProjectImg6 from "../../assets/img/projects/audience.jpg";
import AddImage2 from "../../assets/img/add/web3.jpg";
import { Link } from "react-scroll";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Next-Gen Marketing</h1>
            <p className="font13">
              We have expertise in delivering various types of advertisements
              through PPC, SEO, Connected TV and Social Media
              <br />
              We can achieve a range of KPIs while delivering different kinds of
              advertisements on different channels
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="PPC Ads"
                text="Delivered ads to a specific audience group that is
                interested in learning AI, through demographic and interest-based segments within specific locations, key metrics tracked were CPC, CPA, CTR, Viewability and RoAS"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Location Intelligence"
                text="Location Intelligence is critical for hyperlocal targeting of audience. We have delivered Ads on specific neighborhoods, key locations like malls, cinema halls and educational institutions"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Video Marketing"
                text="Delivered youtube video ads that can start prior or during Youtube Videos and ad banners that show up while the video is playing. These video clips were having high impact on Conversion and brand awareness"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Social Media"
                text="Social Media has a high impact on specific kind of campaigns that sell products instantly, most suitable for e-commerce"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Campaign Measurement"
                text="We can measure campign effectiveness using offline visitations, online purchases and information shared voluntarily by customers"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Highly Relevant Audience"
                text="Campaigns were delivered to specific audience groups based on geographical, behavioral, psychographic and interest groupings"
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">
                Simtel AI - Advertising and Media
              </h4>
              <h2 className="font40 extraBold">Perfecting Success</h2>
              <p className="font12">
                Backed by Experience, Creativity, Technical know-how and
                superior Customer XP by going the extra mile
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <Button variant="contained" component={Link} to="contact">
                    Contact Us
                  </Button>
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
