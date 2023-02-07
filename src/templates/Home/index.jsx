import { useEffect, useState } from "react";

import { handleLoadPosts } from "../../utils/load-posts";

import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { PostsComponent } from "../../components/Posts";

import "./styles.css";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = async () => {
    const postsAndPhotos = await handleLoadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  };

  const handleLoadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChangeValue = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <InputComponent
          searchValue={searchValue}
          handleChangeValue={handleChangeValue}
          placeholder={"Type your search"}
        />
      </div>
      {filteredPosts.length === 0 && (
        <p>Não existem posts com o valor pesquisado</p>
      )}
      <PostsComponent posts={filteredPosts} />
      {!searchValue && (
        <div className="button-container">
          <ButtonComponent
            onClick={handleLoadMorePosts}
            disabled={noMorePosts}
            text="Load more posts"
          />
        </div>
      )}
    </section>
  );
}
