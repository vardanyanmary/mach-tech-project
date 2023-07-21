import cls from './CentralSections.module.scss';
import star from '../../../shared/assets/Vector (8).svg';
import addPassword from '../../../shared/assets/добавление (1).svg'
import { useState } from 'react';
import { PasswordPart } from './PasswordPart/PasswordPart';

interface CentralSectionProps {
    selectedFolder: {
        id: number;
        name: string;
        content: string[];
        url: string[];
    } | null;
}

export const CentralSection = ({ selectedFolder }: CentralSectionProps) => {
    const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>('ascending');
    const [isSorted, setIsSorted] = useState(false);

    const sortedContent = selectedFolder
        ? selectedFolder.content.map((item, index) => ({
            name: item,
            url: selectedFolder.url[index],
        })).sort((a, b) => {
            if (sortOrder === 'ascending') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
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
                            <PasswordPart key={index} name={item} url={selectedFolder.url[index]} />
                        ))}

                    {isSorted &&
                        sortedContent.map((item: { name: string; url: string }, index: number) => (
                            <PasswordPart key={index} name={item.name} url={item.url} />
                        ))}
                </div>
            )}
            {!selectedFolder && (
                <div className={cls.emptyPassword}>
                    <img src={addPassword} alt="" className={cls.addIcon} />
                    <p>Добавить пароль</p>
                </div>
            )}
        </section>
    );
};
