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
        . All rights reserved.
      </span>
    ),
  },
};
