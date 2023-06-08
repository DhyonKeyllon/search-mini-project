export const handleLoadPosts = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => data);
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => data);

  const postsAndPhotos = await posts.map((post, index) => {
    return { ...post, cover: photos[index].url };
  });

  return postsAndPhotos;
};
