import styled from 'styled-components';
import {
  MAX_MOBILE_WIDTH,
  MIN_HD_WIDTH,
  MIN_FHD_WIDTH,
  MIN_QHD_WIDTH,
  MIN_4K_WIDTH,
  MIN_8K_WIDTH,
  Theme,
} from '../config/theme';

interface IFlexLayout {
  flexDirection?: string;
  align?: string;
  justify?: string;
}
interface IGridColumnLayout {
  columns?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
}

interface Itext {
  fontsize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const FlexLayout = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }: IFlexLayout) => (flexDirection ? flexDirection : 'row')};
  align-items: ${({ align }: IFlexLayout) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }: IFlexLayout) => (justify ? justify : 'flex-start')};
`;

export const GridColumnLayout = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ columns }: IGridColumnLayout) =>
    columns ? columns : 'repeat(2, minmax(0%, 100%))'};
  align-items: ${({ align }: IFlexLayout) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }: IFlexLayout) => (justify ? justify : 'flex-start')};
  margin: ${({ margin }: IGridColumnLayout) => (margin ? margin : '0')};
  padding: ${({ padding }: IGridColumnLayout) => (padding ? padding : '0')};
`;

export const Text = styled.div`
  font-size: ${({ fontsize }: Itext) => (fontsize ? fontsize : '14px')};
  font-weight: ${({ fontWeight }: Itext) => (fontWeight ? fontWeight : '400')};
  color: ${({ color }: Itext) => (color ? color : Theme.colors.softText)};
  margin: ${({ margin }: Itext) => (margin ? margin : '0')};
  padding: ${({ padding }: Itext) => (padding ? padding : '0')};
`;

/**
 * Standardizes the layout by minimizing the writer of a media-query for reproduction of content on phones.
 * @param query style applied to mobile mode.
 * @returns {string} query with media-query in CSS.
 */
// Mobile
export const isMobile = (query: string) => {
  return `@media screen and (min-width: 0px) and (max-width: ${MAX_MOBILE_WIDTH}px) { ${query} }`;
};

// SD
export const isSD = (query: string) => {
  return `@media screen and (min-width: ${MAX_MOBILE_WIDTH}px) and (max-width: ${MIN_HD_WIDTH}px) { ${query} }`;
};

// HD - 720p
export const isHD = (query: string) => {
  return `@media screen and (min-width: ${MIN_HD_WIDTH}px) { ${query} }`;
};

// FHD - 1920p
export const isFHD = (query: string) => {
  return `@media screen and (min-width: ${MIN_FHD_WIDTH}px) { ${query} }`;
};

// QHD - 1440p
export const isQHD = (query: string) => {
  return `@media screen and (min-width: ${MIN_QHD_WIDTH}px) { ${query} }`;
};

// 4K - 2160p
export const is4K = (query: string) => {
  return `@media screen and (min-width: ${MIN_4K_WIDTH}px) { ${query} }`;
};

// 8K - 4320p
export const is8K = (query: string) => {
  return `@media screen and (min-width: ${MIN_8K_WIDTH}px) { ${query} }`;
};
