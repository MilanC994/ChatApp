import {
  compose,
  spacing,
  palette,
  display,
  flexbox,
  sizing,
  positions,
} from '@material-ui/system'
import { styled } from '@material-ui/core/styles'

const Box = styled('div')(
  compose(flexbox, spacing, palette, display, sizing, positions)
)

export default Box
