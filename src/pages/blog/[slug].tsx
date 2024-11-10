import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import blogPosts from '@/app/data'; // Adjust the path as needed
import { useRouter } from 'next/router'; // Import useRouter for navigation
import '../../styles/globals.css';

interface Post {
  title: string;
  content: string;
}

interface PostProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogPosts).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Cast `params?.slug` to a type that matches the keys of `blogPosts`
  const slug = params?.slug as keyof typeof blogPosts;
  const post = blogPosts[slug];

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const BlogPost: React.FC<PostProps> = ({ post }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const router = useRouter(); // Initialize the router for navigation

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleBack = () => {
    router.push('/'); // Navigate to the homepage
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 flex flex-col justify-center items-center py-6">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <article className="p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">{post.title}</h1>
          <p className="text-lg text-gray-800 leading-relaxed">{post.content}</p>
        </article>

        {/* Back Button */}
        <div className="flex justify-start mb-4">
          <button
            onClick={handleBack}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>

        <section className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <ul className="space-y-2 mb-4">
            {comments.map((c, index) => (
              <li key={index} className="border p-2 rounded shadow-sm bg-gray-50 flex justify-between items-center">
                <span>{c}</span>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="border p-2 w-full rounded mb-2"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost;
