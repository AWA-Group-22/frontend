import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './StartPage.module.css';
import { UserAuthContext } from './Contexts';

export default function StartPage() {

    const userAuthContextValue = useContext(UserAuthContext);

    return (
      <div>
        <div>
          { userAuthContextValue.jwt != null ?
            <Link to="home">Go to home page</Link>
            :
            <>
              <div className={ styles.container1 }><button className={ styles.buttonStyle }><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link></button></div>
              <div className={ styles.container2 }><button className={ styles.buttonStyle }><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign up</Link></button></div>
            </>
          }
        </div>
      </div>
    )
  }

//     return (
//         <div>
//             <div className={styles.headerContainer}>
//                 <div className={styles.brandText}>Gateway Takeaway</div>
//             </div>
//             <div className={ styles.titleText }>
//                 { props.userJwt != null ? <Link to="home">Go to home page </Link> :
//                     <>
//                     <div><button onClick={ props.logout } >Logout</button></div>
//                         
//                         
//                     </>
//                 }
//             </div>
//         </div>
//     )
// }
