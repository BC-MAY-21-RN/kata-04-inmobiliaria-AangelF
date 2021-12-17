import React from 'react'
import { View, Text } from 'react-native'
import { MiniatureContainer, MiniatureImage, MiniatureText, TextBold, Positions, ViewFlexRow } from './Styled'
import { Icon } from 'react-native-elements'

export const Miniature = () => {
  return (
    <MiniatureContainer>
      <MiniatureImage
        source={{
          uri: "https://i.ebayimg.com/images/g/OlMAAOSwpOFe~OHa/s-l400.jpg",
        }}
      />
      <MiniatureText>
        <TextBold>The Willows</TextBold>
        <Positions>
          <Icon name='map-marker' type='font-awesome'/>
          <Text>3517 W. Gray St. Utica</Text>
        </Positions>
        <Positions>
          <ViewFlexRow>
            <Icon name='bed' type='font-awesome'/>
            <Text>3</Text>
          </ViewFlexRow>
          <ViewFlexRow>
            <Icon name='bath' type='font-awesome'/>
            <Text>2</Text>
          </ViewFlexRow>
          <ViewFlexRow>
            <Icon name='th-large' type='font-awesome'/>
            <Text>230 ft</Text>
          </ViewFlexRow>
        </Positions>
        <Positions>
          <TextBold>$440/m</TextBold>
          <Icon name='gratipay' type='font-awesome' color='#008f39'/>
        </Positions>
      </MiniatureText>
    </MiniatureContainer>
  )
}



