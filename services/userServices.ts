export const createUser = async (
  username: string,
  name: string,
  email: string,
  password: string
) => {
  let user = {};
  try {
    const res = await $fetch("api/users", {
      method: "POST",
      body: { username, name, email, password },
    });

    if (res) {
      useState("user").value = res;
      user = res;
    }
  } catch (error) {
    console.log("error:", error);
  }

  return user;
};

export const getUserByEmail = async (email: string) => {
  let user = {};
  try {
    const res = await $fetch("api/user", {
      method: "GET",
      query: { email },
    });
    if (res) {
      useState("user").value = res;
      user = res;
    }
  } catch (error) {
    console.log("error:", error);
  }

  return user;
};
