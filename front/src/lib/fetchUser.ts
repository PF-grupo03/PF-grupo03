import { ILoginUser, IUser } from "@/types";

export const postSignup = async (user: Omit<IUser, "id">) => {
  const response = await fetch(
    "https://pf-grupo03-back.onrender.com/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  console.log("Response status:", response.status);

  let data;
  try {
    data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    throw new Error("Failed to parse server response.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Error registering user.");
  }

  return data;
};

export const postSignin = async (credentials: ILoginUser) => {
  const response = await fetch(
    "https://pf-grupo03-back.onrender.com/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error Loging user.");
  }
  const data = await response.json();
  return data;
};

export const getUserOrders = async (token: string) => {
  const response = await fetch("https://m4f.onrender.com/users/orders", {
    headers: {
      Authorization: `${token}`,
    },
  });

  const data = await response.json();
  return data;
};
