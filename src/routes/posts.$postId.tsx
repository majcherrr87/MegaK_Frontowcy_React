import { createFileRoute } from '@tanstack/react-router'

const SinglePost = () => {
	const { postId } = Route.useParams()
	return <h3>Post ID {postId}</h3>
}

export const Route = createFileRoute('/posts/$postId')({
	component: SinglePost,
})
