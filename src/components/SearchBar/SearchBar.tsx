import styles from './SearchBar.module.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({onSubmit}) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

export default SearchBar;