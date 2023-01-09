import postHandler from "../handlers/postHandler.js";
import Toaster from "../utils/toaster.js";
import catchAsync from "../managers/catchAsync.js";
import envHandler from "../managers/envHandler.js";

// const URL = `${envHandler("REACT_APP_backend_URL")}`;

const URL = "";

export const signup = catchAsync(async (formData) => {
  const res = await postHandler(`${URL}/signup`, formData, false);
  if (res.status === 1) {
    Toaster.success("Account Created");
    // Redirect to Home Page
  } else Toaster.error(res.data.message);
});

export const login = catchAsync(async (formData) => {
  const res = await postHandler(`${URL}/login`, formData, false);
  if (res.status === 1) {
    Toaster.success("Logged In!");
    // Redirect to Home Page
  } else Toaster.error(res.data.message);
});
