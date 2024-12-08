import './globals.css';
import { Metadata } from 'next';
import { MSWComponent } from './_component/MSWComponent';
export const metedata: Metadata = {
    title: '스터디',
    description: '넥스트 마스터!!',
};

type Props = {
    children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <MSWComponent />
                {children}
            </body>
        </html>
    );
}
