import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import DotBG from 'assets/images/dot-bg.svg';


export const SliderContainer = styled.div`
  .awssld {
    --slider-height-percentage: 40%;
    --slider-transition-duration: 700ms;
    --organic-arrow-thickness: 4px;
    --organic-arrow-border-radius: 0px;
    --organic-arrow-height: 40px;
    --organic-arrow-color: #26456f;
    --control-button-width: 12%;
    --control-button-height: 35%;
    --control-button-background: transparent;
    --control-bullet-color: #2d5182;
    --control-bullet-active-color: #26456f;
    --loader-bar-color: #851515;
    --loader-bar-height: 6px;
}

.awssld{
  &__content {
    p {
      transform: translate3d(0, 0, 0);
      opacity: 1;
      transition: transform 0.45s cubic-bezier(0.15, 0.3, 0.15, 1), opacity 0.35s ease-out;
    }
    p:nth-child(2) {
      transition-delay: 0.05s, 0.05s;
    }
    &--exit {
      p {
        transition: transform 0.225s cubic-bezier(0.85, 0, 0.85, 0.7), opacity 0.4s ease-out;
      }
      p:nth-child(2) {
        transition-delay: 0.05s, 0.05s;
      }
    }
    &--moveLeft {
      p {
        transform: translate3d(-50px, 0, 0);
        opacity: 0;
      }
    }
    &--moveRight {
      p {
        transform: translate3d(50px, 0, 0);
        opacity: 0;
      }
    }
  }
}
`;

export const ProductDetailsWrapper = styled.div`
  background-color: ${themeGet('colors.black', '#ffffff')};
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const ProductPreview = styled.div`
  width: 100%;
  height: 510px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 990px) {
    height: 220px;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    height: 320px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RestaurantMeta = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 60px;
  background-color: ${themeGet('colors.black2', '#ffffff')};
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
  @media (min-width: 991px) and (max-width: 1400px) {
    padding: 20px 40px;
  }
`;

export const RestaurantNameAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 990px) {
    padding: 20px 15px;
    border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  }
`;

export const RestaurantName = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#161F6A')};
  margin-bottom: 5px;
  @media (max-width: 990px) {
    font-size: ${themeGet('fontSizes.base', '15')}px;
    margin-bottom: 10px;
  }
`;

export const RestaurantAddress = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798C')};
  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.sm', '13')}px;
  }
`;

export const RestaurantOtherInfos = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    width: 100%;
    padding: 20px 15px;
    justify-content: space-between;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  @media (max-width: 767px) {
    margin-right: 25px;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    &:first-child {
      margin-right: auto;
    }
  }
`;

export const Label = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798C')};
  margin-bottom: 10px;
  @media (max-width: 990px) {
    white-space: nowrap;
  }
`;

export const Infos = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#fff')};
`;

export const DeliveryOpt = styled.span`
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeGet('colors.primary.regular', '#009E7F')};
  border-radius: ${themeGet('radii.small', '3px')};
  padding: 10px;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  @media (max-width: 990px) {
    flex-shrink: 0;
  }
`;

export const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 60px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 1px solid ${themeGet('colors.gray.1000', '#f1f1f1')};
  background-color: ${themeGet('colors.black2', '#ffffff')};
  @media (max-width: 990px) {
    padding: 0 15px;
  }
  @media (min-width: 991px) and (max-width: 1400px) {
    padding: 0px 40px;
  }
`;

export const CategoriesInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0px;
  overflow-x: auto;
  @media (max-width: 990px) {
    padding: 20px 0;
  }
  a.category {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.white', '#77798C')};
    text-transform: capitalize;
    margin-right: 50px;
    cursor: pointer;
    &.active {
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: ${themeGet('colors.black', '#161F6A')};
      padding:5px 15px 5px 15px;
      border-radius:20px;
      background-color:${themeGet('colors.primary.regular', '#009E7F')};
    }
    @media (max-width: 990px) {
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      margin-right: 30px;
      text-transform: uppercase;
    }
  }
`;

export const Categories = styled.a``;

export const MainContent = styled.div`
  background-color: ${themeGet('colors.black3', '#ffffff')};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 30px 60px;
  @media (max-width: 990px) {
    padding: 20px 15px;
  }
  @media (min-width: 991px) and (max-width: 1400px) {
    padding: 30px 40px;
  }
`;

export const CartWrapper = styled.div`
  width: 360px;
  flex-shrink: 0;
  .fixedCartBox {
    width: 100%;
    /* height: 100vh; */
    .items-wrapper {
      height: calc(100vh - 385px);
    }
  }
  @media (max-width: 990px) {
    display: none;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 330px;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('colors.black3', '#ffffff')};
  border-radius: ${themeGet('radii.small', '3px')};
  @media (max-width: 990px) {
    margin: 0;
  }
`;

export const ItemCategoryWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  border-bottom: 1px solid ${themeGet('colors.gray.1000', '#f1f1f1')};
  display: flex;
  align-items: flex-start;
  justify-content:  flex-start;
  @media (max-width: 990px) {
    padding: 20px 0;
  }
`;

export const ItemCategoryName = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.md', '19')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#161F6A')};
  padding: 0 0px;
  position: relative;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${themeGet('colors.black3', '#ffffff')};
  padding: 30px 0px;
  border-bottom: 1px solid ${themeGet('colors.gray.1000', '#f1f1f1')};
  @media (max-width: 990px) {
    padding: 20px;
  }
`;

export const ItemNameDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  @media (max-width: 990px) {
    margin-right: 30px;
  }
`;

export const ItemName = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#161F6A')};
  margin-bottom: 10px;
`;

export const ItemDetails = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.gray.800', '#77798C')};
`;

export const ItemNamePricing = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width:140px;
  @media (max-width: 990px) {
    width:60px;
  }
  @media (min-width: 991px) and (max-width: 1400px) {
     width:80px;
  }
`;

export const HelpText = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.white', '#77798C')};
  @media (max-width: 990px) {
    display: none;
  }
`;

export const ItemPrice = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#161F6A')};
`;
