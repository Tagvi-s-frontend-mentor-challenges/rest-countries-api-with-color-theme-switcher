const themes = {
  dark: {
    name: "dark",
    input: "white",
    element: "hsl(209,23%, 22%)",
    bg: "hsl(207, 26%, 17%)",
    text: "white",
  },
  light: {
    name: "light",
    input: "hsl(0, 0%, 52%)",
    element: "white",
    bg: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
  },
};

export type Theme = typeof themes["dark" | "light"];
export default themes;
