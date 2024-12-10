const { updateTokensUser } = require("./userRequest");

export const restarTokens = async ({ planName, userID }) => {
  if (planName === "Free") {
    return await updateTokensUser({ userID });
  }
};
