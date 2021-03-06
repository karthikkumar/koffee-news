/** @jsxImportSource @emotion/react */
import { Color, Font } from "../utils/css-vars";

const Line = () => (
  <span
    css={{
      height: "1px",
      width: "100%",
      backgroundColor: Color.orangeLite,
      margin: "0.4rem",
    }}
  />
);

const Divider = ({ message, style }) => (
  <div
    css={{
      display: "flex",
      justifyContent: "space-around",
      color: Color.yellow,
      fontFamily: Font.news,
      fontWeight: "100",
      fontSize: "0.7rem",
      ...style,
    }}
  >
    <Line />
    <span
      css={{
        textAlign: "center",
        whiteSpace: "nowrap",
        alignSelf: "center",
      }}
    >
      {message}
    </span>
    <Line />
  </div>
);

export default Divider;
