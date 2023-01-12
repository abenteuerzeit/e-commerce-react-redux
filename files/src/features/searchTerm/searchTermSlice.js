const initialSearchTerm = "";
export const searchTermReducer = (
  searchTerm = initialSearchTerm,
  action
  ) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return action.payload;
    default:
      return searchTerm;
  }
};

export const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
    payload: "",
  };
};

export const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};
