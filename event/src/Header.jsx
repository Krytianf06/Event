import React from 'react';
import css from './Header.module.css';

function Header() {
 
 
  return (
    <div className={css.header}>
      <div>
        <a className={css.logo} href="./images/search icon.svg">
        </a>
      </div>
      <h1 className={css.title}>FIND BEST EVENTS AROUND THE WORLD</h1>
      <div>
        <input type="text"
              name="searchEvent" 
              placeholder="Start searching"
              className={css.search}/>
        <button className={css.btn}>
        <svg className={css.svg} width="100" height="100">
        <path className={css.svg2} style={{fill:'red'}}  d="M4.024 4.024c2.595-2.595 6.045-4.024 9.715-4.024s7.12 1.429 9.715 4.024c2.595 2.595 4.024 6.045 4.024 9.715 0 3.355-1.195 6.526-3.383 9.029l7.63 7.63c0.366 0.366 0.366 0.961 0 1.327-0.183 0.183-0.423 0.275-0.664 0.275s-0.48-0.092-0.663-0.275l-7.63-7.63c-2.502 2.188-5.673 3.383-9.029 3.383-3.67 0-7.12-1.429-9.715-4.024s-4.024-6.045-4.024-9.715 1.429-7.12 4.024-9.715zM5.351 22.127c4.625 4.625 12.15 4.625 16.775 0s4.625-12.15 0-16.775c-2.313-2.313-5.35-3.469-8.388-3.469s-6.075 1.157-8.388 3.469c-4.625 4.625-4.625 12.15 0 16.775z"></path>
        </svg>
        </button>
        
      </div>
      
      <button>
        
      </button>

    </div>
  );
};

export default Header;
