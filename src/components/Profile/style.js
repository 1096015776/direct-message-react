import styled from "styled-components";
import Icon from "../Icon";
import arrowRight from "@/assets/icons/arrowRight.svg";
export const StyledProfile = styled.div`
display:grid;
align-content: start;
justify-content:center;
justify-items:center;
position:relative;
overflow-y:auto;
height:100%;
padding:30px;
`;


export const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })` 
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`

export const SocialLinks = styled.div` 
display:flex;
& > *{
  margin:0 10px;
}
`


export const ContactSection = styled.section` 
display: grid;
row-gap: 18px;
`

export const AlbumSection = styled.section`
  justify-self: stretch;
  padding:0 45px;
`


export const AlbumTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > a{
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
      cursor:pointer;
    }
  }
`

export const Album = styled.div`
margin-top:14px;
width:100%;
display:grid;
justify-self:start;
gap:10px;
grid-template-columns:repeat(3,1fr)
`
export const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`
