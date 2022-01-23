export const ROUTES = [
    {
        path: '/login',
        component: "Login",
        isPrivate: false,
    },
    {
        path: '/favorites',
        component: "Favorites",
        isPrivate: true,
    },
    // {
    //     path: '/leaderboard',
    //     component: "Leaderboard",
    //     isPrivate: false,
    // },
    {
        path: '/*',
        component: "NotFound",
        isPrivate: false,
    },
    {
        path: '/',
        component: "Home",
        isPrivate: false,
    },
    // {
    //     path: '/games/',
    //     component: "Game",
    //     isPrivate: true,
    // },
];