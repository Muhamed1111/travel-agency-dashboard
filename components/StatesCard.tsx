import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {cn} from "./NavItems";

export const calculateTrendPercentage = (
  countOfThisMonth: number,
  countOfLastMonth: number
): TrendResult => {
  if (countOfLastMonth === 0) {
    return countOfThisMonth === 0
      ? { trend: "no change", percentage: 0 }
      : { trend: "increment", percentage: 100 };
  }

  const change = countOfThisMonth - countOfLastMonth;
  const percentage = Math.abs((change / countOfLastMonth) * 100);

  if (change > 0) {
    return { trend: "increment", percentage };
  } else if (change < 0) {
    return { trend: "decrement", percentage };
  } else {
    return { trend: "no change", percentage: 0 };
  }
};

const StatesCard= ({headerTitle
                       ,total
                       ,lastMonthCount
                       ,currentMonthCount}: StatsCard) => {
    const {trend,percentage} = calculateTrendPercentage(currentMonthCount,lastMonthCount);
    const isDecrement = trend ==='decrement';

    return(
        <article className="stats-card">
            <h3 className="text-base font-medium">
                {headerTitle}
            </h3>
            <div className="content">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-semibold">
                        {total}
                    </h2>
                    <div className="flex items-center gap-2">
                        <figure className="flex items-center gap-1">
                            <img
                            src={`/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`}
                            className="size-5" alt="arrow"
                            />
                            <figcaption className={cn('text-sm font-medium', isDecrement ? 'text-red-500' : 'text-success-700')}>
                                {Math.round(percentage)}%
                            </figcaption>
                        </figure>
                        <p className="text-sm font-medium text-gray-100 truncate">
                            vs last month
                        </p>
                    </div>
                </div>
                <img
                src={`/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'} `}
                className="xl:w-32 w-full h-full md:h-32 xl:h-full"
                alt="trend graph" />
            </div>
        </article>
    )
}
  export default StatesCard;