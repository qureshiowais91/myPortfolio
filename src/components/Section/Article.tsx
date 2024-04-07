import { AuthorDetails } from '../UI/Blog/AuthorDetails';
import { BlogHeader } from '../UI/Blog/BlogHeader';
import { BlogText } from '../UI/Blog/BlogText';

export const Article = () => {
  return (
    <div>
      <AuthorDetails />
      <BlogHeader></BlogHeader>
      <BlogText />
    </div>
  );
};
