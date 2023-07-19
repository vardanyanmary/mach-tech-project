import cls from './CentralSections.module.scss'
import star from '../../shared/assets/Vector (8).svg'

export const CentralSection = () => {

    return(
        <section className={cls.CentralSection}>

            <div className={cls.firstLine}>
                <span>
                    Название
                    <span className={cls.sort}> ↓ </span>
                </span>
                <span>URL</span>
                <img src={star} alt="" />
            </div>
            
        </section>
    );

}