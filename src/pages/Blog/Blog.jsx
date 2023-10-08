import BlogContent from "./BlogContent";
import BlogGallery from "./BlogGallery";

const Blog = () => {
  return (
    <div>
      <div className=" bg-[url('https://i.ibb.co/gthHM42/blog.png')] bg-cover bg-center rounded-lg hero h-[30vh] md:h-[50vh] lg:h-[80vh]">
        <div className="hero-overlay bg-opacity-60 h-[30vh] md:h-[50vh] lg:h-[80vh] flex justify-center items-center rounded-xl">
          <h1 className="text-7xl text-white">Blog</h1>
        </div>
      </div>
      <BlogGallery />
      <BlogContent />
    </div>
  );
};

export default Blog;
