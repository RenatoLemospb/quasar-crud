import UseApi from "src/composables/UseApi";
export default function postsService() {
  const { list, post, update, remove, getById } = UseApi("posts");

  return {
    list,
    post,
    update,
    remove,
    getById,
  };
}
