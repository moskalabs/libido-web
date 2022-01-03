export const checkPasswordPattern = currentInputPassword => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (passwordRegex.test(currentInputPassword)) return true;
  else return false;
};

export const sortCheckInputValue = (currentCheckButtonType, form) => {
  let checkInputValue;
  switch (currentCheckButtonType) {
    case "nicknameCheckButton":
      checkInputValue = {
        currentCheckInputAPI: "nicknamecheck",
        currentCheckKey: "nickname",
        currentCheckInputValue: form.nickname,
      };
      break;
    case "idCheckButton":
      checkInputValue = {
        currentCheckInputAPI: "emailcheck",
        currentCheckKey: "email",
        currentCheckInputValue: form.email,
      };
      break;
    default:
      break;
  }
  return checkInputValue;
};
