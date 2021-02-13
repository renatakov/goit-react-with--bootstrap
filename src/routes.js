// статистический импорт
// import { Home, About, Contacts } from "./pages";

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     component: Home,
//   },
//   {
//     path: "/about",
//     exact: true,
//     component: About,
//   },
//   {
//     path: "/contacts",
//     exact: true,
//     component: Contacts,
//   },
// ];

// export default routes;

// динамический импорт
// const a = import("./pages/Home").then((module) => {
//   console.log(module)
//   return module
// });
// console.log(a);

// // первый способ динамического импорта

// import asyncComponent from "./components/hoc/asyncComponent";

// const AsyncComponentHome = asyncComponent(() => {
//   return import("./pages/Home");
// });

// const AsyncComponentAbout = asyncComponent(() => {
//   return import("./pages/About");
// });

// const AsyncComponentContacts = asyncComponent(() => {
//   return import("./pages/Contacts");
// });

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     component: AsyncComponentHome,
//   },
//   {
//     path: "/about",
//     exact: true,
//     component: AsyncComponentAbout,
//   },
//   {
//     path: "/contacts",
//     exact: true,
//     component: AsyncComponentContacts,
//   },
// ];
// export default routes;



// // второй способ динамического импорта

// import asyncComponent from "./components/hoc/asyncComponent";

// const AsyncComponentHome = asyncComponent(() => {
//   return import("./pages/Home");
// });

// const AsyncComponentAbout = asyncComponent(() => {
//   return import("./pages/About");
// });

// const AsyncComponentContacts = asyncComponent(() => {
//   return import("./pages/Contacts");
// });

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     component: asyncComponent(() => {
//       return import("./pages/Home");
//     }),
//   },
//   {
//     path: "/about",
//     exact: true,
//     component: asyncComponent(() => {
//       return import("./pages/About");
//     }),
//   },
//   {
//     path: "/contacts",
//     exact: true,
//     component: asyncComponent(() => {
//       return import("./pages/Contacts");
//     }),
//   },
// ];
// export default routes;

// третий способ динамического импорта

import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => {
      return import("./pages/Home");
    }),
  },
  {
    path: "/about",
    exact: true,
    component: lazy(() => {
      return import("./pages/About");
    }),
  },
  {
    path: "/contacts",
    exact: true,
    component: lazy(() => {
      return import("./pages/Contacts");
    }),
  },
];
export default routes;