
import { PageHeader } from "@/components/ui/PageHeader";
import { StoryForm } from "../your-story/_components/StoryForm";


export default function MyStoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="My Story"
        description="Your private space to document your journey. You control who sees it."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
           <StoryForm />
        </div>
        <div className="md:col-span-2">
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full border-gray-300">
                <h3 className="text-xl font-semibold text-gray-500">
                    Your Submitted Stories
                </h3>
                <p className="text-gray-500">
                    Once you submit a story, it will be shared on the Community Stories page. This space will later show a list of just your own stories.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
