const getComments = async (movieId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments?item_id=${movieId}`);
  const myJson = await response.json(); // extract JSON from the http respo

  return myJson;
};

export default getComments;
