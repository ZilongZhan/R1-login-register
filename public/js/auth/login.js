export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  let areValidCredentials;
  const isCorrectUsername = username === storedUsername;
  const isCorrectPassword = password === storedPassword;

  areValidCredentials = isCorrectUsername && isCorrectPassword;

  return areValidCredentials;
};
