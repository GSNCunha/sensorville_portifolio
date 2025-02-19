import styles from '../styles/ContactCode.module.css';

const contactItems = [

  {
    social: 'email',
    link: 'gabriel.sadigursky@gmail.com',
    href: 'mailto:gabriel.sadigursky@gmail.com',
  },
  {
    social: 'github',
    link: 'GSNCUNHA',
    href: 'https://github.com/GSNCunha',
  },
  {
    social: 'linkedin',
    link: 'gabriel-sadigursky',
    href: 'https://www.linkedin.com/in/gabriel-sadigursky/',
  },
  {
    social: 'instagram',
    link: 'gsncunha',
    href: 'https://www.instagram.com/gsncunha/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
