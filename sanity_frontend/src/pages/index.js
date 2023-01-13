import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

export default function Home({ blogs }) {
  const client = createClient({
    projectId: "pmrtlfbu",
    dataset: "production",
    useCdn: false,
  });
  console.log("blogs", blogs);

  const builder = imageUrlBuilder(client);

  return (
    <>
      {blogs.map((a) => (
        <>
          <Link key={a.slug} href={"/blog/" + a.slug.current}>
            <div>
              <div className="bg-gray-400 text-red-700">{a.title}</div>
              <img src={builder.image(a.blogImage)} width="50px" />
            </div>
          </Link>
        </>
      ))}
      {/* {a.content && <PortableText
            content={a.content}
            projectId="pmrtlfbu"
            dataset="production"
            serializers={{
              h1: (props) => <h1 style={{ color: "red" }} {...props} />,
              li: ({ children }) => (
                <li className="special-list-item">{children}</li>
              ),
            }}
          />} */}
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "pmrtlfbu",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
