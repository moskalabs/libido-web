export const identifyQuerySort = categorySort => {
  let verifyQuerySort = "";
  switch (categorySort) {
    case "libido":
      verifyQuerySort = "customize";
      break;
    case "trending":
      verifyQuerySort = "popular";
      break;
    default:
      verifyQuerySort = "customize";
      break;
  }

  return verifyQuerySort;
};
