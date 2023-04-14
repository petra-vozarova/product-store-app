const DUMMYJSON_URL = "https://dummyjson.com/products?limit=0";

const populateData = async () => {
  // calling DummyJSONAPI and fetching all products,
  // terminating the run if any error occurs
  try {
    const response = await fetch(DUMMYJSON_URL);
    const products = await response.json();
    return products;
  } catch (error) {
    throw new Error(`Problem with loading products data: ${error}`);
  }
};

export default populateData;
