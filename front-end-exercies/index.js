function onClick(color) {
  const colors = [
    "black",
    "blue",
    "grey",
    "green",
    "indigo",
    "ivory",
    "gold",
    "red",
    "cyan",
    "white",
    "pink",
    "lavendar",
    "coral",
    "orange",
    "brown",
    "khaki",
  ];
  const randomColor = Math.floor(Math.random() * colors.length);

  document.body.style.background = colors[randomColor];
}
