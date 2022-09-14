import React from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

// import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

function CollectionPage({ state }) {
  // console.log(props);
  // console.log(collectionId);
  // console.log(state);
  // console.log(selectCollection);
  // const collection = selectCollection(collectionId);
  // console.log(collection);
  // const x = selectCollection(collectionId)(state);
  // console.log(x)
  // const collectionDetails = selectCollection(collectionId)(colleciton);
  // console.log(collectionDetails);
  // const name = state.shop.find((collection) => collection.id === collectionId);
  // console.log(name);
  // for(int i = 0; i < state.shop.length; i++) {
  //   console.log(state.shop[i]);
  // }
  // const id = COLLECTION_ID_MAP.find(coll => coll === collectionId);
  // data = state.shop.collections.find((collection) => );
  // console.log(name.routeName);
  // const name = {routeName: "hats"}
  // const name = (state.shop) =>
  //     (collections.find(
  //       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
  //     ));

  // const COLLECTION_ID_MAP = {
  //   hats: 1,
  //   sneakers: 2,
  //   jackets: 3,
  //   womens: 4,
  //   mens: 5,
  // };
  // const id = COLLECTION_ID_MAP[collectionId];
  // let collection = state.shop.collections.find(
  //   (collection) => collection.id === id
  // );

  const { collectionId } = useParams();
  const collection = state.shop.collections[collectionId];

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  // const { collectionId } = useParams();
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(CollectionPage);
