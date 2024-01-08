import React from "react";
import styled from "styled-components";
// Assets
import Content from "../../assets/img/services/content.png";
import Email from "../../assets/img/services/email.png";
import RTB from "../../assets/img/services/rtb.png";
import SEO from "../../assets/img/services/seo.png";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "content":
      getIcon = Content;
      break;
    case "email":
      getIcon = Email;
      break;
    case "rtb":
      getIcon = RTB;
      break;
    case "seo":
      getIcon = SEO;
      break;
    default:
      getIcon = Content;
      break;
  }

  return (
    <div>
      <Wrapper className="flexNullCenter">
        <img src={getIcon} width={80} height={80} alt={title} />
      </Wrapper>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;