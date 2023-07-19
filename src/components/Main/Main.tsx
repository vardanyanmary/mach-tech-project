import { CentralSection } from "../CentralSections/CentralSections";
import { LeftSection } from "../LeftSection/LeftSection";
import cls from './Main.module.scss'

export const Main = () => {
  return (
    <main className={cls.Main}>
      <LeftSection />
      <CentralSection />
    </main>
  );
};
