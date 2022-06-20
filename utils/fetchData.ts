export async function fetchData(
  url: string,
  retries: number = 3
): Promise<any | void> {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    if (retries) {
      console.log("Trying again...");
      return await fetchData(url, retries - 1);
    }
  }
}
export async function fetchMultiple(
  urls: string[],
  retries: number = 3
): Promise<any[] | void> {
  try {
    return await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
  } catch (error) {
    console.error(error);
    if (retries) {
      console.log("Trying again...");
      return await fetchMultiple(urls, retries - 1);
    }
  }
}
