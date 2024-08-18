import styles from './SearchBar.module.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({onSubmit}){
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        if(query.trim() === '') {
          toast.error('Please enter a search term.');
          return;
        }
        onSubmit(query);
        setQuery('');
    };
    return (
      <div>
        <header className={styles.header}>
          <form onSubmit={handleFormSubmit} className={styles.form}>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handleChange}
              value={query}
              className={styles.input}
            />
          <button type="submit" className={styles.btn}>Search</button>
        </form>
  <Toaster/>
</header>

</div>
    );
}