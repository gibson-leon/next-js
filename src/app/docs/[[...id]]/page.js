const CacheDocument = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Cache Document</h1>
      <p>ID Params: {JSON.stringify(id)}</p>
    </div>
  );
};

export default CacheDocument;