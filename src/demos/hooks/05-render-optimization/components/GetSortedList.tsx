import { memo, useMemo } from 'react';

const arr: number[] = Array(200000)
  .fill(0)
  .map(() => Math.floor(Math.random() * 100 + 1));

type props = { length?: number; filterFn: (arr: number[]) => number[] };

const GetSortedList = ({ length = 100, filterFn }: props) => {
  const sortedArr = useMemo(() => {
    return arr.sort((a, b) => a - b);
  }, []);

  // Without useMemo hook
  // const newArr = () => {
  //   console.log('Rendering...');
  //   return arr.sort((a, b) => a - b);
  // };
  // const sortedArr = newArr();

  const filteredList = useMemo(
    () => filterFn(sortedArr),
    [filterFn, sortedArr]
  );

  const arrToString =
    filteredList
      .slice(0, length)
      .map((n) => n.toString().padStart(3, '0'))
      .join(', ') + '...';

  return (
    <div className="flex flex-col gap-2 *:rounded-xl *:shadow *:py-2 *:px-4 *:bg-bg-300">
      <div className="grow text-lg">
        <p>Total list length: {sortedArr.length}</p>
        <p>Given length: {length}</p>
      </div>
      <div className="font-mono">
        <p>{arrToString}</p>
      </div>
    </div>
  );
};

export default memo(GetSortedList);
