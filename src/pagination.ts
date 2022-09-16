const data = [1, 2, 3, 4, 5, 6];
const settings = { actualPageIdx: 2, entriesOnPage: 2 };

const paginateArray = (
  dataEntries: number[],
  { actualPageIdx, entriesOnPage } = settings
) => {
  const start = actualPageIdx * entriesOnPage - entriesOnPage;
  const end = start + entriesOnPage;

  const entriesOnSelectedPage = dataEntries.slice(start, end);
  return entriesOnSelectedPage;
};
const result = paginateArray(data, settings);
