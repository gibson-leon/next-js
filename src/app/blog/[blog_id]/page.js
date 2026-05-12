const getAllRecipe = async () => {
  try {
    const result = await fetch("https://dummyjson.com/recipes",
      {
        next: { revalidate: 60 }
      }
    );
    const data = await result.json();
    return data
  } catch (err) {
    console.log(err)
  }

}

const getReceipeByID = async (id) => {

  try {
    const result = await fetch(`https://dummyjson.com/recipes/${id}`, {
      next: { revalidate: 60 }
    });
    const data = await result.json();
    return data
  } catch (err) {
    console.log(err)
  }
}


export const generateStaticParams = async () => {
  const recipes = await getAllRecipe();
  return recipes.recipes.map((items) => ({ blog_id: String(items.id) }))
};

const BlogDetails = async ({ params }) => {

  const { blog_id } = await params;
  const result = await getReceipeByID(blog_id);
  console.log(result)
  return <p> Hello - {blog_id} </p>
}


export default BlogDetails;


