import {h} from 'preact'
import {StyleSheet, css} from 'aphrodite'
import {Colors, FontSize, lightOrDarkMode, useDarkMode} from './style'

interface ColorChitProps {
  color: string
}

export function ColorChit(props: ColorChitProps) {
  const style = lightOrDarkStyle(useDarkMode())
  return <span className={css(style.stackChit)} style={{backgroundColor: props.color}} />
}

const lightOrDarkStyle = lightOrDarkMode(isDarkMode =>
  StyleSheet.create({
    stackChit: {
      position: 'relative',
      top: -1,
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: '0.5em',
      border: `1px solid ${isDarkMode ? Colors.GRAY : Colors.LIGHT_GRAY}`,
      width: FontSize.LABEL - 2,
      height: FontSize.LABEL - 2,
    },
  }),
)
