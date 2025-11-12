import { PostList } from "@/components/PostList";

export default async function PageNumberRoute({ searchParams }) {
  return (
    <div>
      <PostList searchParams={searchParams} currentPage={parseInt(searchParams.pageNumber, 10)} />
    </div>
  );
}
