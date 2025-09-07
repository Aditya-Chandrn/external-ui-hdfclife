import FeedbackForm from "./apps/FeedbackForm";
import ImageSlideshow from "./apps/ImageSlideshow";
import TodoList from "./apps/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-12">
      
      {/* Feedback Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Feedback Form</h2>
        <FeedbackForm />
      </section>

      {/* Image Slideshow */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Image Slideshow</h2>
        <ImageSlideshow />
      </section>

      {/* Todo List */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Todo List</h2>
        <TodoList />
      </section>
    </div>
  );
}
