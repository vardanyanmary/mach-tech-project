import cls from './CentralSections.module.scss';
import star from '../../../shared/assets/Vector (8).svg';
import { useState } from 'react';
import { PasswordPart } from '../../PasswordPart/PasswordPart';

interface CentralSectionProps {
    selectedFolder: any;
}

export const CentralSection = ({ selectedFolder }: CentralSectionProps) => {
    const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>('ascending');
    const [isSorted, setIsSorted] = useState(false);

    const sortedContent = selectedFolder
        ? [...selectedFolder.content].sort((a: string, b: string) => {
            if (sortOrder === 'ascending') {
                return a.localeCompare(b);
            } else {
                return b.localeCompare(a);
            }
        })
        : [];

    const handleSortClick = () => {
        setIsSorted(!isSorted);
    };

    return (
        <section className={cls.CentralSection}>
            <div className={cls.firstLine}>
                <span>
                    Название
                    <span className={cls.sort} onClick={handleSortClick}>
                        {sortOrder === 'ascending' ? ' ↓' : ' ↑'}
                    </span>
                </span>
                <span>URL</span>
                <img src={star} alt="" />
            </div>

            {selectedFolder && (
                <div>
                    {!isSorted &&
                        selectedFolder.content.map((item: string, index: number) => (
                            <PasswordPart key={index} name={item} url={`https://www.site${index + 1}.com`} />
                        ))}

                    {isSorted &&
                        sortedContent.map((item: string, index: number) => (
                            <PasswordPart key={index} name={item} url={`https://www.site${index + 1}.com`} />
                        ))}
                </div>
            )}
        </section>
    );
};