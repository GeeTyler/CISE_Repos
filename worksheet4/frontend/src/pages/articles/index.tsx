// pages/articles/index.tsx

import { GetStaticProps, NextPage } from "next";
import axios from 'axios';
import SortableTable from "../../components/table/SortableTable";
import { ArticlesInterface } from "../../utils/types"; // Import the type from where it's defined

type ArticlesProps = {
  articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      <SortableTable headers={headers} data={articles} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
  try {
    // Fetch articles from the backend
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`);
    const articles: ArticlesInterface[] = response.data;

    return {
      props: {
        articles,
      },
      revalidate: 10, // Optional: Regenerate the page every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default Articles;
