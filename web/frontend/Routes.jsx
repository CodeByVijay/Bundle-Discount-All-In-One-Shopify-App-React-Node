import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import BundleOffers from "./components/BundleOffers";
import Dashboard from "./components/Dashboard";
import BundleOffer from "./components/offerPages/BundleOffer";
import VolumeOffer from "./components/offerPages/VolumeOffer";
import MixAndMatchOffer from "./components/offerPages/MixAndMatchOffer";
import CartGoalOffer from "./components/offerPages/CartGoalOffer";

/**
 * File-based routing.
 * @desc File-based routing that uses React Router under the hood.
 * To create a new route create a new .jsx file in `/pages` with a default export.
 *
 * Some examples:
 * * `/pages/index.jsx` matches `/`
 * * `/pages/blog/[id].jsx` matches `/blog/123`
 * * `/pages/[...catchAll].jsx` matches any URL not explicitly matched
 *
 * @param {object} pages value of import.meta.globEager(). See https://vitejs.dev/guide/features.html#glob-import
 *
 * @return {Routes} `<Routes/>` from React Router, with a `<Route/>` for each file in `pages`
 */
export default function Routes({ pages }) {
  const routes = useRoutes(pages);
  const routeComponents = routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const NotFound = routes.find(({ path }) => path === "/notFound").component;

  return (
    <ReactRouterRoutes>
      {routeComponents}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Dashboard />} />
      <Route exact path="/offers" element={<BundleOffers />} />
      <Route exact path="/offers/bundle-offer" element={<BundleOffer />} />
      <Route exact path="/offers/volume-offer" element={<VolumeOffer />} />
      <Route
        exact
        path="/offers/mix-and-match-offer"
        element={<MixAndMatchOffer />}
      />
      <Route exact path="/offers/cart-goal-offer" element={<CartGoalOffer />} />
    </ReactRouterRoutes>
  );
}

function useRoutes(pages) {
  const routes = Object.keys(pages)
    .map((key) => {
      let path = key
        .replace("./pages", "")
        .replace(/\.(t|j)sx?$/, "")
        /**
         * Replace /index with /
         */
        .replace(/\/index$/i, "/")
        /**
         * Only lowercase the first letter. This allows the developer to use camelCase
         * dynamic paths while ensuring their standard routes are normalized to lowercase.
         */
        .replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase())
        /**
         * Convert /[handle].jsx and /[...handle].jsx to /:handle.jsx for react-router-dom
         */
        .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`);

      if (path.endsWith("/") && path !== "/") {
        path = path.substring(0, path.length - 1);
      }

      if (!pages[key].default) {
        console.warn(`${key} doesn't export a default React component`);
      }

      return {
        path,
        component: pages[key].default,
      };
    })
    .filter((route) => route.component);

  return routes;
}
