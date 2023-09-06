import s from './Header.module.css';

const Header = () => {
   return (
      <header className={s.header}>
         <img src="data:image/png;base64,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" />
      </header>
   );
};

export default Header;