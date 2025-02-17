export const authConfig = {
    providers:[],
    pages: {
      //if not authenticate will redirect to login page
      signIn: "/login",
    },
  
    //if already log in will go to home page  
    callbacks: {
      authorized({ auth, request }) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };
  