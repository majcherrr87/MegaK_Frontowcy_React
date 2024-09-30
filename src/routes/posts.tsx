import { createFileRoute, Outlet } from '@tanstack/react-router'

const Posts = () => {
	return (
		<div>
			<h2>Posts</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
				recusandae reiciendis perferendis eos eveniet illum, praesentium quae
				voluptates rem, quo veritatis neque maxime sequi, aliquid libero velit
				tempora impedit culpa!
			</p>
			<Outlet />
		</div>
	)
}

export const Route = createFileRoute('/posts')({
	component: Posts,
})
