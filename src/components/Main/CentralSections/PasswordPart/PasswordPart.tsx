import cls from './PasswordPart.module.scss';
import emptyStar from '../../../../shared/assets/Vector (13).svg';
import imgIcon from '../../../../shared/assets/Vector (12).svg';

interface PasswordPartProps {
    name: string;
    url?: string;
    id?: number;
    handleSearch?: (id: number) => void;
}

export const PasswordPart = ({ id, name, url, handleSearch }: PasswordPartProps) => {
    return (
        <div className={cls.passwordItem} onClick={() => handleSearch && id !== undefined ? handleSearch(id) : null}>
            <div className={cls.namesPart}>
                <img src={imgIcon} alt="" className={cls.imgIcon} />
                <span>{name}</span>
            </div>
            <p>{url}</p>
            <img src={emptyStar} alt="" className={cls.emptyStar} />
        </div>
    );
};
