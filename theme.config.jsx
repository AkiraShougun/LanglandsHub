export default {
  logo: <span>LanglandsHub</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
  feedback: {
    content: null,
  },
  primaryHue: {
    dark: 180,
  },
  project: {
    link: "https://github.com/AkiraShougun/LanglandsHub",
  },
  editLink: {
    component: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/AkiraShougun" target="_blank">
          AkiraShougun
        </a>
        /
        <a href="https://github.com/Kensukeken" target="_blank">
          Kensukeken
        </a>
        . All rights reserved.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LanglandsHub" />
      <meta property="og:description" content="An math reference website." />
    </>
  ),
};
