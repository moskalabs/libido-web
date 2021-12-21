export const bindingCategoryToContents = (
  categorySort,
  curContents,
  curRooms
) => {
  const firstCategoryName =
    categorySort === "libido" ? "맞춤형 추천 영상" : "인기영상";
  const secondeCategoryName =
    categorySort === "libido" ? "맞춤 스트리밍" : "인기 STREAMING";

  const firstContents = {
    category: firstCategoryName,
    contents: curContents,
  };
  const secondContents = {
    category: secondeCategoryName,
    contents: curRooms,
  };

  const joinContents = [firstContents, secondContents];
  return joinContents;
};
