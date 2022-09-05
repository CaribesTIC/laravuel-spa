export const example = async () => {
  return (await import("../../tests/data/data.json")).default;
}

export const updateUser = async (payload) => {  
  return "User updated.";
}
