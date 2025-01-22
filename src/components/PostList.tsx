import { List, Card } from 'antd';
import { FC } from 'react';
import '../assets/styles/PostsList.css'; // Import the CSS file

interface Post {
  title: string;
  body: string;
}

interface PostsListProps {
  posts: Post[];
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <List
      grid={{ gutter: 16, column: 1, xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
      dataSource={posts}
      renderItem={post => (
        <List.Item>
          <Card title={post.title} className="responsive-card">
            <p className="text-gray-700 text-sm md:text-base break-words">{post.body}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PostsList;
