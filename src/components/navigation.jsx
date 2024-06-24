export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            VNUK CHATTING APP
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                FEATURES
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                ABOUT
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                TEAM
              </a>
            </li>
            <li>
              <a href='https://app.vnukchatting.site/login' target='_blank' className='page-scroll' rel="noreferrer">
                LOGIN
              </a>
            </li>
            <li>
              <a href='https://app.vnukchatting.site/register' target='_blank' className='page-scroll' rel="noreferrer">
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
