'use client';

import style from './trendSection.module.css';
import Trend from './Trend';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '../_lib/getTrends';
import { Hashtag } from '@/model/Hashtag';
type Props = {
    session: Session | null;
    // session은 Session타입이 next-auth에 따로 존재하므로 import해서 사용할 것
};
export default function TrendSection({ session }: Props) {
    const { data } = useQuery<Hashtag[]>({
        queryKey: ['trends'],
        queryFn: getTrends,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
        enabled: !!session?.user,
    });
    const pathname = usePathname();
    if (pathname === '/explore') return null;
    if (session?.user) {
        return (
            <div className={style.trendBg}>
                <div className={style.trend}>
                    <h3>나를 위한 트렌드</h3>
                    {data?.map((trend) => (
                        <Trend trend={trend} key={trend.title} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className={style.trendBg}>
            <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
        </div>
    );
}
