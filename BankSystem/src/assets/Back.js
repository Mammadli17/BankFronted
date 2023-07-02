
import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const Back = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#101828"
      d="M27.333 20.251a.688.688 0 0 1-.594.681l-.093.007H14.56l4.367 4.347a.688.688 0 0 1-.893 1.041l-.078-.066-5.545-5.522a.688.688 0 0 1-.203-.488v-.026l.003-.04-.003.066a.7.7 0 0 1 .136-.41l.006-.007a.688.688 0 0 1 .06-.069l5.546-5.524a.687.687 0 0 1 1.037.898l-.066.077-4.365 4.347h12.084c.38 0 .687.309.687.688Z"
    />
    <Rect width={39} height={39} x={0.5} y={0.5} stroke="#EAECF0" rx={11.5} />
  </Svg>
)
export default Back
