// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isRedMore, setIsReadMore] = useState(false)

  const onClickReadMore = () => setIsReadMore(prevState => !prevState)

  const description = isRedMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isRedMore ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickReadMore}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}
export default ReadMore
