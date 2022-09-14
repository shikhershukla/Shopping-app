import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

function ShopPage() {
  // const location = useLocation();
  // const params = useParams();
  // console.log(params);
  // console.log(location)
  //   const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("collectionId")
  // console.log(searchParams);
  // const path = getRoutePath(location, params);
  // console.log(location.pathname)
  // const routes = [{ path: `${location}/:id` }];
  // const [{ route }] = matchRoutes(routes, location);
  // console.log(route);
  // const params = useParams();
  // // const path = getCurrentPath(location, params);
  // // console.log(path);
  // console.log(params);
  // console.log(location);
  // console.log(match.params.categoryId);
  // const { collectionId } = useParams();
  // console.log(collectionId)

  return (
    <div>
      <Routes>
        {/* <Route exact path={`${location.pathname}`} element={<CollectionsOverview />} /> */}
        <Route exact path="/" element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
