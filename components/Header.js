import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>DevWeb</span> News
            </h1>
            <p className={headerStyles.description}>
                keep up to date with latest web news.
            </p>
        </div>
    );
}

export default Header;