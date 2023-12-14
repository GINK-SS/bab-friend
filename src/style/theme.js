const size = {
  mobile: "450px",
  tablet: "900px",
  laptop: "1290px",
  desktop: "1920px",
};

const theme = {
  mainColor: "#0a4297",
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
