export default function CategoryPage({ params }) {
    const { slug } = params;

    const formattedName = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-[#8B1E1E]">
                {formattedName}
            </h1>
            <p className="text-gray-600 mt-2">Showing products for {formattedName}
            </p>
        </div>
    );
}