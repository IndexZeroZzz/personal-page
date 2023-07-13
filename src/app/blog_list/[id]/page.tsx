import PostPreview from "@/app/components/post_preview";
import {getPosts} from "@/app/functions/get_data";

export default async function Page({ params }: { params: { id: string } }) {
    const posts = await getPosts(Number(params.id))
    return(
        <main className="p-8 flex flex-col">
          {posts}
        </main>
    )
}

