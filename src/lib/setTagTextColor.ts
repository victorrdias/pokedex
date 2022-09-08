export const setTagTextColor = (type: string) => {
  switch (type) {
    case "rock":
      return "#fff";
    case "fighting":
      return "#fff";
    case "poison":
      return "#fff";
    case "ghost":
      return "#fff";
    case "dragon":
      return "#fff";
    case "flying":
      return "#fff";
    default:
      return "black";
  }
};
