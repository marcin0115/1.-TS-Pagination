// 1) Stwórz funkcję paginateArray, która przyjmuje jako 1 argument tablicę, a jako 2 argument obiekt settings z następującymi kluczami :
//   a) „actualPageIndex” - numer strony.
//   b) „entriesOnPage” – ilośc obiektów na pojedynczej stronie.
//2) Funkcja zwraca entriesOnSelectedPage, który jest arrayem podzielonym według ustawień z settings.

interface Sett {
  actualPageIdx: number;
  entriesOnPage: number;
}

const settings: Sett = { actualPageIdx: 2, entriesOnPage: 2 };
const data: number[] = [1, 2, 3, 4, 5, 6];

const paginateArray = (
  dataEntries: number[],
  { actualPageIdx, entriesOnPage }: Sett
) => {
  const start = actualPageIdx * entriesOnPage - entriesOnPage;
  const end = start + entriesOnPage;

  const entriesOnSelectedPage: number[] = dataEntries.slice(start, end);
  return entriesOnSelectedPage;
};

const result: number[] = paginateArray(data, settings);
