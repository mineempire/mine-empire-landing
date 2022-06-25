import React, { useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  Img,
  ContentColumn,
  ResourceImgWrapper,
  ContentColumnResources,
} from "./ContentStyles.js";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const ResourcesContent = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  linkTo,
  inverse,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <a href={linkTo} target="_blank" rel="noreferrer">
                <ContentButton
                  initial={initial}
                  transition={{ delay: 1, duration: 0.6 }}
                  animate={animation}
                  inverse={inverse}
                  primary={primary}
                >
                  {buttonLabel}
                </ContentButton>
              </a>
            </TextWrapper>
          </ContentColumn>
          <ContentColumnResources
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ResourceImgWrapper>
              <Img src="../../assets/energy.png" alt="" />
            </ResourceImgWrapper>
            <ResourceImgWrapper>
              <Img src="../../assets/iron.png" alt="" />
            </ResourceImgWrapper>
            <ResourceImgWrapper>
              <Img src="../../assets/cobalt.png" alt="" />
            </ResourceImgWrapper>
            <ResourceImgWrapper>
              <Img src="../../assets/silver.png" alt="" />
            </ResourceImgWrapper>
            <ResourceImgWrapper>
              <Img src="../../assets/bismuth.png" alt="" />
            </ResourceImgWrapper>
            <ResourceImgWrapper>
              <Img src="../../assets/ruby.png" alt="" />
            </ResourceImgWrapper>
          </ContentColumnResources>
        </ContentRow>
      </Container>
    </Section>
  );
};
