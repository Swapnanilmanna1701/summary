import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ["/", "/premium"],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};