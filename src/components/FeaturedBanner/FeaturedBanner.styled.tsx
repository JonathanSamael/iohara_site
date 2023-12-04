import styled from "styled-components";

export const FeaturedDetails = styled.div`
  display: flex;
  align-items: end;
  height: 15rem;
  width: max-content;
  border-bottom: 1px solid var(--primary-bg);
`;

export const FeaturedText = styled.h1`
  font-size: 3.5rem;
  font-style: italic;
  padding: 0;
  margin: 0;
`;

export const DescriptionText = styled.p`
  width: 38rem;
  font-size: var(--font-small);
`;

export const SocialMedia = styled.div`
  img {
    width: 2rem;
  }
`;
