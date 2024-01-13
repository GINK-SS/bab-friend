import PostOption from '@_components/PostOption';
import PostContent from '@_components/PostContent';
import CommnetInput from '@_components/CommentInput';
import CommentDisplay from '@_components/CommentDisplay';

const PostView = () => {
  return (
    <>
      <PostOption />
      <PostContent />
      <CommnetInput />
      <CommentDisplay />
    </>
  );
};

export default PostView;
