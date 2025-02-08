export const isValidUsername = (username) => {
  let isValid;
  const minNameLength = 5;

  isValid = username.length >= minNameLength;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;
  const minPasswordLength = 8;
  const hasUppercaseLetters = /([A-Z]|[À-Ü])/;
  const hasNumbers = /[0-9]/;

  isValid =
    hasUppercaseLetters.test(password) &&
    hasNumbers.test(password) &&
    password.length >= minPasswordLength;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;

  isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;
  const adultAge = 18;

  isAdult = age >= adultAge;

  return isAdult;
};
