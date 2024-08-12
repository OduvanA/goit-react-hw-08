import css from './HomePage.module.css';

export default function HomePage() {
  return (
      <div className={css.container}>
        <h1 className={css.title}>
          MyContacts App          
        </h1>
        <p>create your phonebook{' '}
        </p>
        <p className={ css.emoji} role="img" aria-label="Greeting icon">
            💁‍♀️📲</p> 
      </div>
  );
}
