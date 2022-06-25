import React from "react";

import {
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterColumn,
  FooterContainerFlex,
} from "./FooterStyles";
import { Row, Section } from "../../globalStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterContainerFlex>
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src="./assets/logo.png" />
              Mine Empire
            </FooterLogo>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              <FooterSocialIcon
                href="https://twitter.com/mine_empire"
                target="_blank"
                aria-label="Twitter"
              >
                <img src="../../assets/twitter.png" alt="" />
              </FooterSocialIcon>
              <FooterSocialIcon
                href="https://discord.gg/ZtH6KtpqGQ"
                target="_blank"
                aria-label="Discord"
              >
                <img src="../../assets/discord.png" alt="" />
              </FooterSocialIcon>
              <FooterSocialIcon
                href="https://t.me/mineempire"
                target="_blank"
                aria-label="Telegram"
              >
                <img src="../../assets/telegram.png" alt="" />
              </FooterSocialIcon>
              <FooterSocialIcon
                href="https://aslan-1.gitbook.io/mine-empire/"
                target="_blank"
                aria-label="Gitbook"
              >
                <img src="../../assets/gitbook.png" alt="" />
              </FooterSocialIcon>
            </Row>
          </FooterColumn>
        </FooterContainerFlex>
        <FooterRights>Mine Empire © 2022</FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
