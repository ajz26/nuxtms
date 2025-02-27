import { decodeJwt, jwtVerify } from "jose";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("auth middleware");

  const token = getAuthToken(); // Supongamos que tienes una función para obtener el token

  if (!token) {
    return abortNavigation(
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized: No token provided",
        fatal: true,
      })
    );
  }

  try {
    const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

    const verify = await jwtVerify(token, secret);

    if (!verify) {
      throw new Error("Token verification failed");
    }

    // Puedes agregar más lógica aquí si es necesario
  } catch (error) {
    console.error("Error verifying token:", error);
    return abortNavigation(
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized: Invalid token",
        fatal: true,
      })
    );
  }
});

function getAuthToken() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdG9rZW4iOiJmVUQ4anNNMXlremJIUTBwYm1lZiIsImVtYWlsIjoidGlsb21vdG9yQGxlYWRjYXJzLmVzIiwibmFtZSI6IkFkbWluaXN0cmFkb3IifQ.t-V4ejnEVy6N9RSTOSVn-RenF_V4iplPyBqJZ47I4S8";

  return token;
}
