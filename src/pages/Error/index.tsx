import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Error: FC = () => (
  //   <SecondaryPagesLayout>
  <>
    <h2 data-testid="title-404">404 - No page found</h2>
    <h2>Oh no...</h2>
    <div>
      <p>
        It looks like something has gone wrong, you may have mistyped the address or the page has
        been removed.
      </p>
      <p>Try again or return to our homepage, where you can find all the latest news.</p>
      <Link to="/" data-testid="homeLink">
        <div>
          {/* <Button data-testid="buttonLink" type="button" className={ButtonStyles.ErrorBtn}>
            Return Home
          </Button> */}
        </div>
      </Link>
    </div>
  </>
  //   </SecondaryPagesLayout>
);
