// // import jwt, { Secret } from "jsonwebtoken";
// // import { NextFunction, Request, Response } from "express";

// // const auth =
// //   (...requireRoles: string[]) =>
// //   async (req: Request, res: Response, next: NextFunction) => {
// //     try {
// //       // Get authorization token
// //       const token = req.headers.authorization;
// //       if (!token) {
// //         throw new Error("Error in authorization");
// //       }

// //       //Verify token
// //       const verifyToken = jwt.verifyToken(token, process.env.JWT - SECRET);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// // export default auth;

// import { NextFunction, Request } from "express";
// import { verify } from "jsonwebtoken";

// const verifyJWTMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // Typically, tokens are sent as a Bearer token in the Authorization header
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

// //   if (!token) {
// //     return res.status(401).json({ message: "Token not provided" });
// //   }

// //   try {
// //     const decodedToken = verify(token, process.env.JWT_SECRET);

//     // Optionally, if you want to pass the decoded payload to your route handlers:
//     req.user = decodedToken;

//     next(); // Pass control to the next middleware/route handler
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     res.status(403).json({ message: "Token is not valid" });
//   }
// };

// export default verifyJWTMiddleware;
