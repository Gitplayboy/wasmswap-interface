import { ArrowUpIcon } from 'icons/ArrowUp'
import { styled } from '../../../components/theme'
import { Inline } from '../../../components/Inline'
import { Text } from 'components/Text'

export const AprPill = ({ value, ...props }) => (
  <StyledDivForPill {...props}>
    <Inline gap={4}>
      <ArrowUpIcon color="brand" rotation="45deg" />
      <Text variant="link" color="brand" wrap={false}>
        {value}% APR
      </Text>
    </Inline>
  </StyledDivForPill>
)

const StyledDivForPill = styled('div', {
  borderRadius: '16px',
  backgroundColor: '$colors$brand20',
  padding: '$2 $8 $2 $3',
})
