const fetchPageHTML = async (url: string): Promise<string> => {
  try {
    const res = await fetch(`/api/scrape?url=${url}`);
    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Error fetching page HTML:", error);
    throw new Error("Failed to fetch page HTML");
  }
};

const prepareDOM = (html: string): Document => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc;
};

export const getPageDocument = async (url: string): Promise<Document> => {
  const pageHTML = await fetchPageHTML(url);
  const pageDOM = prepareDOM(pageHTML);
  return pageDOM;
};
