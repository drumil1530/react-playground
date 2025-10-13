import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchApi = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<Post[]>(
          'https://jsonplaceholder.typicode.com/posts?userId=1'
        );
        setPosts(res.data);
      } catch (error) {
        setError('Failed to fetch posts');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-5 rounded-2xl shadow-xl flex flex-col w-full">
      <h1 className="text-3xl text-blue-500 font-semibold">Posts</h1>
      <ul>
        {(showAll ? posts : posts.slice(0, 4)).map((post) => (
          <li
            key={post.id}
            className="py-2 px-3 my-1 rounded-xl border-2 shadow-md border-gray-300"
          >
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="self-end">
        <Button
          text={
            showAll ? (
              <>
                <i className="ri-subtract-line"></i> Less
              </>
            ) : (
              <>
                <i className="ri-add-line"></i> More
              </>
            )
          }
          radius='xl'
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};

export default FetchApi;
