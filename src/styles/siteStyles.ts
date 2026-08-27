import * as stylex from "@stylexjs/stylex";

export const colors = {
  paper: "#f4ecd9",
  paperBright: "#fffaf0",
  paperShadow: "#e7dcc1",
  ink: "#16202f",
  muted: "#5c6979",
  navy: "#193865",
  blue: "#2b5fa8",
  signal: "#df6248",
};

export const styles = stylex.create({
  body: {
    minWidth: "320px",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    backgroundColor: colors.paper,
    backgroundImage:
      "radial-gradient(circle at 86% 10%, rgba(223, 98, 72, 0.08), transparent 18rem), linear-gradient(180deg, rgba(231, 222, 201, 0.75), rgba(255, 250, 240, 0.92))",
    backgroundSize: "100% 42rem",
    backgroundRepeat: "no-repeat",
    color: colors.muted,
    fontFamily: "Atkinson, sans-serif",
    fontSize: "19px",
    lineHeight: 1.75,
    textAlign: "left",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    "@media (max-width: 720px)": {
      fontSize: "18px",
    },
  },
  main: {
    width: "760px",
    maxWidth: "calc(100% - 2rem)",
    margin: "auto",
    padding: "4.5rem 1.25rem 5rem",
    "@media (max-width: 720px)": {
      maxWidth: "calc(100% - 1rem)",
      padding: "3rem 0.75rem 4rem",
    },
  },
  mainWide: {
    width: "960px",
  },
  heading: {
    margin: "0 0 0.6rem",
    color: colors.ink,
    fontFamily: '"Space Grotesk", Atkinson, sans-serif',
    fontWeight: 600,
    lineHeight: 1.18,
    letterSpacing: "-0.025em",
  },
  h1: {
    fontSize: "clamp(2.4rem, 7vw, 4.1rem)",
  },
  h2: {
    fontSize: "clamp(2rem, 5vw, 3.1rem)",
  },
  h3: {
    fontSize: "clamp(1.75rem, 4vw, 2.35rem)",
  },
  h4: {
    fontSize: "1.45rem",
  },
  h5: {
    fontSize: "1.15rem",
  },
  link: {
    color: colors.blue,
    textDecorationThickness: "0.08em",
    textUnderlineOffset: "0.16em",
    transitionProperty: "color",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease",
    ":hover": {
      color: colors.signal,
    },
  },
  header: {
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: "0 1em",
    backgroundColor: "rgba(255, 250, 240, 0.92)",
    borderBottom: "1px solid rgba(22, 32, 47, 0.1)",
    boxShadow: "0 8px 24px rgba(22, 32, 47, 0.05)",
  },
  headerAtmosphere: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "320px",
    height: "100%",
    objectFit: "cover",
    objectPosition: "right bottom",
    opacity: 0.28,
    mixBlendMode: "multiply",
    pointerEvents: "none",
    "@media (max-width: 720px)": {
      width: "230px",
      opacity: 0.2,
    },
  },
  nav: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navTitle: {
    margin: 0,
    fontSize: "1em",
    letterSpacing: "-0.04em",
  },
  navTitleLink: {
    padding: "1em 0.5em",
    color: colors.ink,
    fontFamily: '"Space Grotesk", Atkinson, sans-serif',
    fontWeight: 500,
    textDecoration: "none",
  },
  navLink: {
    display: "inline-block",
    padding: "1em 0.5em",
    color: colors.ink,
    borderBottom: "4px solid transparent",
    fontFamily: '"Space Grotesk", Atkinson, sans-serif',
    fontWeight: 500,
    textDecoration: "none",
    ":hover": {
      color: colors.signal,
    },
  },
  navLinkActive: {
    fontWeight: 700,
    borderBottomColor: colors.blue,
  },
  internalLinks: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1em",
  },
  headerSocialLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1em",
    "@media (max-width: 720px)": {
      display: "none",
    },
  },
  footerSocialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1em",
    marginTop: "1em",
  },
  socialLink: {
    display: "flex",
    color: colors.navy,
    textDecoration: "none",
    transitionProperty: "color",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease",
    ":hover": {
      color: colors.signal,
    },
  },
  socialIcon: {
    display: "block",
    width: "32px",
    height: "32px",
  },
  footer: {
    position: "relative",
    minHeight: "250px",
    overflow: "hidden",
    padding: "5rem 1rem 6rem",
    backgroundColor: colors.paperShadow,
    color: colors.navy,
    textAlign: "center",
  },
  footerAtmosphere: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "left bottom",
    opacity: 0.5,
    mixBlendMode: "multiply",
    pointerEvents: "none",
  },
  footerShade: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(244, 236, 217, 0.94), rgba(244, 236, 217, 0.25))",
    pointerEvents: "none",
  },
  footerContent: {
    position: "relative",
    zIndex: 1,
  },
  themeAsset: {
    display: "block",
    margin: "2.75rem auto",
    border: 0,
    mixBlendMode: "multiply",
    opacity: 0.72,
  },
  themeAssetWide: {
    width: "min(100%, 960px)",
    aspectRatio: "2 / 1",
    objectFit: "cover",
  },
  themeAssetSmall: {
    width: "min(34rem, 100%)",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    margin: "0 auto 3rem",
  },
  themeAssetInline: {
    width: "min(15rem, 52vw)",
    margin: "1rem 0 2.5rem auto",
  },
  prose: {
    width: "720px",
    maxWidth: "calc(100% - 2em)",
    margin: "auto",
    padding: "1em",
    color: colors.muted,
  },
  postTitle: {
    marginBottom: "1em",
    padding: "1em 0",
    textAlign: "center",
    lineHeight: 1,
  },
  postTitleHeading: {
    margin: "0 0 0.5em",
  },
  date: {
    marginBottom: "0.5em",
    color: colors.muted,
  },
  updated: {
    fontStyle: "italic",
  },
  blogList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    "@media (max-width: 720px)": {
      gap: "0.5em",
    },
  },
  blogItem: {
    width: "calc(50% - 1rem)",
    "@media (max-width: 720px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  blogItemFeatured: {
    width: "100%",
    marginBottom: "1rem",
    textAlign: "center",
    "@media (max-width: 720px)": {
      marginBottom: 0,
    },
  },
  blogItemLink: {
    display: "block",
    color: "inherit",
    textDecoration: "none",
  },
  blogTitle: {
    margin: 0,
    color: colors.ink,
    lineHeight: 1,
    transitionProperty: "color",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease",
  },
  blogTitleFeatured: {
    fontSize: "2.369rem",
    "@media (max-width: 720px)": {
      fontSize: "1.563em",
    },
  },
  blogItemLinkHover: {
    ":hover": {
      color: colors.signal,
    },
  },
  postRule: {
    margin: "2rem 0",
    border: 0,
    borderTop: "1px solid rgba(22, 32, 47, 0.16)",
  },
});
