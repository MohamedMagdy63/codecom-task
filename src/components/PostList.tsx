import { List, Card } from 'antd';
import { FC } from 'react';

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
      grid={{ gutter: 16, column: 1 }}
      dataSource={posts}
      renderItem={post => (
        <List.Item>
          <Card title={post.title}>
            {post.body}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PostsList;
