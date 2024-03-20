export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (e: unknown): string => {
  let message: string = "An unknown error occurred";
  if (e instanceof Error) {
    message = e.message;
  } else if (e && typeof e === "object" && "message" in e) {
    message = String(e.message);
  } else if (typeof e === "string") {
    message = e;
  }
  return message;
};
