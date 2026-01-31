export default function Home() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description:
        "Learn how to build fast and SEO-friendly websites using Next.js step by step.",
      author: "Admin",
      date: "Jan 15, 2026",
    },
    {
      id: 2,
      title: "Why Tailwind CSS is Awesome",
      description:
        "Tailwind CSS helps you build modern UI faster without writing custom CSS.",
      author: "Admin",
      date: "Jan 14, 2026",
    },
    {
      id: 3,
      title: "React vs Next.js",
      description:
        "Understand the key differences between React and Next.js with real examples.",
      author: "Admin",
      date: "Jan 12, 2026",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to our website 🚀
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn Next.js, React, Tailwind CSS, and Full-Stack development with
            simple explanations and real projects.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {blog.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>✍️ {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Section 3: Categories */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Explore Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Next.js", "React", "Tailwind CSS", "Full Stack"].map(
              (category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{category}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Read articles about {category}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>


    </>
  );
}
