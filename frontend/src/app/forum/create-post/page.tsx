import CreatePostForm from "@/components/forum/CreatePostForm";
import RootLayout from "@/layouts/RootLayout";

export default function CreatePost() {
  return (
    <RootLayout>
      <div>
        <h1 className="text-2xl xl:text-4xl font-bold mb-2">
          Start a New Discussion
        </h1>
        <p className="text-custom-foreground-muted text-lg">
          Share your thoughts, questions, or insights with the farming community
        </p>
      </div>
      <CreatePostForm />
    </RootLayout>
  );
}
