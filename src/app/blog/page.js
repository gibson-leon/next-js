



// const blogMain = async () => {




// //   const [data,setData] = useState();
// //   useEffect(() => { 
// //     fetchData()
// //   }, [])

// const getBlogs = async () => {

//     const result = await fetch("https://dummyjson.com/recipes");
//     const data = await result.json();
//     return data

// }

// const data = await getBlogs();
// console.log(data.recipes)
//     return (  
//         <>
//         <p>blog-main</p>
//     {
//         data.recipes.map((items)=>{
//             return <p key={items.id} >{items.name}</p>


//         })
//     }   
//     </>
//     );
// }

// export default blogMain;

const BlogMain = async () => {

    const getBlogs = async () => {
        const result = await fetch("https://dummyjson.com/recipes");
        const data = await result.json();
        return data
    }

    const data = await getBlogs();

    return (
        <>
            <p>blogs-main</p>
            {
                data.recipes.map((items) => {
                    return <p key={items.id}>{items.name}</p>
                })
            }
        </>
    )

}

export default BlogMain;




