import styled from "styled-components";

//Style for Miniature
export const MiniatureContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    margin: 10px 10px 10px 5px;
    border-radius: 10px;
    background-color: #D5FFFF;
`;

export const MiniatureImage = styled.Image`
    width: 100px; 
    height: 100px;
    border-radius: 10px;
    margin: 15px;
`;
export const MiniatureText = styled.View`
    width: 190px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const TextBold = styled.Text`
    color: #000000;
    font-weight: bold;
    font-size: 20px;
`;
export const Positions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Info = styled.View`
    
`;
export const Price = styled.View`
    
`;
export const ViewFlexRow = styled.View`
    display: flex;
    flex-direction: row;    
`;
