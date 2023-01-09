import getHandler from "../handlers/getHandler";
import postHandler from "../handlers/postHandler";
import Toaster from "../utils/toaster";
import catchAsync from "../managers/catchAsync";
import envHandler from "../managers/envHandler";

// const URL = `${envHandler("REACT_APP_backend_URL")}`;

const URL = "";

export const getGames = catchAsync(async () => {
  const res = await getHandler(`${URL}/game`, true);
  if (res.status === 0) Toaster.error(res.data.message);
});

export const startGame = catchAsync(async (formData) => {
  const res = await postHandler(`${URL}/startGame`, formData, true);
  if (res.status === 1) {
    Toaster.success("Game Stated!");
    // Redirect to Game Page
  } else Toaster.error(res.data.message);
});

export const playGame = catchAsync(async (formData) => {
  const res = await postHandler(`${URL}/playGame`, formData, true);
  if (res.status === 1) {
    if (res.data.win) Toaster.success("You Won The Game!");
    else if (res.data.tie) Toaster.info("It is a Tie.");
  } else Toaster.error(res.data.message);
});
