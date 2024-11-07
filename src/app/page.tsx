import Link from 'next/link';
import blogPosts from '@/app/data'; // Ensure the correct path


const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Blog</h1>
      <ul className="space-y-4">
        {Object.entries(blogPosts).map(([slug, post]) => (
          <li key={slug} className="border p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
            <Link href={`/blog/${slug}`} className="text-blue-500 hover:underline mt-2 block">
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
